import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Long Island Home Decor Painting | Veloce Direct by Dino Giammalva",
  description:
    "Veloce Direct, owned by Dino Giammalva, specializes in Long Island home decor painting, interior room painting, wall painting, trim refreshes, and residential paint prep.",
  keywords: [
    "Long Island home decor",
    "Long Island painting",
    "Long Island interior painting",
    "home decor painting Long Island",
    "room painting Long Island",
    "wall painting Long Island",
    "Veloce Direct",
    "Dino Giammalva",
  ],
  authors: [{ name: "Veloce Direct" }],
  creator: "Veloce Direct",
  publisher: "Veloce Direct",
  openGraph: {
    title: "Long Island Home Decor Painting | Veloce Direct",
    description:
      "Book Dino Giammalva at Veloce Direct for Long Island interior painting, room refreshes, and home decor painting.",
    type: "website",
    locale: "en_US",
    siteName: "Veloce Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Island Home Decor Painting | Veloce Direct",
    description:
      "Veloce Direct specializes in Long Island home decor and interior painting.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
