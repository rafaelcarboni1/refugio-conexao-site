const WHATSAPP_BASE =
  "https://wa.me/554891971032?text=Olá!%20Vim%20pelo%20site%20da%20Refúgio%20Conexão%20e%20gostaria%20de%20verificar%20disponibilidade.";

const domos = [
  {
    id: "one",
    name: "Domo One",
    capacity: "Até 2 pessoas",
    description:
      "Conforto, sofisticação e conexão com a natureza em uma experiência exclusiva para casal.",
    highlights: [
      "Hidromassagem privativa",
      "Ar-condicionado quente/frio",
      "Cozinha completa equipada",
      "Wi-Fi de alta velocidade",
    ],
    image: "https://refugioconexao.com/wp-content/uploads/2024/04/one-1.webp",
  },
  {
    id: "two",
    name: "Domo Two",
    capacity: "Até 2 pessoas",
    description:
      "Exclusividade e aconchego com estrutura completa, vista para os cânions e ambiente premium.",
    highlights: [
      "Hidromassagem privativa",
      "Smart TV 4K com Netflix",
      "Deck para relaxamento",
      "Estacionamento privativo",
    ],
    image: "https://refugioconexao.com/wp-content/uploads/2024/04/two-1.webp",
  },
  {
    id: "three",
    name: "Domo Three",
    capacity: "Até 4 pessoas",
    description:
      "A versão mais completa do Refúgio, com piscina privativa aquecida e espaço externo de lazer.",
    highlights: [
      "Piscina aquecida com borda infinita",
      "Chuveiro duplo",
      "Espaço de lazer com churrasqueira",
      "Hidromassagem privativa",
    ],
    image: "https://refugioconexao.com/wp-content/uploads/2024/04/refugio1-e1714435670322.jpg",
  },
];

const experiences = [
  "Voo de balão com vista panorâmica dos cânions",
  "Cavalgadas turísticas em meio à natureza",
  "Passeios de quadriciclo",
  "Trilhas e cachoeiras da região",
];

const faqs = [
  {
    q: "Quantas pessoas cada domo acomoda?",
    a: "Domo One e Domo Two acomodam até 2 pessoas. Domo Three acomoda até 4 pessoas.",
  },
  {
    q: "Qual o horário de check-in e check-out?",
    a: "Check-in a partir das 16h e check-out até 13h.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Parcelamento em até 6x sem juros e 10% de desconto para pagamento à vista no dinheiro ou Pix.",
  },
  {
    q: "As experiências estão inclusas na diária?",
    a: "As experiências são opcionais e realizadas sob reserva, conforme disponibilidade.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
        <div className="section-shell flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo-refugio.jpg"
              alt="Logo Refúgio Conexão"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">Refúgio Conexão</p>
              <p className="text-xs text-[var(--muted)]">Praia Grande - SC</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-medium text-[var(--secondary)] md:flex">
            <a href="#domos" className="hover:text-[var(--accent)]">
              Domos
            </a>
            <a href="#experiencias" className="hover:text-[var(--accent)]">
              Experiências
            </a>
            <a href="#localizacao" className="hover:text-[var(--accent)]">
              Localização
            </a>
            <a href="#faq" className="hover:text-[var(--accent)]">
              FAQ
            </a>
          </nav>

          <a className="primary-btn" href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
            Reservar no WhatsApp
          </a>
        </div>
      </header>

      <main id="home" className="pb-28 md:pb-16">
        <section className="section-shell pt-8 md:pt-14">
          <div className="grid gap-8 overflow-hidden rounded-3xl bg-[var(--primary)] p-5 text-white md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="flex flex-col justify-center gap-6">
              <p className="w-fit rounded-full border border-white/30 px-3 py-1 text-xs tracking-[0.2em] uppercase text-white/90">
                Domos exclusivos em Praia Grande-SC
              </p>
              <h1 className="text-4xl leading-tight md:text-6xl">
                Viva a conexão entre conforto premium e natureza dos cânions.
              </h1>
              <p className="max-w-xl text-base text-stone-100 md:text-lg">
                3 domos privativos com estrutura completa para uma estadia inesquecível na
                Capital dos Canyons. Reserva rápida e atendimento direto pelo WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="secondary-btn !border-white !text-white hover:!bg-white hover:!text-[var(--primary)]" href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
                  Ver disponibilidade
                </a>
                <a className="secondary-btn !border-white/60 !text-white hover:!bg-white hover:!text-[var(--primary)]" href="#domos">
                  Conhecer os domos
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <img
                src="https://refugioconexao.com/wp-content/uploads/2024/04/one-2.webp"
                alt="Domo com vista para natureza"
                className="h-44 w-full rounded-2xl object-cover sm:h-full"
              />
              <img
                src="https://refugioconexao.com/wp-content/uploads/2024/04/two-2.webp"
                alt="Interior de domo"
                className="h-44 w-full rounded-2xl object-cover sm:h-full"
              />
              <img
                src="https://refugioconexao.com/wp-content/uploads/2024/04/rodrigo1.webp"
                alt="Cânions e paisagem"
                className="h-44 w-full rounded-2xl object-cover sm:col-span-2"
              />
            </div>
          </div>
        </section>

        <section className="section-shell mt-8 grid gap-4 md:grid-cols-5">
          {[
            "Praia Grande-SC • Capital dos Canyons",
            "Check-in 16h",
            "Check-out 13h",
            "6x sem juros",
            "10% off à vista",
          ].map((item) => (
            <div key={item} className="card-glass px-4 py-3 text-center text-sm text-[var(--secondary)]">
              {item}
            </div>
          ))}
        </section>

        <section id="domos" className="section-shell mt-20">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Escolha seu domo
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl">3 experiências exclusivas</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {domos.map((domo) => (
              <article id={domo.id} key={domo.id} className="card-glass overflow-hidden">
                <img src={domo.image} alt={domo.name} className="h-52 w-full object-cover" />
                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-3xl">{domo.name}</h3>
                    <p className="text-sm font-semibold text-[var(--accent)]">{domo.capacity}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--secondary)]">{domo.description}</p>
                  <ul className="space-y-1 text-sm text-[var(--secondary)]">
                    {domo.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <a className="primary-btn w-full" href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
                    Reservar {domo.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencias" className="section-shell mt-20 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card-glass p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Experiências
            </p>
            <h2 className="mt-2 text-4xl">Muito além da hospedagem</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--secondary)]">
              Viva Praia Grande-SC com experiências que ampliam a conexão com a natureza.
              Todas podem ser organizadas sob reserva, conforme disponibilidade.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--secondary)]">
              {experiences.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <a className="primary-btn mt-7" href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
              Quero planejar minha experiência
            </a>
          </div>

          <img
            src="https://refugioconexao.com/wp-content/uploads/2024/04/refugio.webp"
            alt="Paisagem do Refúgio Conexão"
            className="h-full min-h-[320px] w-full rounded-3xl object-cover"
          />
        </section>

        <section id="localizacao" className="section-shell mt-20">
          <div className="card-glass grid gap-6 p-6 md:grid-cols-2 md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Localização
              </p>
              <h2 className="mt-2 text-4xl">Praia Grande, Santa Catarina</h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--secondary)]">
                Estrada Geral Costão Novo - Cachoeira de Fátima, Praia Grande-SC. Um refúgio
                rodeado de natureza e com acesso aos principais atrativos da região dos cânions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="primary-btn"
                  href="https://maps.google.com/?q=Refúgio+Conexão+Praia+Grande+SC"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver no mapa
                </a>
                <a className="secondary-btn" href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
                  Como chegar
                </a>
              </div>
            </div>

            <iframe
              title="Mapa Refúgio Conexão"
              src="https://maps.google.com/maps?q=Ref%C3%BAgio%20Conex%C3%A3o%20Praia%20Grande%20SC&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full rounded-2xl border border-[var(--border)]"
              loading="lazy"
            />
          </div>
        </section>

        <section id="faq" className="section-shell mt-20">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">FAQ</p>
            <h2 className="mt-2 text-4xl md:text-5xl">Perguntas frequentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card-glass group p-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--primary)]">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--secondary)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-shell mt-20">
          <div className="rounded-3xl bg-[var(--primary)] p-8 text-center text-white md:p-12">
            <h2 className="text-4xl md:text-5xl">Pronto para viver essa experiência?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-stone-200 md:text-base">
              Fale com a equipe da Refúgio Conexão no WhatsApp e veja disponibilidade para sua data.
            </p>
            <a className="secondary-btn mt-7 !border-white !text-white hover:!bg-white hover:!text-[var(--primary)]" href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
              Reservar agora
            </a>
          </div>
        </section>
      </main>

      <a
        href={WHATSAPP_BASE}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-50 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-xl md:hidden"
      >
        Reservar no WhatsApp
      </a>
    </>
  );
}
