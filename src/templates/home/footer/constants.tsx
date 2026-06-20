import * as S from "./styles";

export const footerConstants = {
  logo: {
    src: "./svg/logo-complete.svg",
    alt: "Logo completa de Cibele Rodrigues",
    width: 145,
    height: 44,
    href: "#",
  },
  socialLinks: [
    {
      key: 1,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/cibelerodriguesl/",
      icon: {
        src: "./svg/footer/linkedin.svg",
        alt: "Ícone do LinkedIn",
        width: 23,
        height: 22,
      },
    },
    {
      key: 2,
      label: "Behance",
      href: "https://www.behance.net/cibelerodriguesl",
      icon: {
        src: "./svg/footer/behance.svg",
        alt: "Ícone do Behance",
        width: 34,
        height: 22,
      },
    },
    {
      key: 3,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=contato.cibelerodriguesl@gmail.com&su=Contato%20via%20portf%C3%B3lio&body=Ol%C3%A1%2C%20Cibele.%0A%0AConheci%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%2Fprojeto.%0A%0A%5BMensagem%5D%0A%0AAtenciosamente%2C",
      icon: {
        src: "./svg/footer/email.svg",
        alt: "Ícone de email",
        width: 37,
        height: 22,
      },
    },
  ],
  copyright: (currentYear: number) => (
    <>
      © {currentYear} Todos os direitos reservados. <br />
      Feito por{" "}
      <S.MadeByLink
        href="https://www.brenotosi.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Breno Tosi
      </S.MadeByLink>
    </>
  ),
};
