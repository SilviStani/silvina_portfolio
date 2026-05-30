import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-principal",
});

const siteUrl = "https://silvina-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Silvina Staniszewski · Web Developer & QA Automation Engineer",
  description:
    "Portfolio de Silvina Staniszewski — desarrollo web con Next.js, React y testing con Selenium y Playwright.",
  keywords: [
    "Web Developer",
    "QA Automation",
    "Next.js",
    "React",
    "Selenium",
    "Playwright",
    "freelancer",
    "Argentina",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Silvina Staniszewski · Web Developer & QA Automation Engineer",
    description:
      "Portfolio de Silvina Staniszewski — desarrollo web con Next.js, React y testing con Selenium y Playwright.",
    siteName: "Silvina.Dev",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Silvina.Dev Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silvina Staniszewski · Web Developer & QA Automation Engineer",
    description:
      "Portfolio de Silvina Staniszewski — desarrollo web con Next.js, React y testing con Selenium y Playwright.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.variable}>
        {children}
      </body>
    </html>
  );
}  