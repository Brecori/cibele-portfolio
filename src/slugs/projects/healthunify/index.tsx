import { ProjectProps } from "../props";

export const healthunify: ProjectProps = {
  slug: "healthunify",
  title: "HealthUnify",
  image: "healthunify",
  accentColor: "bustyBlue",
  subtitle: "Seu universo de saúde em um único acesso.",
  tags: [
    "UX/UI",
    "HealthTech",
    "Prototipação",
    "Sistema digital",
    "Organização de dados",
  ],
  description: (
    <>
      HealthUnify é uma solução criada para reduzir o uso de papel em hospitais,
      centralizando prontuários, receitas e documentos em um único sistema
      digital. <br /> <br />A proposta busca facilitar o acesso às informações,
      melhorar a organização dos processos hospitalares e tornar a jornada entre
      pacientes e profissionais mais eficiente.
    </>
  ),
  prototype: "Ver protótipo no Figma",
  figmaUrl: "",
  highlights: [
    {
      title: "Digitalização",
      description:
        "Prontuários, receitas e documentos reunidos em ambiente digital.",
    },
    {
      title: "Organização",
      description:
        "Informações centralizadas para facilitar o acesso e a gestão hospitalar.",
    },
    {
      title: "Sustentabilidade",
      description:
        "Redução do uso de papel em rotinas administrativas e de atendimento.",
    },
  ],
  prototypeImages: [],
  partners: [{ name: "Azure", logoUrl: "", altUrl: "" }],
};
