import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" enableColorScheme defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
