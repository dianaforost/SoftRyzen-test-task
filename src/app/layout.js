import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL =
  "https://softryzen-text-task-kyspq6ekx-dianaforost.vercel.app/";
const TITLE = "CarpTravel";
const DESCRIPTION = "CarpTravel Web-site";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: TITLE,
    locale: "en",
    type: "website",
  },
  metadataBase: new URL(BASE_URL),
  manifest: "/meta/manifest.webmanifest",
  robots: "all",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
