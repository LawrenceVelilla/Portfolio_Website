
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

// Define fonts
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Lawrence Velilla | Portfolio',
  description: 'Portfolio website of Lawrence Velilla, Full-Stack Developer, Data Science, and Machine Learning specialist',
}

{/*//                         |quick test*/}
export default function RootLayout({children,}) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Fonts for Italiana and other fonts used in the design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}