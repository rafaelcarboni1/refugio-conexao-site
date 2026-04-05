import { NextResponse } from "next/server";
import {
  type DomoSlug,
  isRangeAvailable,
} from "@/lib/availability";

const isValidDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value);
const allowedDomos: DomoSlug[] = ["domo-one", "domo-two", "domo-three"];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const domo = searchParams.get("domo") as DomoSlug | null;
    const checkin = searchParams.get("checkin") ?? "";
    const checkout = searchParams.get("checkout") ?? "";

    if (!domo || !allowedDomos.includes(domo)) {
      return NextResponse.json(
        { error: "Domo inválido" },
        { status: 400 },
      );
    }

    if (!isValidDate(checkin) || !isValidDate(checkout)) {
      return NextResponse.json(
        { error: "Datas inválidas" },
        { status: 400 },
      );
    }

    if (checkin >= checkout) {
      return NextResponse.json(
        { error: "Check-out precisa ser depois do check-in" },
        { status: 400 },
      );
    }

    const available = await isRangeAvailable(domo, checkin, checkout);

    return NextResponse.json({
      domo,
      checkin,
      checkout,
      available,
      source: "airbnb-ical",
      checkedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Não foi possível consultar disponibilidade agora",
        details: error instanceof Error ? error.message : "unknown",
      },
      { status: 500 },
    );
  }
}
