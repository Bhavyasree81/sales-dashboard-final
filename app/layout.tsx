import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Sales Dashboard",
  description: "Sales dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-50 to-gray-200">
        {children}
      </body>
    </html>
  );
}