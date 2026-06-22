import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyoSync Clinic | Physiotherapy & Rehabilitation Specialists",
  description: "Expert physiotherapy and rehabilitation services for pain relief, sports injuries, posture correction and recovery. Book your consultation today.",
  openGraph: {
    title: "MyoSync Clinic | Physiotherapy & Rehabilitation Specialists",
    description: "Expert physiotherapy and rehabilitation services for pain relief, sports injuries, posture correction and recovery. Book your consultation today.",
    url: "https://myosyncclinic.com",
    siteName: "MyoSync Clinic",
    images: [
      {
        url: "https://spinebodyhealth.co.uk/wp-content/uploads/2025/11/upscalemedia-transformed-1-scaled-1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/Screenshot 2026-06-15 022427.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-brand-light text-brand-text min-h-screen flex flex-col`}>
        <TopUtilityBar />
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
