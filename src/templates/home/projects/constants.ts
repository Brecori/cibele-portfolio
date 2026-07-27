import { BrandName } from "@/constants/project-partners";

export const projectsConstants = {
  id: "projects",
  title: "Reconhecimentos e conquistas",
  subtitle:
    "Projetos reconhecidos em desafios acadêmicos da FIAP, desenvolvidos da concepção à apresentação final.",
  projectsList: [
    {
      title: "Totenize",
      subtitle: "Top 10 - Startup One FIAP",
      description:
        "Robôs totens interativos criados para tornar o atendimento mais acessível, automatizado e inteligente, com suporte em Libras, pedidos, pagamentos e coleta de dados para melhorar a experiência do cliente.",
      backgroundImg: "/imgs/projects/totenize.webp",
      href: "/projects/totenize",
    },
    {
      title: "SeaSweep",
      subtitle: "1º lugar - Global Solution: Blue Future",
      description:
        "Ímã sob navios cargueiros para captar microplásticos e reaproveitá-los em produtos com marcas parceiras.",
      backgroundImg: "/imgs/projects/seasweep.webp",
      href: "/projects/seasweep",
    },
    {
      title: "MedVision",
      subtitle: "1º lugar - Global Solution: Tech Care 4 All",
      description:
        "Óculos com câmera e plataforma ao vivo para ampliar o acesso ao ensino prático de estudantes de medicina.",
      backgroundImg: "/imgs/projects/medvision-360.webp",
      href: "/projects/medvision-360",
    },
    {
      title: "HealthUnify",
      subtitle: "1º lugar - Enterprise Challenge FIAP",
      description:
        "Sistema digital para unificar prontuários, receitas e documentos hospitalares, reduzindo o uso de papel.",
      backgroundImg: "/imgs/projects/healthunify.webp",
      href: "/projects/healthunify",
    },
    {
      title: "EcoGarden",
      subtitle: "1º lugar - Global Solution: AI Feeding the Future",
      description:
        "Sistema para cultivo de hortas em casa, unindo tecnologia, sustentabilidade e alimentação consciente.",
      backgroundImg: "/imgs/projects/ecogarden.webp",
      href: "/projects/ecogarden",
    },
  ],
  projectsPartnersTitle: "Parceiros dos projetos reconhecidos",
  projectsPartners: [
    "Microsoft",
    "Azure",
    "AWS",
    "UNESCO",
    "UN Global Compact",
    "Kraft Heinz",
    "Hapvida",
    "Softtek",
    "CropLife Brasil",
    "Rede Oceano Limpo",
  ] satisfies BrandName[],
};
