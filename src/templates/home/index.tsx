import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Experiences } from "./experiences";
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
    </>
  );
};
