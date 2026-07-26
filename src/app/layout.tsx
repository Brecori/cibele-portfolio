import type { Metadata } from "next";
import { Lato } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/global";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const siteName = "Cibele Rodrigues";
const siteTitle = "Cibele Rodrigues | Portfólio de Design Visual e UX/UI";
const siteDescription =
  "Portfólio de Cibele Rodrigues, designer visual e UX/UI focada em interfaces, design systems e experiências digitais.";
const siteUrl = "https://cibele-portfolio.vercel.app/";
const metadataBase = new URL(siteUrl);
const socialImage = "/imgs/share/default.webp";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "Cibele Rodrigues",
    "portfólio",
    "designer visual",
    "UX/UI",
    "UI design",
    "UX design",
    "design systems",
    "interfaces digitais",
    "experiência do usuário",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Portfólio de Cibele Rodrigues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lato.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
