import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"


const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Cat Meme Generator",
//   description: "An application made with ruby on rails backend and next.js and redux frontend.",
// }

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}