import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ContentParagraph = styled.p`
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;
  color: ${theme.white};

  ${mediaMaxDesktop1024`
    font-size: 1.6rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.8rem;
  `}
`;
