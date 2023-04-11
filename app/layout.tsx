import {Nunito} from "next/font/google";
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

export const metadata = {
  title: 'Roomify',
  description: 'Whether you’re traveling for business or pleasure, Roomify has you covered. Find and book cozy and comfortable rooms for your stay with just a few clicks. Roomy is the ultimate app for finding your home away from home.',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="Submit" title="Hello World" isOpen/>
          <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
