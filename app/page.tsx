"use client";

import Image from "next/image";
import { LanguageProvider } from "./components/LanguageProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLanguage } from "./components/LanguageProvider";

function HomePageContent() {
	const { t, tArray } = useLanguage();

	return (
		<>
			{/* Hero Section */}
			<section
				className="relative h-screen px-4 bg-cover bg-center flex items-center"
				style={{ backgroundImage: "url('/kampus-ipb.jpeg')" }}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/60"></div>

				{/* Content */}
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center max-w-3xl mx-auto text-white">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
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
					<div className="mt-16 max-w-3xl mx-auto text-center">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							{t("findOpportunities")}
						</h3>
						<p className="text-gray-600 mb-6">{t("findOpportunitiesDesc")}</p>
						<a
							href="/programs"
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
						>
							{t("viewAllPrograms")}
						</a>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section id="how-it-works" className="py-16 md:py-24 px-4 bg-blue-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("howItWorksTitle")}
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							{t("howItWorksSubtitle")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Step 1 */}
						<div className="text-center">
							<div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								1
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("step1")}
							</h3>
							<p className="text-gray-600">{t("step1Desc")}</p>
						</div>

						{/* Step 2 */}
						<div className="text-center">
							<div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								2
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("step2")}
							</h3>
							<p className="text-gray-600">{t("step2Desc")}</p>
						</div>

						{/* Step 3 */}
						<div className="text-center">
							<div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								3
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("step3")}
							</h3>
							<p className="text-gray-600">{t("step3Desc")}</p>
						</div>

						{/* Step 4 */}
						<div className="text-center">
							<div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								4
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("step4")}
							</h3>
							<p className="text-gray-600">{t("step4Desc")}</p>
						</div>
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
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
							<div className="flex items-center mb-6">
								<div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
								<div className="ml-4">
									<h3 className="font-bold text-lg text-gray-900">
										{t("testimonial1Name")}
									</h3>
									<p className="text-gray-700">{t("testimonial1Role")}</p>
								</div>
							</div>
							<p className="text-gray-600 italic">{t("testimonial1Text")}</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
							<div className="flex items-center mb-6">
								<div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
								<div className="ml-4">
									<h3 className="font-bold text-lg text-gray-900">
										{t("testimonial2Name")}
									</h3>
									<p className="text-gray-700">{t("testimonial2Role")}</p>
								</div>
							</div>
							<p className="text-gray-600 italic">{t("testimonial2Text")}</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
							<div className="flex items-center mb-6">
								<div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
								<div className="ml-4">
									<h3 className="font-bold text-lg text-gray-900">
										{t("testimonial3Name")}
									</h3>
									<p className="text-gray-700">{t("testimonial3Role")}</p>
								</div>
							</div>
							<p className="text-gray-600 italic">{t("testimonial3Text")}</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<div className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						{t("ctaTitle")}
					</h2>
					<p className="text-xl mb-10 text-blue-100">{t("ctaSubtitle")}</p>
					<a
						href="/contact"
						className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform inline-block"
					>
						{t("contactUs")}
					</a>
				</div>
			</div>
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
