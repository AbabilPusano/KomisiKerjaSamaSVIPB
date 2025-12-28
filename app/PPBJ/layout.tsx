import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "./../components/LanguageProvider";
import Footer from "../PPBJ/components/Footer";
import Navbar from "../PPBJ/components/Navbar";
import { metadata } from "./metadata";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<body>
				<LanguageProvider>
					<div className="min-h-screen bg-white flex flex-col">
						<Navbar />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</LanguageProvider>
			</body>
		</html>
	);
}
