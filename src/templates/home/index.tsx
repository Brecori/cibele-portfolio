import { HomeNavbar } from "./home-navbar";
import { Hero } from "./hero";
import { Certifications } from "./certifications";
import { Experiences } from "./experiences";
import { Footer } from "../shared/footer";
import { Galleries } from "./galleries";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { FC } from "react";

export const HomeTemplate: FC = () => {
  return (
    <main>
      <HomeNavbar />
      <Hero />
      <Experiences />
      <Galleries />
      <Projects />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  );
};
