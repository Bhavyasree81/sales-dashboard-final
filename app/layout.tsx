import { ReactNode } from "react";

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
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}