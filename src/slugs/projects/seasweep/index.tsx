import { ProjectProps } from "../props";

export const seasweep: ProjectProps = {
  slug: "seasweep",
  title: "SeaSweep",
  image: "seasweep",
  accentColor: "earthBlue",
  subtitle: "Um oceano mais limpo começa com o SeaSweep.",
  tags: [
    "UX/UI",
    "Sustentabilidade",
    "Prototipação",
    "Inovação ambiental",
    "Produto digital",
  ],
  description: (
    <>
      O SeaSweep é uma solução desenvolvida para captar microplásticos durante
      rotas marítimas e reaproveitar esse material na criação de novos produtos.
      O projeto conecta tecnologia, sustentabilidade e marcas parceiras,
      transformando resíduos em valor e incentivando uma cadeia mais consciente
      e circular. <br /> <br />A interface reúne informações ambientais,
      operacionais e comerciais de forma visual e organizada. A navegação
      apresenta o impacto da solução, o processo de reaproveitamento e as
      oportunidades de colaboração entre empresas e organizações.
    </>
  ),
  figmaUrl:
    "https://www.figma.com/design/OcAZ563wD6rsrhKvSY4qmJ/Totenize?node-id=14-19329&p=f&t=dareKLRPUrpT9Vag-0",
  highlights: [
    {
      title: "Captação",
      description:
        "Coleta de microplásticos ao longo de rotas marítimas com apoio do sistema.",
    },
    {
      title: "Reaproveitamento",
      description:
        "Resíduos transformados em insumo para novos produtos com valor de mercado.",
    },
    {
      title: "Impacto",
      description:
        "Solução pensada para reduzir microplásticos no mar e gerar valor sustentável.",
    },
  ],
  partners: [
    "AWS",
    "UNESCO",
    "UN Global Compact",
    "Softtek",
    "Rede Oceano Limpo",
  ],
};
