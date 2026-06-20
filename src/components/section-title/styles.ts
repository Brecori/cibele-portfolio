import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 1.2em;
  color: ${theme.white};

  ${mediaMaxDesktop1024`
    font-size: 2.4rem;
  `}

  ${mediaMaxMobile`
    font-size: 3.2rem;
  `}
`;
