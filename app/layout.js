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
  title: "Nguyen Le - Portfolio",
  description: "Computer Science student at Bucknell University passionate about AI research and full-stack development. Published researcher with hands-on experience in machine learning, web development, and collaborative software engineering.",
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
