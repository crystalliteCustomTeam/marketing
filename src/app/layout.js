// Css
import "./globals.css"
// Fonts
import { fontManrope, fontMono, fontSans } from "./fonts"
// Components
import { Footer, Header } from "@/components"
import Popup from "@/components/website/popup/popup"
// Meta Data
export const metadata = {
  title: "Book Marketing",
  description: "Generated by Book Marketing",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontManrope.variable} antialiased font-sans font-normal text-black`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Popup />
      </body>
    </html>
  );
}
