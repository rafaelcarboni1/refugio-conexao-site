import Link from "next/link";
import type { Metadata } from "next";

const whatsappNumber = "554891971032";

const wa = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const extras = [
  "Não cobramos taxa de serviço.",
  "Não oferecemos serviço de quarto durante a estadia, caso necessite, deve ser solicitado com 1 dia de antecedência e será cobrado adicional pelo serviço.",
];

const usoHospedagem = [
  "Caso haja algum consumo ou prejuízo à propriedade e qualquer item no chalé reservado será pago no check-out.",
  "Atenção! Não é permitido fumar dentro de nossos chalés.",
  "Não são permitidas festas ou eventos dentro da propriedade.",
  "É permitido trazer pets de pequeno porte e calmos, cobramos uma taxa.",
  "Lembrando que a responsabilidade de cuidar é totalmente do hóspede.",
  "É obrigatório o uso de coleira e guia no ambiente externo.",
  "Em caso de danos ou de má conduta higiênica de seu pet poderá ser cobrado uma taxa extra, conforme análise caso a caso.",
  "Todas as diárias contam com cesta de café da manhã inclusa.",
  "Além disso, o chalé é equipado com cozinha completa, com utensílios necessários para você preparar tudo no local.",
  "Demais regras e orientações: o acesso às dependências é restrito a hóspedes.",
  "Por gentileza, preserve a natureza. Não jogue lixo no chão e não perturbe.",
  "Se precisar levar toalha para o passeio, levar a toalha escura que é deixada no banheiro.",
];

const cancelamentos = [
  "Com base no artigo 20 do decreto 7.381 do CDC que diz: “Na ocorrência de cancelamento ou solicitação de reembolso de valores referentes aos serviços turísticos, a pedido do consumidor, eventual multa deverá estar prevista em contrato e ser informada previamente ao consumidor”, seguem abaixo nossas regras:",
  "Até 30 dias antes da data de entrada: multa de 5% para cancelamentos quando o pagamento na reserva for via pix ou transferência; para pagamento na reserva via cartão com parcelamento custo de 10%. Sem custo para transferências da data.",
  "De 29 a 15 dias antes da data de entrada: multa de 10% para cancelamentos quando o pagamento na reserva for via pix ou transferência; para pagamento na reserva via cartão com parcelamento custo de 15%. Custo de 5% para transferências da data.",
  "De 14 a 05 dias antes da data de entrada: multa de 25% para cancelamentos quando o pagamento na reserva for via pix ou transferência; para pagamento na reserva via cartão com parcelamento custo de 35%. Custo de 15% para transferências de data.",
  "Solicitações de cancelamento ou transferência com menos de 5 dias de antecedência não serão atendidas.",
  "As multas são calculadas com base no valor total da reserva e o crédito é referente ao valor pago, não quantidade de diárias.",
  "O valor em crédito para uma futura hospedagem possui validade de 1 (um) ano, a partir da data do cancelamento.",
  "Saídas antecipadas não geram estorno nem quitam o valor em aberto na reserva.",
  "Lembramos que nossas diárias sofrem reajustes periodicamente e o valor da nova reserva poderá ser diferente ao valor da reserva atual.",
  "Qualquer dúvida estamos à disposição.",
];

export const metadata: Metadata = {
  title: "Políticas de Reserva | Refúgio Conexão",
  description:
    "Confira as informações importantes, regras de hospedagem, cancelamentos e transferências do Refúgio Conexão em Praia Grande-SC.",
  alternates: {
    canonical: "/politicas-de-reserva",
  },
};

export default function PoliticasDeReservaPage() {
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
              href={wa("Olá! Vim pelo site e quero verificar disponibilidade e políticas da reserva.")}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="section-shell pt-36 pb-10">
        <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">Documento oficial</p>
        <h1 className="mt-2 text-5xl md:text-6xl">Informações importantes e política de reservas</h1>
        <p className="mt-4 text-sm text-[var(--secondary)] md:text-base">
          Não deixe de ler antes de se hospedar conosco.
        </p>
      </section>

      <section className="section-shell pb-8">
        <div className="card-glass p-6 md:p-8">
          <h2 className="text-3xl">Extras</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--secondary)]">
            {extras.map((item) => (
              <li key={item} className="rounded-xl border border-[var(--border)] bg-white px-3 py-2">
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell pb-8">
        <div className="card-glass p-6 md:p-8">
          <h2 className="text-3xl">Regras para uso da hospedagem</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--secondary)]">
            {usoHospedagem.map((item) => (
              <li key={item} className="rounded-xl border border-[var(--border)] bg-white px-3 py-2">
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell pb-8">
        <div className="card-glass p-6 md:p-8">
          <h2 className="text-3xl">Cancelamentos ou transferências</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--secondary)]">
            {cancelamentos.map((item) => (
              <li key={item} className="rounded-xl border border-[var(--border)] bg-white px-3 py-2">
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="rounded-3xl border border-[var(--border)] bg-[#1d1b19] p-6 text-white md:p-8">
          <p className="text-xs tracking-[0.18em] uppercase text-[#f2c987]">Atenciosamente</p>
          <p className="mt-2 text-2xl">Pousada Refúgio Conexão</p>

          <p className="mt-6 text-xs tracking-[0.18em] uppercase text-[#f2c987]">Dúvidas? Fale com nossa central de reservas</p>
          <p className="mt-2 text-sm text-white/90">+55 (48) 99197-1032</p>
          <p className="text-sm text-white/90">refugioconexao@gmail.com</p>
          <p className="text-sm text-white/90">www.refugioconexao.com</p>
          <p className="mt-3 text-sm text-white/90">
            Estrada Geral, s/nº - Costão Novo - Praia Grande / SC - Brasil CEP: 88990-000
          </p>
        </div>
      </section>
    </div>
  );
}
