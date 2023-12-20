import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import SideBar from "@/components/SideBar";
import Panel from "@/components/Panel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-cols-[6%_74%_20%] overflow-hidden box-border`}
      >
        <SideBar />
        <main className="bg-[#F6F5FB] h-screen py-5 px-16 overflow-y-scroll">
          {children}
        </main>
        <Panel />
      </body>
    </html>
  );
}
