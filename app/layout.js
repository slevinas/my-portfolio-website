import Header from "@/app/_components/Header";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
// import { ReservationProvider } from "./_components/ReservationContext";
import { DarkModeProvider } from "./_context/DarkModeContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    default: "Zigi-s Website/ Welcome",
    template: "%s | Zigis Website",
  },
  description:
    "Luxurious cabins in the heart of nature surrounded by wilderness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-800 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <DarkModeProvider>{children}</DarkModeProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
