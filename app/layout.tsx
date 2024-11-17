import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Halenoir = localFont({
  src: [
    {
      path: "./fonts/Halenoir-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Halenoir-Medium.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Halenoir-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-halenoir",
});

const Begum = localFont({
  src: [
    { path: "./fonts/Begum-Regular.woff2", weight: "400" },
    { path: "./fonts/Begum-Bold.woff2", weight: "700" },
  ],
  variable: "--font-begum",
});

export const metadata: Metadata = {
  title: "Ideal Image",
  description: "Best in the USA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Halenoir.variable} ${Begum.variable} overflow-x-hidden w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
