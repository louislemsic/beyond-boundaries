import type React from "react"
import type { Metadata } from "next"
import { neueMontrealBold, neueMontrealLight } from "@/fonts/Neue Motreal"
import "./globals.css"

export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: "Beyond Boundaries",
  generator: "Next.js",
	keywords: ['hiv', 'help', 'aids', 'care', 'beyond', 'boundaries'],
	openGraph: {
		images: {
			url: 'https://i.imgur.com/3UbMCzl.png',
			type: 'image/png',
			width: 1200,
			height: 630,
		},
		type: 'website',
		siteName: 'Beyond Boundaries',
		url: 'https://beyondboundaries.vercel.app',
	},
	twitter: {
		card: 'summary_large_image',
		images: {
			url: 'https://i.imgur.com/3UbMCzl.png',
			type: 'image/png',
			width: 1200,
			height: 630,
		},
	},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${neueMontrealBold.variable} ${neueMontrealLight.variable}`}>{children}</body>
    </html>
  )
}