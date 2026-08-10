import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  margin-top: 8.8rem;
  flex-direction: column;
  justify-content: flex-end;
  height: 84rem;
  position: relative;
  z-index: 0;
  padding-inline: var(--default-padding);

  ${mediaMaxDesktop1024`
    height: 60rem;
  `}

  ${mediaMaxMobile`
    margin-top: 10rem;
    height: calc(85vh - 10rem);
  `}
`;

export const HeroImage = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  clip-path: inset(0 0 100% 0);
  will-change: clip-path;
  z-index: -1;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${mediaMaxMobile`
    img {
      object-position: 65%;
    }
  `}
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  line-height: 1.2em;
  color: ${theme.black};
  margin-bottom: 1.6rem;
  opacity: 0;
  visibility: hidden;

  ${mediaMaxDesktop1024`
    font-size: 3.6rem;
    margin-bottom: 0.8rem;
  `}

  ${mediaMaxMobile`
    font-size: 5.2rem;
    color: ${theme.white};
  `}
`;

export const HeroSubtitle = styled.h2`
  font-weight: 400;
  font-size: 4.2rem;
  line-height: 1.2em;
  color: ${theme.black};
  margin-bottom: 8.9rem;
  opacity: 0;
  visibility: hidden;

  ${mediaMaxDesktop1024`
    font-size: 2.4rem;
    margin-bottom: 4rem;
  `}

  ${mediaMaxMobile`
    font-size: 2.8rem;
    color: ${theme.white};
  `}
`;
