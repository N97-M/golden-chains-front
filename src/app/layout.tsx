import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import QuickInfo from "./components/QuickInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Chains Trading LLC",
  description: "Dubai based auto spare parts and components trading company specializing in KYB, Perfect Rubber Parts, IBN, Next Auto, Smart, and Mikatakno products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Header />
          <Breadcrumb />
          <main>
            {children}
          </main>
          <QuickInfo />
        </div>
      </body>
    </html>
  );
}
