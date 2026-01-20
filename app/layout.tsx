import "./vcc/globals.css";
import { LanguageProvider } from "./vcc/components/LanguageProvider";

export const metadata = {
	title: "PPBJ - Japanese Language Training Programs",
	description:
		"Empowering Japanese language learning through innovative programs and expert instruction",
	icons: {
		icon: "/images/logo/vcc-logo-only.svg",
	},
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
