import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata = {
	title: "PPBJ - Japanese Language Training Programs",
	description:
		"Empowering Japanese language learning through innovative programs and expert instruction",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="antialiased">
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	);
}
