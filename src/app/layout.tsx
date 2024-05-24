import "../app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "mojtaba borzu",
  description: "Front end programmer",
  robots: "index",
  openGraph: {
    description: "Front end programmer",
    images: ["https://mojtababorzu.ir/mojtababorzu.jpeg"],
    url: "https://mojtababorzu.ir",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
