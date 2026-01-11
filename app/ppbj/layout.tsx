import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../vcc/components/LanguageProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { metadata } from "./metadata";

export { metadata };

export default function PPBJLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<LanguageProvider>
			<div className="min-h-screen bg-white flex flex-col">
				<Navbar />
				<main className="flex-1">{children}</main>
				<Footer />
			</div>
		</LanguageProvider>
	);
}
