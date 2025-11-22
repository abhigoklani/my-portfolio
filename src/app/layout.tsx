import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Goklani - Software Developer Portfolio",
  description: "Professional portfolio of Abhishek Goklani, a Software Developer with 3 years of experience in enterprise application development, microservices architecture, and cloud-native practices.",
  keywords: ["software developer", "portfolio", "next.js", "react", "typescript", "abhishek", "goklani"],
  authors: [{ name: "Abhishek Goklani" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekgoklani.com",
    siteName: "Abhishek Goklani Portfolio",
    title: "Abhishek Goklani - Software Developer",
    description: "Professional portfolio showcasing my experience in software development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
