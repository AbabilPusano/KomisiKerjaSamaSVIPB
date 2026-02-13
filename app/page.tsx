"use client";

import Image from "next/image";
import { LanguageProvider } from "./vcc/components/LanguageProvider";
import { Header, Footer } from "@/app/components";
import { useLanguage } from "./vcc/components/LanguageProvider";
import { Instagram, ArrowRight, Compass, ArrowDown, Search, FileText, Send, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function HomePageContent() {
	const { t, tArray } = useLanguage();
	const [isHowItWorksVisible, setIsHowItWorksVisible] = useState(false);
	const howItWorksRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsHowItWorksVisible(true);
				}
			},
			{ threshold: 0.2 }
		);

		if (howItWorksRef.current) {
			observer.observe(howItWorksRef.current);
		}

		return () => {
			if (howItWorksRef.current) {
				observer.unobserve(howItWorksRef.current);
			}
		};
	}, []);

	return (
		<>
			{/* Hero Section */}
			<section
				className="relative h-screen px-4 bg-cover bg-center flex items-center"
				style={{ backgroundImage: "url('/images/sv-buildings/102.webp')" }}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/60"></div>

				{/* Content */}
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center max-w-3xl mx-auto text-white">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							{t("heroTitle")}
						</h1>

						<p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
							{t("heroDescription")}
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<a
								href="#programs"
								className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg text-lg transition-all shadow-lg hover:-translate-y-0.5"
							>
								{t("explorePrograms")}
							</a>

							<a
								href="/about"
								className="bg-white/90 hover:bg-white text-blue-600 border-2 border-white font-medium py-4 px-8 rounded-lg text-lg transition-colors"
							>
								{t("learnMore")}
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Features/Programs Section */}
			<section id="programs" className="py-16 md:py-24 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("programsTitle")}
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							{t("programsSubtitle")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Program Magang Internasional */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">💼</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("internship")}
							</h3>
							<p className="text-gray-600">{t("internshipDesc")}</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("internshipPoints")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("internshipPoints")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("internshipPoints")[2]}
									</span>
								</li>
							</ul>
						</div>

						{/* Program Pertukaran Mahasiswa */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">🎓</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("exchange")}
							</h3>
							<p className="text-gray-600">{t("exchangeDesc")}</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("exchangePoints")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("exchangePoints")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("exchangePoints")[2]}
									</span>
								</li>
							</ul>
						</div>

						{/* Program Joint Degree */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">📚</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("jointDegree")}
							</h3>
							<p className="text-gray-600">{t("jointDegreeDesc")}</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("jointDegreePoints")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("jointDegreePoints")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("jointDegreePoints")[2]}
									</span>
								</li>
							</ul>
						</div>

						{/* Kelas Bahasa Asing */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">🌐</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("languageClass")}
							</h3>
							<p className="text-gray-600">{t("languageClassDesc")}</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("languageClassPoints")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("languageClassPoints")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("languageClassPoints")[2]}
									</span>
								</li>
							</ul>
						</div>

						{/* Kolaborasi Perlombaan */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">🏆</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("competitions")}
							</h3>
							<p className="text-gray-600">{t("competitionsDesc")}</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("competitionsPoints")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("competitionsPoints")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("competitionsPoints")[2]}
									</span>
								</li>
							</ul>
						</div>

						{/* Mitra Internasional */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">🌍</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("partners")}
							</h3>
							<p className="text-gray-600">{t("partnersDesc")}</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("partnersPoints")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("partnersPoints")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{tArray("partnersPoints")[2]}
									</span>
								</li>
							</ul>
						</div>
					</div>

					{/* CTA for More Details */}
					{/* PROMOSI & SOCIAL MEDIA SECTION */}
					<div className="mt-20">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Card 1: Explore Programs (Existing CTA Refined) */}
							<div className="relative overflow-hidden rounded-3xl bg-blue-600 text-white p-8 md:p-10 shadow-xl flex flex-col justify-between group">
								{/* Background Pattern */}
								<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500 opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
								<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-blue-400 opacity-20 group-hover:scale-110 transition-transform duration-500"></div>

								<div className="relative z-10">
									<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
										<Compass className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-2xl md:text-3xl font-bold mb-3">
										{t("findOpportunities")}
									</h3>
									<p className="text-blue-100 text-lg mb-8 max-w-md">
										{t("findOpportunitiesDesc")}
									</p>
								</div>

								<a
									href="/programs"
									className="relative z-10 inline-flex items-center gap-2 bg-white text-blue-700 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors w-fit shadow-md"
								>
									{t("viewAllPrograms")}
									<ArrowRight className="w-5 h-5" />
								</a>
							</div>

							{/* Card 2: Instagram Promotion (New) */}
							<a
								href="https://www.instagram.com/collaboration.svipb/"
								target="_blank"
								rel="noopener noreferrer"
								className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-8 md:p-10 shadow-xl flex flex-col justify-between group transition-all hover:shadow-2xl hover:-translate-y-1 block"
							>
								{/* Background Pattern */}
								<div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
								<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full group-hover:bg-white/30 transition-all"></div>

								<div className="relative z-10">
									<div className="flex justify-between items-start mb-6">
										<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
											<Instagram className="w-8 h-8 text-white" />
										</div>
										<span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-white/10">
											Follow Us
										</span>
									</div>

									<h3 className="text-2xl md:text-3xl font-bold mb-2">
										Update Terbaru di Instagram
									</h3>
									<p className="text-white/90 text-lg mb-8">
										Ikuti <span className="font-bold text-white">@collaboration.svipb</span> untuk informasi kerja sama, kegiatan, dan berita terkini.
									</p>
								</div>

								<div className="relative z-10 flex items-center gap-3 font-bold text-white group-hover:gap-5 transition-all">
									Lihat Profil Instagram
									<ArrowRight className="w-5 h-5" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section id="how-it-works" className="py-16 md:py-24 px-4 bg-blue-50 overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("howItWorksTitle")}
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							{t("howItWorksSubtitle")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" ref={howItWorksRef}>
						{[
							{ icon: <Search className="w-8 h-8" />, titleKey: "step1", descKey: "step1Desc" },
							{ icon: <FileText className="w-8 h-8" />, titleKey: "step2", descKey: "step2Desc" },
							{ icon: <Send className="w-8 h-8" />, titleKey: "step3", descKey: "step3Desc" },
							{ icon: <CheckCircle className="w-8 h-8" />, titleKey: "step4", descKey: "step4Desc" },
						].map((step, index, array) => (
							<div
								key={index}
								className={`relative flex flex-col items-center text-center transition-all duration-1000 transform ${isHowItWorksVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-20"
									}`}
								style={{ transitionDelay: `${index * 200}ms` }}
							>
								{/* Connector Lines/Arrows */}
								{index < array.length - 1 && (
									<>
										{/* Desktop Arrow (Absolute to the right) */}
										<div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-blue-200 -z-0"></div>
										<div className="hidden md:block absolute top-[2.15rem] -right-[18%] z-10 text-blue-300">
											<ArrowRight className="w-6 h-6" />
										</div>

										{/* Mobile Arrow (Below) */}
										<div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-blue-300 z-10">
											<ArrowDown className="w-8 h-8 animate-bounce" />
										</div>
									</>
								)}

								<div className="group relative">
									{/* Circle with Icon */}
									<div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 relative">
										{step.icon}
									</div>

									{/* Number Badge */}
									<div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-sm border-2 border-blue-100 shadow-sm group-hover:scale-110 transition-transform z-10">
										{index + 1}
									</div>
								</div>

								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{t(step.titleKey)}
								</h3>
								<p className="text-gray-600 leading-relaxed px-4">
									{t(step.descKey)}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 md:py-24 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("testimonialsTitle")}
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							{t("testimonialsSubtitle")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
							<div className="flex items-start mb-6 gap-4">
								<div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md flex-shrink-0 border-2 border-white">
									<Image
										src={t("testimonial1Image")}
										alt={t("testimonial1Name")}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">
										{t("testimonial1Name")}
									</h3>
									<p className="text-sm text-gray-600 leading-snug">{t("testimonial1Role")}</p>
								</div>
							</div>
							<p className="text-gray-600 italic">{t("testimonial1Text")}</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
							<div className="flex items-start mb-6 gap-4">
								<div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md flex-shrink-0 border-2 border-white">
									<Image
										src={t("testimonial2Image")}
										alt={t("testimonial2Name")}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">
										{t("testimonial2Name")}
									</h3>
									<p className="text-sm text-gray-600 leading-snug">{t("testimonial2Role")}</p>
								</div>
							</div>
							<p className="text-gray-600 italic">{t("testimonial2Text")}</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
							<div className="flex items-start mb-6 gap-4">
								<div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md flex-shrink-0 border-2 border-white">
									<Image
										src={t("testimonial3Image")}
										alt={t("testimonial3Name")}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">
										{t("testimonial3Name")}
									</h3>
									<p className="text-sm text-gray-600 leading-snug">{t("testimonial3Role")}</p>
								</div>
							</div>
							<p className="text-gray-600 italic">{t("testimonial3Text")}</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default function Home() {
	return (
		<LanguageProvider>
			<div className="min-h-screen bg-white">
				<Header />
				<HomePageContent />
			</div>
		</LanguageProvider>
	);
}

