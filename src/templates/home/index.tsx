import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Certifications } from "./certifications";
import { Experiences } from "./experiences";
import { Footer } from "./footer";
import { Gallerys } from "./gallerys";
import { Projects } from "./projects";
import { Skills } from "./skills";
import dynamic from "next/dynamic";
import { FC } from "react";

const VisualExperience = dynamic(
  () => import("./visual-experiences").then((mod) => mod.VisualExperience),
  {
    loading: () => <p>Loading...</p>,
  },
);

export const HomeTemplate: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experiences />
      <VisualExperience />
      <Projects />
      <Skills />
      <Gallerys />
      <Certifications />
      <Footer />
    </>
  );
};
