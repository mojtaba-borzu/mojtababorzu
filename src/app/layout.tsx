import "../app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "mojtaba borzu",
  description: "Front end programmer",
  robots: "index",
  openGraph: {
    description: "Front end programmer",
    images: [
      "https://personalimages.s3.ir-thr-at1.arvanstorage.ir/1697698731558.jpeg?versionId=",
    ],
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
