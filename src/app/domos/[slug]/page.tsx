import Link from "next/link";
import { notFound } from "next/navigation";
import { domos } from "@/lib/domos";

const whatsappNumber = "554891971032";

const wa = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export function generateStaticParams() {
  return domos.map((domo) => ({ slug: domo.slug }));
}

export default async function DomoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domo = domos.find((item) => item.slug === slug);

  if (!domo) {
    notFound();
  }

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex w-[min(1200px,94%)] items-center justify-between rounded-full border border-white/25 bg-black/35 px-4 py-2 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-refugio.jpg"
              alt="Refúgio Conexão"
              className="h-10 w-10 rounded-full border border-white/35 object-cover"
            />
            <div className="leading-tight text-white">
              <p className="text-sm font-semibold tracking-wide">Refúgio Conexão</p>
              <p className="text-[11px] text-white/80">Praia Grande • SC</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link href="/" className="secondary-btn !border-white/70 !text-white hover:!bg-white hover:!text-black">
              Voltar ao início
            </Link>
            <a
              className="primary-btn !bg-white !text-black hover:!bg-[#f8d69f]"
              href={wa(domo.message)}
              target="_blank"
              rel="noreferrer"
            >
              Reservar
            </a>
          </div>
        </div>
      </header>

      <section className="relative min-h-[82vh] overflow-hidden">
        <img src={domo.hero} alt={domo.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/75" />

        <div className="section-shell relative flex min-h-[82vh] items-end pb-14 pt-32">
          <div className="max-w-3xl text-white">
            <p className="inline-flex rounded-full border border-white/35 px-3 py-1 text-xs tracking-[0.18em] uppercase">
              {domo.mood}
            </p>
            <h1 className="mt-4 text-6xl leading-[0.9] md:text-8xl">{domo.name}</h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c987]">
              {domo.capacity}
            </p>
            <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">{domo.description}</p>
            <a
              href={wa(domo.message)}
              target="_blank"
              rel="noreferrer"
              className="primary-btn mt-8 !bg-[#25D366] hover:!bg-[#20bb58]"
            >
              Ver disponibilidade no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="card-glass p-6 md:p-10">
          <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">Diferenciais</p>
          <h2 className="mt-2 text-5xl">Tudo que você encontra neste domo</h2>
          <ul className="mt-6 grid gap-3 text-sm text-[var(--secondary)] md:grid-cols-2">
            {domo.highlights.map((item) => (
              <li key={item} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">Galeria completa</p>
            <h2 className="mt-2 text-5xl">{domo.gallery.length} fotos do {domo.name}</h2>
          </div>
          <a
            href={wa(`Olá! Quero mais informações e disponibilidade para o ${domo.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Falar com atendimento
          </a>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {domo.gallery.map((img) => (
            <img
              key={img}
              src={img}
              alt={`Foto do ${domo.name}`}
              className="mb-4 w-full rounded-2xl border border-[var(--border)] bg-white"
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-white">
        <img
          src={domo.cover}
          alt={domo.name}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="section-shell relative text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-[#f2c987]">Reserva direta</p>
          <h2 className="mt-2 text-5xl md:text-6xl">Pronto para viver o {domo.name}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            Fale agora com a equipe e receba disponibilidade, valores e opções de experiência.
          </p>
          <a
            href={wa(domo.message)}
            target="_blank"
            rel="noreferrer"
            className="primary-btn mt-8 !bg-[#25D366] text-white hover:!bg-[#20bb58]"
          >
            Reservar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
