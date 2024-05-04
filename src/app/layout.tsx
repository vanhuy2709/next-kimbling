import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kim Bling",
  description: "This is my blog - KimBling",
};

export default function RootLayout(
  { children, }: { children: React.ReactNode; }
) {


  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
