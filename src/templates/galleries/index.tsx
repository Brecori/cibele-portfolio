import { FC } from "react";
import { Footer } from "../shared/footer";
import { ProjectsHeader } from "../shared/header";
import { ProjectsNavbar } from "../shared/projects-navbar";
import { GalleryGrid } from "./grid";
import { GalleriesTemplateProps } from "./props";

export const GalleriesTemplate: FC<GalleriesTemplateProps> = ({ gallery }) => {
  return (
    <main>
      <ProjectsNavbar />
      <ProjectsHeader
        title={gallery.title}
        subtitle={gallery.subtitle}
        tags={gallery.tags}
      />
      <GalleryGrid images={gallery.images} />
      <Footer showSocialMedia={false} />
    </main>
  );
};
