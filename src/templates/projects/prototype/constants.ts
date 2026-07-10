export const projectPrototypeConstants = {
  title: "Design e protótipo",
  figmaButtonLabel: "Ver protótipo no Figma",
  prototypeImageAlt: (index: number) => `Tela ${index} do protótipo do projeto`,
  prototypeImagePlaceholder: "https://dummyimage.com/320x320/878787/000000.png",
  prototypeImage: (image: string, index: number) =>
    `/imgs/projects/${image}/prototype-${index}.webp`,
  prototypeIndexes: [1, 2, 3, 4] as const,
};
