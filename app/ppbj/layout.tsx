import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../vcc/components/LanguageProvider";
import Footer from "./components/Footer";
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
				<main className="flex-1">{children}</main>
				<Footer />
			</div>
		</LanguageProvider>
	);
}
