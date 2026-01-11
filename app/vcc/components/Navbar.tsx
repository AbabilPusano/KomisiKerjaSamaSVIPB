"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
	const { t, language, setLanguage } = useLanguage();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinks = [
		{ href: "/", label: t("home") },
		{ href: "/about", label: t("about") },
		{ href: "/programs", label: t("programs") },
		{ href: "/contacts", label: t("contact") },
	];

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo and Brand */}
					<Link href="/vcc" className="flex items-center space-x-3 group">
						<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-1.5 group-hover:shadow-lg transition-all duration-300">
							<Image
								src="/IPB.png"
								alt="Logo IPB University"
								fill
								className="object-contain p-0.5"
							/>
						</div>
						<div className="hidden lg:block">
							<span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
								Vocational Collaboration
							</span>
							<div className="text-sm font-semibold text-slate-600">
								IPB University
							</div>
						</div>
						<div className="lg:hidden">
							<span className="text-lg font-bold text-slate-900">VCC</span>
						</div>
					</Link>

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex items-center space-x-1">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="relative px-4 py-2 text-slate-700 font-semibold rounded-lg hover:text-blue-600 transition-all duration-300 group"
							>
								{link.label}
								<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-3/4 transition-all duration-300"></span>
							</Link>
						))}
					</div>

					{/* Language Toggle & Mobile Menu Button */}
					<div className="flex items-center space-x-4">
						{/* Language Toggle */}
						<div className="flex items-center bg-slate-100 rounded-xl p-2 gap-2">
							<button
								onClick={() => setLanguage("id")}
								className={`relative w-10 h-10 rounded-lg overflow-hidden transition-all duration-300 ${
									language === "id"
										? "ring-2 ring-blue-500 shadow-md scale-105"
										: "opacity-60 hover:opacity-100 hover:scale-105"
								}`}
								aria-label="Bahasa Indonesia"
							>
								<Image
									src="/ID.png"
									alt="Bahasa Indonesia"
									fill
									className="object-cover"
								/>
							</button>

							<button
								onClick={() => setLanguage("en")}
								className={`relative w-10 h-10 rounded-lg overflow-hidden transition-all duration-300 ${
									language === "en"
										? "ring-2 ring-blue-500 shadow-md scale-105"
										: "opacity-60 hover:opacity-100 hover:scale-105"
								}`}
								aria-label="English"
							>
								<Image
									src="/ENG.png"
									alt="English"
									fill
									className="object-cover"
								/>
							</button>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isMobileMenuOpen ? "max-h-96" : "max-h-0"
				}`}
			>
				<div className="px-4 pt-2 pb-6 space-y-2 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
					{navLinks.map((link, index) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setIsMobileMenuOpen(false)}
							className="block px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2"
							style={{
								animationDelay: `${index * 50}ms`,
							}}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
