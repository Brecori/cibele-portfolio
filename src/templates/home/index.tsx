import { FC } from "react";
import { Navbar } from "../shared/navbar";
import { Hero } from "./hero";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div style={{ height: "100vh" }} />
    </>
  );
};
