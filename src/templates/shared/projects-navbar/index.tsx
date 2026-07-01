import { FC } from "react";
import { Navbar } from "@/components/navbar";
import { projectsNavbarConstants as C } from "./constants";
import { ProjectsNavbarProps } from "./props";
import * as S from "./styles";

export const ProjectsNavbar: FC<ProjectsNavbarProps> = ({ image }) => {
  const logoUrl = image ? C.projectLogo(image) : null;

  return (
    <Navbar>
      <S.Content>
        <S.BrandLink href="/" aria-label="Voltar para a página inicial">
          <S.BrandLogo
            src={C.logo.src}
            alt={C.logo.alt}
            width={C.logo.width}
            height={C.logo.height}
            loading="eager"
          />
        </S.BrandLink>

        <S.ProjectLogoSlot>
          {logoUrl && (
            <a href="#">
              <S.ProjectLogo
                src={logoUrl}
                alt={`Logo do projeto ${image}`}
                width={200}
                height={36}
                $width={200}
                loading="eager"
              />
            </a>
          )}
        </S.ProjectLogoSlot>

        <S.SocialLinks>
          {C.socialLinks.map((socialLink) => (
            <S.SocialLink
              key={socialLink.label}
              href={socialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLink.label}
              title={socialLink.label}
            >
              <S.SocialIcon
                src={socialLink.icon.src}
                alt={socialLink.icon.alt}
                width={socialLink.icon.width}
                height={socialLink.icon.height}
                $width={socialLink.icon.width}
              />
            </S.SocialLink>
          ))}
        </S.SocialLinks>
      </S.Content>
    </Navbar>
  );
};
