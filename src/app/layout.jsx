import "@/style/globals.css";
import { modam } from "@/constants/font";
import Providers from "@/shared/componetns/providers";
import FixedBottomBar from "@/shared/componetns/ui/fixed-bottom-bar";
import AppNavigation from "@/shared/componetns/layout/app-navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" className={`${modam.variable} antialiased`}>
        <main className="md:max-w-2xl mx-auto">
          <Providers>{children}</Providers>
        </main>
        <footer>
          <FixedBottomBar>
            <AppNavigation />
          </FixedBottomBar>
        </footer>
      </body>
    </html>
  );
}
