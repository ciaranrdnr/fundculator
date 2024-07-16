import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAVI Landing Page",
  description: "Investment Fundculator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        href="https://promo.miraeasset.co.id/reksadana/logo-mirae.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://promo.miraeasset.co.id/reksadana/logo-mirae.png"
        sizes="32x32"
      ></link>
      <body>{children}</body>
    </html>
  );
}
