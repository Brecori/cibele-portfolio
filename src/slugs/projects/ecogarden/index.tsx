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
      O EcoGarden é uma plataforma voltada ao cultivo, à educação ambiental e à
      adoção de hábitos mais sustentáveis. O projeto incentiva o aprendizado
      sobre plantio, cuidados com o meio ambiente e preservação, aproximando as
      pessoas de práticas sustentáveis no cotidiano. <br /> <br />A experiência
      organiza orientações e conteúdos educativos em uma jornada visual simples
      e acolhedora. O protótipo acompanha o usuário durante as etapas de
      cultivo, facilita o acesso às informações e estimula uma relação mais
      consciente com a natureza.
    </>
  ),
  figmaUrl:
    "https://www.figma.com/design/OcAZ563wD6rsrhKvSY4qmJ/Totenize?node-id=14-19329&p=f&t=dareKLRPUrpT9Vag-0",
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
  partners: ["Microsoft", "Kraft Heinz", "CropLife Brasil"],
};
