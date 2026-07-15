import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import CursorGridGlow from "../components/CursorGridGlow";
import PortfolioChat from "../components/portfolio/PortfolioChat";

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
  description:
    "Computer Science student at Bucknell University passionate about AI research and full-stack development. Published researcher with hands-on experience in machine learning, web development, and collaborative software engineering.",
  keywords:
    "Nguyen Le, Portfolio, Computer Science, AI Research, Full Stack Developer, Bucknell University, Machine Learning, Web Development",
  authors: [{ name: "Nguyen Le" }],
  creator: "Nguyen Le",
  openGraph: {
    title: "Nguyen Le - Portfolio",
    description:
      "Computer Science student at Bucknell University passionate about AI research and full-stack development.",
    type: "website",
    locale: "en_US",
    siteName: "Nguyen Le Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Le - Portfolio",
    description:
      "Computer Science student at Bucknell University passionate about AI research and full-stack development.",
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="bg-texture">
          <CursorGridGlow />
          <div className="relative z-10">
            <ThemeProvider>{children}</ThemeProvider>
            <PortfolioChat />
          </div>
        </div>
      </body>
    </html>
  );
}
