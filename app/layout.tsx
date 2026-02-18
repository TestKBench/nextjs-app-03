import '../styles/globals.css'

export const metadata = {
  title: 'NextJS App 03',
  description: 'Sample NextJS 15 application with App Router',
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
