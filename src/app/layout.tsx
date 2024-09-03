import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './_components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Practice Buddy',
	description: 'An app for developing musical skills',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const bodyClass = `w-full h-full ${inter.className}`
	return (
		<html lang="en" className="bg-celadon text-oxford-blue w-full h-full overscroll-none">
			<body className={bodyClass}>
        <Header />
				<div className="mt-4">
        	{children}
				</div>
      </body>
		</html>
	)
}
