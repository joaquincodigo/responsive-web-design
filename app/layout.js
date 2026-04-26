// 👉 Step 1: Pick your FONT FROM GOOGLE https://fonts.google.com
// Replace the import name using underscores for spaces (e.g. "Playfair_Display", "Roboto_Mono")
import { Roboto } from "next/font/google";
import "./globals.css";

// 👉 Step 2: Configure your FONT
// - variable: the CSS custom property name you'll reference in Tailwind/CSS
// - subsets: keep "latin" unless your project needs other character sets
// - weights (thickness) as needed (400 = regular, 700 = bold)
// - Add italic if the font supports it
// - Usage:
//    <p>Regular</p>
//    <p className="font-bold">Bold</p>
//    <p className="italic">Italic</p>
const font = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});


// 👉 Step 3: Update title and description for each project
// - icons: favicons for multiple devices. favicon.ico goes in /app. The rest in /public.
export const metadata = {
  title: "Untitled App",
  description: "App description goes here",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    // 👉 Step 4: The font variable is injected here at the root — no need to touch this
    <html
      lang="en"
      className={`${font.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}