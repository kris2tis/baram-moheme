import { Toaster } from "sonner";
import "./globals.css";
import { modam } from "@/constants/font";
import ReactQueryProvider from "@/shared/componetns/providers/ReactQueryProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" className={`${modam.variable} antialiased`}>
        <main className="py-5 px-4 lg:px-0 max-w-2xl mx-auto">
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <Toaster
            position="top-center"
            style={{ font: "inherit", direction: "rtl" }}
          />
        </main>
      </body>
    </html>
  );
}
