import Link from "next/link";
import { allGalleryImages, domos } from "@/lib/domos";

const whatsappNumber = "554891971032";

const wa = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const experiences = [
  "Voo de balão ao amanhecer com vista dos cânions",
  "Passeio de quadriciclo por trilhas panorâmicas",
  "Cavalgada turística com roteiro de natureza",
  "Roteiro de cachoeiras e mirantes da região",
];

const differentials = [
  {
    title: "Privacidade real",
    text: "Domos independentes com atmosfera reservada para relaxar sem interrupções.",
  },
  {
    title: "Conforto premium",
    text: "Estrutura completa para uma experiência de alto padrão em qualquer estação.",
  },
  {
    title: "Localização estratégica",
    text: "A poucos minutos das principais atrações da Capital dos Cânions.",
  },
  {
    title: "Atendimento direto",
    text: "Reserva e dúvidas resolvidas no WhatsApp, rápido e sem burocracia.",
  },
];

const faqs = [
  {
    q: "Como faço para reservar?",
    a: "A reserva é feita direto no WhatsApp. Você envia a data desejada e recebe disponibilidade e valores em seguida.",
  },
  {
    q: "Vocês aceitam parcelamento?",
    a: "Sim. Parcelamos em até 6x sem juros e oferecemos 10% de desconto para pagamento à vista via Pix ou dinheiro.",
  },
  {
    q: "Posso incluir experiências junto da hospedagem?",
    a: "Sim. Nossa equipe organiza experiências como balão, quadriciclo e roteiros na natureza sob reserva.",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_10%,rgba(242,201,135,.35),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(28,25,23,.12),transparent_30%)]" />

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex w-[min(1200px,94%)] items-center justify-between rounded-full border border-white/25 bg-black/35 px-4 py-2 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo-refugio.jpg"
              alt="Refúgio Conexão"
              className="h-10 w-10 rounded-full border border-white/35 object-cover"
            />
            <div className="leading-tight text-white">
              <p className="text-sm font-semibold tracking-wide">Refúgio Conexão</p>
              <p className="text-[11px] text-white/80">Praia Grande • SC</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <a href="#domos" className="hover:text-white">
              Domos
            </a>
            <a href="#galeria" className="hover:text-white">
              Galeria
            </a>
            <a href="#experiencias" className="hover:text-white">
              Experiências
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>

          <a
            className="primary-btn !bg-white !text-black hover:!bg-[#f8d69f]"
            href={wa("Olá! Vim pelo site e quero verificar disponibilidade.")}
            target="_blank"
            rel="noreferrer"
          >
            Reservar
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[98vh] overflow-hidden">
        <img
          src="/images/domo-three/domo-three-001-bda8973b5f.jpg"
          alt="Refúgio Conexão"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-black/80" />

        <div className="section-shell relative flex min-h-[98vh] items-end pb-12 pt-32 md:pb-16">
          <div className="grid w-full gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/35 px-3 py-1 text-xs tracking-[0.18em] text-white/90 uppercase">
                HOSPEDAGEM EXCLUSIVA NOS CÂNIONS
              </p>
              <h1 className="max-w-3xl text-5xl leading-[0.92] text-white md:text-7xl">
                Refúgio de luxo para viver a natureza sem abrir mão do conforto.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                Três domos autorais, estrutura premium e atendimento direto para você reservar
                com agilidade no WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="primary-btn !bg-[#f2c987] !text-black hover:!bg-[#ffdca8]"
                  href={wa("Olá! Quero disponibilidade para me hospedar no Refúgio Conexão.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver disponibilidade
                </a>
                <a
                  className="secondary-btn !border-white/75 !text-white hover:!bg-white hover:!text-black"
                  href="#domos"
                >
                  Explorar domos
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/85 md:text-sm">
                <span className="rounded-full border border-white/35 px-3 py-1.5">Check-in 16h</span>
                <span className="rounded-full border border-white/35 px-3 py-1.5">Check-out 13h</span>
                <span className="rounded-full border border-white/35 px-3 py-1.5">6x sem juros</span>
                <span className="rounded-full border border-white/35 px-3 py-1.5">10% no Pix</span>
              </div>
            </div>

            <div className="card-glass border-white/20 bg-black/35 p-5 text-white md:p-6">
              <p className="text-xs tracking-[0.16em] uppercase text-[#f2c987]">Reserva rápida</p>
              <h2 className="mt-2 text-3xl">Atendimento imediato</h2>
              <p className="mt-2 text-sm text-white/80">
                Envie sua data desejada e receba retorno com disponibilidade e condições.
              </p>
              <a
                href={wa("Olá! Quero reservar no Refúgio Conexão. Pode me ajudar com disponibilidade e valores?")}
                target="_blank"
                rel="noreferrer"
                className="primary-btn mt-5 w-full !bg-[#25D366] hover:!bg-[#20bb58]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell -mt-6 pb-6 md:-mt-8">
        <div className="grid gap-3 md:grid-cols-4">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-white/92 p-4 shadow-sm"
            >
              <p className="text-base font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-[var(--secondary)]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="domos" className="section-shell py-20">
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">SIGNATURE COLLECTION</p>
          <h2 className="mt-2 text-5xl">Escolha o seu domo</h2>
        </div>

        <div className="space-y-16">
          {domos.map((domo, index) => (
            <article
              key={domo.slug}
              className={`grid gap-6 md:grid-cols-2 md:items-center ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img src={domo.hero} alt={domo.name} className="h-[420px] w-full rounded-3xl object-cover" />
                <img
                  src={domo.cover}
                  alt={`${domo.name} detalhe`}
                  className="absolute -bottom-6 right-5 hidden h-48 w-40 rounded-2xl border-4 border-[var(--background)] object-cover shadow-xl md:block"
                />
              </div>

              <div className="card-glass p-6 md:p-8">
                <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">{domo.mood}</p>
                <h3 className="mt-2 text-5xl leading-none">{domo.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[var(--secondary)]">{domo.capacity}</p>
                <p className="mt-3 text-sm text-[var(--secondary)]">{domo.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-[var(--secondary)]">
                  {domo.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={wa(domo.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-btn"
                  >
                    Reservar {domo.name}
                  </a>
                  <Link href={`/domos/${domo.slug}`} className="secondary-btn">
                    Ver página completa
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="galeria" className="section-shell py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">VISUAL EXPERIENCE</p>
            <h2 className="mt-2 text-5xl">Galeria por domo</h2>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {domos.map((domo) => (
            <Link
              key={domo.slug}
              href={`/domos/${domo.slug}`}
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-white"
            >
              <img
                src={domo.gallery[0]}
                alt={domo.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-4">
                <p className="text-xl font-semibold">{domo.name}</p>
                <p className="text-sm text-[var(--secondary)]">{domo.gallery.length} fotos disponíveis</p>
                <p className="mt-3 text-xs tracking-[0.15em] uppercase text-[var(--accent)]">Abrir galeria completa</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          {allGalleryImages.slice(0, 8).map((img, i) => (
            <img
              key={img}
              src={img}
              alt="Galeria Refúgio Conexão"
              className={`h-44 w-full rounded-2xl object-cover md:h-64 ${
                i === 0 || i === 7 ? "md:col-span-2" : ""
              }`}
            />
          ))}
        </div>
      </section>

      <section id="experiencias" className="section-shell py-20">
        <div className="card-glass grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-10">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">EXPERIÊNCIAS</p>
            <h2 className="mt-2 text-5xl">Natureza com roteiro premium</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--secondary)]">
              Transforme a hospedagem em uma jornada completa. A equipe organiza experiências
              sob reserva para você viver o melhor da região dos cânions.
            </p>
            <a
              className="primary-btn mt-6"
              href={wa("Olá! Quero incluir experiências na minha hospedagem.")}
              target="_blank"
              rel="noreferrer"
            >
              Montar meu roteiro
            </a>
          </div>
          <div className="space-y-3">
            {experiences.map((exp) => (
              <div
                key={exp}
                className="rounded-2xl border border-[var(--border)] bg-white px-4 py-4 text-sm text-[var(--secondary)]"
              >
                {exp}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell py-12">
        <div className="mb-8 text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">FAQ</p>
          <h2 className="mt-2 text-5xl">Dúvidas frequentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-[var(--border)] bg-white p-4">
              <summary className="cursor-pointer list-none text-base font-semibold">
                {item.q}
                <span className="ml-2 text-[var(--accent)] group-open:hidden">+</span>
                <span className="ml-2 hidden text-[var(--accent)] group-open:inline">−</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--secondary)]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contato" className="relative mt-8 overflow-hidden bg-[var(--primary)] py-20 text-white">
        <img
          src="/images/domo-three/domo-three-020-82e57a2a2b.jpg"
          alt="Refúgio Conexão noite"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="section-shell relative text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-[#f2c987]">RESERVA DIRETA</p>
          <h2 className="mt-2 text-5xl md:text-6xl">Vamos fechar sua data?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            Atendimento rápido no WhatsApp para disponibilidade, valores e dúvidas. Sem
            formulário demorado.
          </p>
          <a
            href={wa("Olá! Quero fechar minha hospedagem no Refúgio Conexão. Pode me passar disponibilidade e valor?")}
            target="_blank"
            rel="noreferrer"
            className="primary-btn mt-8 !bg-[#25D366] text-white hover:!bg-[#20bb58]"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </section>

      <a
        href={wa("Olá! Vim pelo site e quero reservar no Refúgio Conexão.")}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-50 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-2xl md:hidden"
      >
        WhatsApp
      </a>
    </div>
  );
}
