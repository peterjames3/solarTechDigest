import type { Metadata } from "next";
import {inter} from '@/app/ui/font';
import "./globals.css";



export const metadata: Metadata = {
  title: " %s | SolarTechDigest",
  description: "Your Go-To for Solar Insights, News &  Expert Tips",
  icons:{
    icon:[
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    ],
    shortcut:'/favicon.ico',
  },
  manifest:'/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
