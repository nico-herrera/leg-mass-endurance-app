import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dual Training Program: Strength & Endurance",
  description:
    "6-day alternating workout program combining strength training and running. Plan A focuses on hypertrophy with running, Plan B emphasizes endurance with strength maintenance. Features leg, push, and pull days with integrated running schedules.",
  openGraph: {
    title: "Dual Training Program: Strength & Endurance",
    description:
      "6-day alternating workout program combining strength training and running. Plan A focuses on hypertrophy with running, Plan B emphasizes endurance with strength maintenance.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dual Training Program: Strength & Endurance",
    description:
      "6-day alternating workout program combining strength training and running. Plan A focuses on hypertrophy with running, Plan B emphasizes endurance with strength maintenance.",
  },
  keywords: [
    "workout program",
    "strength training",
    "endurance running",
    "hypertrophy",
    "running schedule",
    "leg workouts",
    "push pull legs",
    "PPL split",
    "dual training",
    "alternating workouts",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
