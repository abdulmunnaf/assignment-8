import { Outfit } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "AuraTiles - Premium Tiles Gallery & Inspiration",
    template: "%s | AuraTiles"
  },
  description: "Discover the perfect aesthetic with AuraTiles. A curated collection of luxury artisanal tiles for floors, walls, bathrooms, and patios.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme='white'
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body className="h-full bg-slate-50/20 text-slate-800">
        {children}
      </body>
    </html>
  );
}
