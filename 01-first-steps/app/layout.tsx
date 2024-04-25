import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gael Zamora Home Page",
  description: "Generated with love by Vercel",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
