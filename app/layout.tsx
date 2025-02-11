import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Wu",
  description:
    "Full-stack developer and CS / AI master's student at Delft University of Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
