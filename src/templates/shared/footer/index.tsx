import { FC } from "react";
import { footerConstants as C } from "./constants";
import * as S from "./styles";
import { FooterProps } from "./props";

export const Footer: FC<FooterProps> = ({ showSocialMedia = true }) => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <a href={C.logo.href}>
        <S.FooterLogo
          src={C.logo.src}
          alt={C.logo.alt}
          width={C.logo.width}
          height={C.logo.height}
        />
      </a>

      <S.Copyright>{C.copyright(currentYear)}</S.Copyright>
      {showSocialMedia && (
        <S.SocialLinks>
          {C.socialLinks.map((socialLink) => (
            <S.SocialLink
              key={socialLink.key}
              href={socialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLink.label}
              title={socialLink.label}
            >
              <S.FooterIcon
                src={socialLink.icon.src}
                alt={socialLink.icon.alt}
                $width={socialLink.icon.width}
                width={socialLink.icon.width}
                height={socialLink.icon.height}
              />
            </S.SocialLink>
          ))}
        </S.SocialLinks>
      )}
    </S.Footer>
  );
};
