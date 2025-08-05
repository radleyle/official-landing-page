import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleSystem from "../components/ParticleSystem";
import ThemeProvider from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Full-Stack Developer & UI/UX Designer passionate about creating elegant solutions that bridge the gap between design and technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ParticleSystem />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
