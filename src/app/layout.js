import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  keywords: ["desarrollo_Web", "fullstack", "freelancer"],
  title: "Silvina-Dev Portfolio",
  description: "Desarrollo Web, Automation Testing, QA Tester",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
