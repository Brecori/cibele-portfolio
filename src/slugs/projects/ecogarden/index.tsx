import { ProjectProps } from "../props";

export const ecogarden: ProjectProps = {
  slug: "ecogarden",
  title: "EcoGarden",
  image: "ecogarden",
  accentColor: "geckoGreen",
  subtitle: "Cultive, aprenda e preserve com o EcoGarden.",
  tags: [
    "UX/UI",
    "Sustentabilidade",
    "Prototipação",
    "Alimentação consciente",
    "Produto digital",
  ],
  description: (
    <>
      EcoGarden é uma solução criada para facilitar o cultivo de hortas em casa,
      conectando tecnologia, sustentabilidade e alimentação consciente. <br />
      <br />O projeto ajuda usuários a planejar, acompanhar e cuidar de hortas
      domésticas de forma mais simples, organizada e acessível.
    </>
  ),
  prototype: (
    <>
      A experiência visual combina estética natural, organização e tecnologia
      para tornar o cuidado com hortas mais intuitivo e agradável. <br /> <br />
      O protótipo reúne conteúdos, simulações e acompanhamento do cultivo em uma
      jornada simples para quem quer começar ou manter uma horta em casa.
    </>
  ),

  figmaUrl: "",
  highlights: [
    {
      title: "Cultivo",
      description:
        "Orientações para plantar e cuidar de hortas de forma leve e guiada.",
    },
    {
      title: "Organização",
      description:
        "Tarefas e informações para acompanhar o ciclo de crescimento.",
    },
    {
      title: "Consciência",
      description:
        "Incentivo à alimentação mais saudável e a uma rotina sustentável.",
    },
  ],
  prototypeImages: [],
  partners: [
    { name: "Microsoft", logoUrl: "", altUrl: "" },
    { name: "Kraft Heinz", logoUrl: "", altUrl: "" },
  ],
};
