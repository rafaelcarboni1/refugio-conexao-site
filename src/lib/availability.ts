export type DomoSlug = "domo-one" | "domo-two" | "domo-three";

type ICalEventRange = {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD (checkout)
};

type CacheEntry = {
  expiresAt: number;
  events: ICalEventRange[];
};

const FIVE_MINUTES = 5 * 60 * 1000;
const cache = new Map<string, CacheEntry>();

export const ICAL_BY_DOMO: Record<DomoSlug, string | undefined> = {
  "domo-one": process.env.AIRBNB_ICAL_DOMO_ONE,
  "domo-two": process.env.AIRBNB_ICAL_DOMO_TWO,
  "domo-three": process.env.AIRBNB_ICAL_DOMO_THREE,
};

const isoDate = (date: Date) => date.toISOString().slice(0, 10);

const parseIcalDateToIso = (value: string): string | null => {
  const clean = value.trim();

  if (/^\d{8}$/.test(clean)) {
    const y = clean.slice(0, 4);
    const m = clean.slice(4, 6);
    const d = clean.slice(6, 8);
    return `${y}-${m}-${d}`;
  }

  if (/^\d{8}T\d{6}Z?$/.test(clean)) {
    const y = Number(clean.slice(0, 4));
    const m = Number(clean.slice(4, 6)) - 1;
    const d = Number(clean.slice(6, 8));
    const hh = Number(clean.slice(9, 11));
    const mm = Number(clean.slice(11, 13));
    const ss = Number(clean.slice(13, 15));

    const dt = new Date(Date.UTC(y, m, d, hh, mm, ss));
    return isoDate(dt);
  }

  return null;
};

const unfoldIcsLines = (raw: string): string[] => {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const unfolded: string[] = [];

  for (const line of lines) {
    if ((line.startsWith(" ") || line.startsWith("\t")) && unfolded.length > 0) {
      unfolded[unfolded.length - 1] += line.slice(1);
    } else {
      unfolded.push(line);
    }
  }

  return unfolded;
};

const parseIcsEvents = (icsText: string): ICalEventRange[] => {
  const lines = unfoldIcsLines(icsText);
  const events: ICalEventRange[] = [];

  let inEvent = false;
  let startRaw = "";
  let endRaw = "";

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      inEvent = true;
      startRaw = "";
      endRaw = "";
      continue;
    }

    if (line === "END:VEVENT") {
      if (inEvent) {
        const startDate = parseIcalDateToIso(startRaw);
        const endDate = parseIcalDateToIso(endRaw);

        if (startDate && endDate) {
          events.push({ startDate, endDate });
        }
      }

      inEvent = false;
      continue;
    }

    if (!inEvent) continue;

    if (line.startsWith("DTSTART")) {
      const parts = line.split(":");
      startRaw = parts[parts.length - 1] ?? "";
    }

    if (line.startsWith("DTEND")) {
      const parts = line.split(":");
      endRaw = parts[parts.length - 1] ?? "";
    }
  }

  return events;
};

const toMs = (date: string) => Date.parse(`${date}T00:00:00Z`);

export const rangesOverlap = (
  startA: string,
  endA: string,
  startB: string,
  endB: string,
) => {
  const aStart = toMs(startA);
  const aEnd = toMs(endA);
  const bStart = toMs(startB);
  const bEnd = toMs(endB);

  return aStart < bEnd && bStart < aEnd;
};

export const getDomoBookedEvents = async (slug: DomoSlug): Promise<ICalEventRange[]> => {
  const icalUrl = ICAL_BY_DOMO[slug];

  if (!icalUrl) {
    throw new Error(`Missing iCal URL for ${slug}`);
  }

  const now = Date.now();
  const cached = cache.get(slug);

  if (cached && cached.expiresAt > now) {
    return cached.events;
  }

  const response = await fetch(icalUrl, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch iCal for ${slug}`);
  }

  const raw = await response.text();
  const events = parseIcsEvents(raw);

  cache.set(slug, {
    events,
    expiresAt: now + FIVE_MINUTES,
  });

  return events;
};

export const isRangeAvailable = async (
  slug: DomoSlug,
  checkin: string,
  checkout: string,
): Promise<boolean> => {
  const events = await getDomoBookedEvents(slug);

  return !events.some((event) =>
    rangesOverlap(checkin, checkout, event.startDate, event.endDate),
  );
};
