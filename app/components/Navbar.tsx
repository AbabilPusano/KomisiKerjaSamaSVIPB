import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
	const { t, language, setLanguage } = useLanguage();

	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo and Brand */}
					<div className="flex items-center">
						<Link href="/" className="flex items-center space-x-3">
							<Image
								src="/IPB.png"
								alt="Logo IPB University"
								width={40}
								height={40}
								className="object-contain"
							/>
							<span className="text-xl font-bold text-gray-900">
								Vocational Collaboration Center
							</span>
						</Link>
					</div>

					{/* Navigation Links */}
					<div className="hidden md:flex space-x-8">
						<Link
							href="/"
							className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
						>
							{t("home")}
						</Link>
						<Link
							href="/about"
							className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
						>
							{t("about")}
						</Link>
						<Link
							href="/Programs"
							className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
						>
							{t("programs")}
						</Link>
						<Link
							href="/contact"
							className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
						>
							{t("contact")}
						</Link>
					</div>

					{/* Language Toggle */}
					{/* Language Toggle */}
					<div className="flex items-center space-x-3">
						<button
							onClick={() => setLanguage("id")}
							className={`p-1 rounded ${
								language === "id"
									? "ring-2 ring-blue-500"
									: "opacity-60 hover:opacity-100"
							}`}
							aria-label="Bahasa Indonesia"
						>
							<Image
								src="/ID.png"
								alt="Bahasa Indonesia"
								width={24}
								height={24}
								className="object-contain"
							/>
						</button>

						<button
							onClick={() => setLanguage("en")}
							className={`p-1 rounded ${
								language === "en"
									? "ring-2 ring-blue-500"
									: "opacity-60 hover:opacity-100"
							}`}
							aria-label="English"
						>
							<Image
								src="/ENG.png"
								alt="English"
								width={24}
								height={24}
								className="object-contain"
							/>
						</button>

						{/* Mobile menu button */}
						<div className="md:hidden flex items-center">
							<button
								type="button"
								className="text-gray-700 hover:text-blue-500 focus:outline-none"
								aria-label="Toggle menu"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
