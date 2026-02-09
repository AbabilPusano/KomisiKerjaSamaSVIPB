import type { Metadata } from "next";
import "../../vcc/globals.css";
import { LanguageProvider } from "../../vcc/components/LanguageProvider";
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
			</div>
		</LanguageProvider>
	);
}
