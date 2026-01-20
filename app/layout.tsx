import "./vcc/globals.css";
import { LanguageProvider } from "./vcc/components/LanguageProvider";

export const metadata = {
	title: "Vocational Colaboration Center SV IPB",
	icons: {
		icon: "/images/logo/vcc-logo-only.jpg",
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
