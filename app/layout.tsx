import React from "react"
import Providers from "./libs/utils/Provider"
import "./globals.css"

export const metadata = {
  title: "Anifa - Anime Favorite",
  description: "Platform infomation about you favorite anime",
  keywords: ["Anime Favorite", "Anime Airing", "Anime Session"],
  authors: [
    {
      name: "Mahdani",
      url: "https://instagram.com/danimahdani_"
    }
  ],
  creator: "danimahdani"
  // openGraph: {
  //   type: 'website',
  //   locale: 'id_ID',
  //   url: 'https://bikinsoal.com/',
  //   title: 'BikinSoal - Generate Soal Online',
  //   description: 'BikinSoal adalah platform untuk membuat soal secara online. Dengan fitur yang lengkap, membuat soal menjadi lebih mudah dan menyenangkan.',
  // },
  // twitter: {
  //   creator: "@fahreziadhaa",
  // }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-zinc-900'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
