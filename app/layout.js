import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// تحميل الخطوط في النطاق العام (module scope)
const outfitFont = Outfit({ 
 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"] 
});

const ovoFont = Ovo({ 

  subsets: ["latin"], 
  weight: ["400"] 
});

export const metadata = {
  title: "Omar Alalfy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth   ">
      <body className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden-hidden dark:bg-darkTheme dark:text-white  `}>
        {children}
      </body>
    </html>
  );
}

