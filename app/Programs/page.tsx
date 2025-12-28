import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useLanguage } from "@/app/components/LanguageProvider";
import { LanguageProvider } from "@/app/components/LanguageProvider";

function HomePageContent() {
	const { t, tArray } = useLanguage();

	return (
		<>
			{/* Hero Section */}

			<Footer />
		</>
	);
}

export default function Home() {
	return (
		<LanguageProvider>
			<div className="min-h-screen bg-white">
				<Navbar />
				<HomePageContent />
			</div>
		</LanguageProvider>
	);
}
