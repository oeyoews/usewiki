import "~global.css"

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="prose prose-indigo max-w-3xl mx-auto h-screen bg-black">
        {children}
      </body>
    </html>
  )
}
