"use client";
import ToasProvider from "./toast-provider";
import NextThemeProvider from "./next-theme-provider";

export default function Providers({ children }) {
  return (
    <NextThemeProvider>
      {children}
      <ToasProvider />
    </NextThemeProvider>
  );
}
