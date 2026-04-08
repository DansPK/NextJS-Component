import { Poppins, Oswald, Space_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-brutal",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-cyber",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Component Library",
  description: "Minimalist component library with Multiple Themes",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${oswald.variable} ${spaceMono.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
