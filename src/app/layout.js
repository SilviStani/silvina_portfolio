import { Roboto, Space_Grotesk, Inter } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  keywords: ["desarrollo_Web", "desarrollo Web", "fullstack", "freelancer"],
  title: "Silvina-Dev Portfolio",
  description: "Desarrollo Web, Automation Testing, QA Tester",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${roboto.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}  