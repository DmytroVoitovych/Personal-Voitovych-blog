import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { NavComponent } from "@/components/navComponent/NavComponent";
import { Footer } from "@/components/Footer";
import Providers from "@/components/progressComponent/ProgressProvider";

const dmSans = localFont({
  src: [
    {
      path: "../assets/fonts/DM_Sans/static/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/DM_Sans/static/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/DM_Sans/static/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/DM_Sans/static/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/DM_Sans/static/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/DM_Sans/static/DMSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-dmSans",
});

const firaCode = localFont({
  src: "../assets/fonts/Fira_Code/static/FiraCode-Regular.ttf",
  variable: "--font-firaCode",
});

export const metadata: Metadata = {
  title: "Dmytro Voitovych personal blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}${firaCode.variable}`}
       
      >
        <Providers>
          <div className="wrapper">
            <Header />
            <div className="innerWrapper">
              <NavComponent mobile={true} />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
