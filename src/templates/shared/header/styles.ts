import AnimatedContent from "@/components/animated-content";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { ColorFamily, theme } from "@/styles/theme";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  padding-inline: var(--default-padding);
  margin-top: 18.8rem;

  ${mediaMaxDesktop1024`
    gap: 3.2rem;
  `}

  ${mediaMaxMobile`
    margin-top: 16rem;
    gap: 2.4rem;
  `}
`;

export const Header = styled(AnimatedContent)`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  ${mediaMaxMobile`
    flex-direction: column;
    gap: 1.6rem;
  `}
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.2em;
  font-weight: 700;
  color: ${theme.white};

  ${mediaMaxDesktop1024`
    font-size: 3.8rem;
  `}

  ${mediaMaxMobile`
    font-size: 4rem;
  `}
`;

export const Subtitle = styled.h2`
  font-size: 3.2rem;
  line-height: 1.2em;
  font-weight: 400;
  color: ${theme.white};

  ${mediaMaxDesktop1024`
    font-size: 2.2rem;
  `}

  ${mediaMaxMobile`
    font-size: 2.4rem;
  `}
`;

export const TagsList = styled(AnimatedContent)`
  display: flex;
  justify-content: space-between;
  gap: 4.8rem;

  > div {
    flex: 1;
  }

  ${mediaMaxDesktop1024`
    gap: 3.2rem;
  `}

  ${mediaMaxMobile`
    gap: 2.4rem;
    flex-direction: column;
  `}
`;

export const Tag = styled.div<{ $accentColor?: ColorFamily }>`
  border-radius: 0.8rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.4em;
  font-weight: 700;
  color: ${theme.white};
  background-color: ${({ $accentColor }) =>
    $accentColor ? theme[$accentColor] : theme.jagger};

  ${mediaMaxDesktop1024`
    min-width: 12rem;
    font-size: 1.5rem;
    padding: 1rem 1.6rem;
  `}

  ${mediaMaxMobile`
    min-width: auto;
    font-size: 1.6rem;
    padding: 1rem 1.4rem;
  `}
`;
