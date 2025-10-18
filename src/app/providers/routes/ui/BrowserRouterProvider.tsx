import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface BrowserRouterProviderProps {
  children: ReactNode;
}

export function BrowserRouterProvider({
  children,
}: BrowserRouterProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
