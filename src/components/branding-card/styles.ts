import { theme } from "@/styles/theme";
import { css } from "styled-components";
import styled from "styled-components";

const brandingCardStyles = css`
  width: 19.2rem;
  height: 10.08rem;
  border-radius: 0.8rem;
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const BrandingCard = styled.div`
  ${brandingCardStyles}
`;

export const BrandingCardLink = styled.a`
  ${brandingCardStyles}
  text-decoration: none;
`;
