import '@/styles/globals.css';
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  variable: "--poppins-font",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
