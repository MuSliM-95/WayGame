import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAY Games — Играй и помогай",
  description:
    "WAY Games — каталог браузерных HTML5-игр. Играя, ты поддерживаешь добрые инициативы и развитие проектов.",
  applicationName: "WAY Games",
  authors: [{ name: "WAY Games" }],
  keywords: [
    "онлайн игры",
    "html5 игры",
    "браузерные игры",
    "игры бесплатно",
    "WAY Games",
  ],
  openGraph: {
    type: "website",
    siteName: "WAY Games",
    title: "WAY Games — Играй и помогай",
    description:
      "Каталог браузерных игр. Играй бесплатно и поддерживай проекты.",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "WAY Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAY Games — Играй и помогай",
    description:
      "Каталог браузерных игр. Играй бесплатно и поддерживай проекты.",
    images: ["/images/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
