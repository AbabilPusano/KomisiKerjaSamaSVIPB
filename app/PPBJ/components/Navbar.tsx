"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../components/LanguageProvider";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { language, setLanguage } = useLanguage();

	return (
		<nav className="bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<Link href="/" className="flex items-center">
					<h1 className="text-2xl font-bold text-blue-500">PPBJ Aceh</h1>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-8">
					<Link
						href="/PPBJ/program"
						className="text-gray-600 hover:text-blue-500 transition-colors"
					>
						Program
					</Link>
					<Link
						href="/PPBJ/#how-it-works"
						className="text-gray-600 hover:text-blue-500 transition-colors"
					>
						Alur ke Jepang
					</Link>
					<Link
						href="/PPBJ/tentang-kami"
						className="text-gray-600 hover:text-blue-500 transition-colors"
					>
						Tentang Kami
					</Link>
					<Link
						href="https://www.jotform.com/app/252954455231458"
						target="_blank"
						className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
					>
						Daftar Sekarang
					</Link>

					{/* Language Toggle with Flags */}
					<div className="flex items-center space-x-2">
						<button
							onClick={() => setLanguage("id")}
							className={`flex items-center justify-center w-10 h-6 rounded-full transition-colors ${
								language === "id" ? "bg-blue-500" : "bg-gray-300"
							}`}
							aria-label="Switch to Indonesian"
						>
							<span className="text-xs font-bold text-white">ID</span>
						</button>
						<button
							onClick={() => setLanguage("en")}
							className={`flex items-center justify-center w-10 h-6 rounded-full transition-colors ${
								language === "en" ? "bg-blue-500" : "bg-gray-300"
							}`}
							aria-label="Switch to English"
						>
							<span className="text-xs font-bold text-white">EN</span>
						</button>

						{/* Flag emoji showing current language */}
						<div className="ml-2 text-xl">
							{language === "id" ? "🇮🇩" : "🇬🇧"}
						</div>
					</div>
				</div>

				{/* Mobile menu button */}
				<div className="md:hidden flex items-center space-x-3">
					{/* Language Toggle for Mobile - showing current language flag */}
					<div className="flex items-center">
						<div className="text-xl">{language === "id" ? "🇮🇩" : "🇬🇧"}</div>
					</div>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-gray-600 hover:text-blue-500 focus:outline-none"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden mt-4 pb-4">
					<div className="flex flex-col space-y-3 px-4">
						<Link
							href="/PPBJ/program"
							className="text-gray-600 hover:text-blue-500 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Program
						</Link>
						<Link
							href="/PPBJ/#how-it-works"
							className="text-gray-600 hover:text-blue-500 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Alur ke Jepang
						</Link>
						<Link
							href="/PPBJ/tentang-kami"
							className="text-gray-600 hover:text-blue-500 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Tentang Kami
						</Link>
						<Link
							href="https://www.jotform.com/app/252954455231458"
							target="_blank"
							className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-full text-center"
							onClick={() => setIsMenuOpen(false)}
						>
							Daftar Sekarang
						</Link>

						{/* Mobile Language Toggle */}
						<div className="flex items-center space-x-4 pt-2">
							<button
								onClick={() => setLanguage("id")}
								className={`flex items-center justify-center w-10 h-6 rounded-full transition-colors ${
									language === "id" ? "bg-blue-500" : "bg-gray-300"
								}`}
							>
								<span className="text-xs font-bold text-white">ID</span>
							</button>
							<button
								onClick={() => setLanguage("en")}
								className={`flex items-center justify-center w-10 h-6 rounded-full transition-colors ${
									language === "en" ? "bg-blue-500" : "bg-gray-300"
								}`}
							>
								<span className="text-xs font-bold text-white">EN</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
