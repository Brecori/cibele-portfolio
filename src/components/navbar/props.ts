import type { ComponentPropsWithoutRef } from "react";

export interface NavbarProps extends ComponentPropsWithoutRef<"nav"> {
  isMenuOpen?: boolean;
}
