import { Hanken_Grotesk, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Tip Top Maid Services | Professional Cleaning in Tampa",
  description: "Experience the transformative power of a deep clean. Our trusted professionals deliver premium cleaning tailored to your lifestyle, leaving you with a spotless, refreshing space.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${inter.variable} font-body antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
