import "@/style/globals.css";
import { modam } from "@/constants/font";
import Providers from "@/shared/componetns/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body dir="rtl" className={`${modam.variable} antialiased`}>
        <main className="md:max-w-2xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
