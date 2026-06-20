import { ResponsiveImage } from "@/components/responsive-image";
import { mediaMaxDesktop1024 } from "@/lib/media-query";
import styled from "styled-components";

export const VisualExperiencesSection = styled.section`
  display: flex;
  padding-inline: var(--default-padding);
  margin-top: 10rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15rem;

  ${mediaMaxDesktop1024`
    flex-direction: column-reverse;
    gap: 6rem;

    > div {
      width: 100%;}
  `}
`;

export const VisualImage = styled(ResponsiveImage)`
  width: 66rem;
  border-radius: 0.8rem;

  ${mediaMaxDesktop1024`
    width: 100%;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${mediaMaxDesktop1024`
    align-items: center;
    text-align: center;

    br {
      display: none;
    }
  `}
`;
