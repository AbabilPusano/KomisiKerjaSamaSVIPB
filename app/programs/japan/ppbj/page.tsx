"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Header, Footer } from "@/app/components";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { translations, type Lang } from "./translations";

export default function PPBJPage() {
	const [activeTab, setActiveTab] = useState<"intensif" | "reguler" | "jlpt">("reguler");
	const [lang, setLang] = useState<Lang>("id");
	const t = translations[lang];

	// Scroll to programs section
	const scrollToPrograms = () => {
		const programsSection = document.getElementById("programs-section");
		if (programsSection) {
			programsSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const [current, setCurrent] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const images = [
		// { src: "/images/chuo/rapat.webp", alt: "PPBJ SV IPB - Rapat" },
		{ src: "/images/ppbj/poster1.webp", alt: "PPBJ SV IPB - Poster 1" },
		{ src: "/images/ppbj/poster2.webp", alt: "PPBJ SV IPB - Poster 2" },
	];

	const goTo = useCallback(
		(index: number) => {
			if (isAnimating) return;
			setIsAnimating(true);
			setCurrent(index);
			setTimeout(() => setIsAnimating(false), 500);
		},
		[isAnimating]
	);
	const prev = () => goTo((current - 1 + images.length) % images.length);
	const next = () => goTo((current + 1) % images.length);

	// Auto-slide every 5 detik
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((c) => (c + 1) % images.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<Header />
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
				{/* Language Toggle */}
				<div className="fixed top-25 right-4 z-50">
					<button
						onClick={() => setLang(lang === "id" ? "en" : "id")}
						className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
						aria-label="Switch language"
					>
						<span className={`text-sm font-bold transition-colors ${lang === 'id' ? 'text-blue-600' : 'text-gray-400'}`}>ID</span>
						<div className="relative w-10 h-5 bg-gray-200 rounded-full">
							<div className={`absolute top-0.5 w-4 h-4 bg-blue-600 rounded-full shadow transition-transform duration-300 ${lang === 'en' ? 'translate-x-5' : 'translate-x-0.5'}`} />
						</div>
						<span className={`text-sm font-bold transition-colors ${lang === 'en' ? 'text-blue-600' : 'text-gray-400'}`}>EN</span>
					</button>
				</div>
				{/* Hero Section */}
				<section className="container mx-auto px-4 py-20 lg:py-32">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
								{t.heroTitle}
							</h1>
							<p className="text-lg text-gray-600">
								{t.heroDesc}
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<button
									onClick={scrollToPrograms}
									className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
								>
									{t.heroBtn1}
								</button>
								<button
									onClick={scrollToPrograms}
									className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all text-center"
								>
									{t.heroBtn2}
								</button>
							</div>
						</div>

						{/* Hero Image Carousel */}
						<div className="relative h-96 lg:h-[750px] rounded-2xl overflow-hidden shadow-2xl group">
							{/* Slides */}
							{images.map((img, i) => (
								<div
									key={i}
									className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"
										}`}
								>
									<img
										src={img.src}
										alt={img.alt}
										className="w-full h-full object-contain"
									/>
								</div>
							))}

							{/* Gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

							{/* Prev / Next buttons */}
							<button
								onClick={prev}
								className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
								aria-label="Previous"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							<button
								onClick={next}
								className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
								aria-label="Next"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
								</svg>
							</button>

							{/* Dots indicator */}
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
								{images.map((_, i) => (
									<button
										key={i}
										onClick={() => goTo(i)}
										className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/50"
											}`}
										aria-label={`Slide ${i + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section className="bg-white py-12 lg:py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-5xl mx-auto">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
								{t.aboutTitle}
							</h2>
							<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
								<p>{t.aboutP1}</p>
								<p>{t.aboutP2}</p>
								<p dangerouslySetInnerHTML={{ __html: t.aboutP3 }} />
								<p>{t.aboutP4}</p>
							</div>
						</div>
					</div>
				</section>

				{/* Main Programs Section */}
				<section id="programs-section" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
								{t.programsTitle}
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								{t.programsDesc}
							</p>
						</div>

						{/* Category 1: Program Pelatihan Bahasa Jepang */}
						<div className="mb-20">
							<div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12">
								<h3 className="text-3xl font-bold text-gray-900 mb-4">
									{t.programPelatihan}
								</h3>
								<p className="text-gray-600 mb-8">
									{t.programPelatihanDesc}
								</p>

								{/* Tabs */}
								<div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
									{/* <button
									onClick={() => setActiveTab("intensif")}
									className={`px-6 py-3 font-semibold transition-all ${activeTab === "intensif"
											? "text-blue-600 border-b-4 border-blue-600"
											: "text-gray-600 hover:text-blue-600"
										}`}
								>
									Program Intensif
								</button> */}
									<button
										onClick={() => setActiveTab("reguler")}
										className={`px-6 py-3 font-semibold transition-all ${activeTab === "reguler"
											? "text-blue-600 border-b-4 border-blue-600"
											: "text-gray-600 hover:text-blue-600"
											}`}
									>
										{t.tabReguler}
									</button>
									{/* <button
									onClick={() => setActiveTab("jlpt")}
									className={`px-6 py-3 font-semibold transition-all ${activeTab === "jlpt"
											? "text-blue-600 border-b-4 border-blue-600"
											: "text-gray-600 hover:text-blue-600"
										}`}
								>
									Persiapan JLPT
								</button> */}
								</div>

								{/* Tab Content: Intensif */}
								{activeTab === "intensif" && (
									<div className="space-y-8">
										{/* Intensif 1 */}
										<div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												Bahasa Jepang Intensif 1
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Berkomunikasi dalam Bahasa Jepang tingkat kemahiran CEFR A2B1, Lulus JLPT N4
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 5 bulan (400 Jam) | <strong>Kuota:</strong> 15
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> Irodori A1, A2-1, A2-2; JLPT Taisaku N5 dan N4; Marugoto A2B1
													</p>
													<p className="text-2xl font-bold text-blue-600 mt-4">
														Rp8.250.000 <span className="text-sm text-gray-600">(+Sudah include pendaftaran)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Latihan berkomunikasi dengan topik kehidupan sehari-hari secara mendalam
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Diskusi tentang etos kerja dan budaya Jepang praktis
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Latihan menyelesaikan soal-soal JLPT N5 dan N4
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Peluang mengikuti joint degree di Chuo College 100%
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Peluang mendapat beasiswa Newspaper 100%
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Huruf Hiragana & Katakana, 300 Kanji, 1500 buah Kosakata
														</li>
													</ul>
												</div>
											</div>
										</div>

										{/* Intensif 2 */}
										<div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												Bahasa Jepang Intensif 2
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Berkomunikasi dalam Bahasa Jepang tingkat kemahiran CEFR A2B1, Lulus JLPT N4
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 5 bulan (450 Jam) | <strong>Kuota:</strong> 15
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> MNN 1 dan 2; Marugoto A1, A2-1, A2-2; JLPT Taisaku N5 dan N4; Langoal
													</p>
													<p className="text-2xl font-bold text-blue-600 mt-4">
														Rp8.230.000 <span className="text-sm text-gray-600">(+Sudah include pendaftaran)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Latihan berkomunikasi dengan topik kehidupan sehari-hari secara mendalam
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Diskusi tentang etos kerja dan budaya Jepang praktis
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Latihan menyelesaikan soal-soal JLPT N5 dan N4
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Peluang mengikuti joint degree di Chuo College 100%
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Peluang mendapat beasiswa Newspaper berdasarkan kuota
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Huruf Hiragana & Katakana, 300 Kanji, 1500 buah Kosakata
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								)}

								{/* Tab Content: Reguler */}
								{activeTab === "reguler" && (
									<div className="space-y-8">
										{/* Pemula (A1) */}
										<div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												{t.pemulaTitle}
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<i>{t.pemulaNote}</i>
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.tujuan}</strong> {t.pemulaTujuan}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.durasi}</strong> {t.pemulaDurasi} | <strong>{t.kuota}</strong> {t.pemulaKuota}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.materi}</strong> {t.pemulaMateri}
													</p>
													<p className="text-2xl font-bold text-green-600 mt-4">
														{t.pemulaPrice} <span className="text-sm text-gray-600">{t.pemulaPriceNote}</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">{t.benefit}</p>
													<ul className="space-y-2 text-gray-700">
														{t.pemulaBenefits.map((b, i) => (
															<li key={i} className="flex items-start">
																<span className="text-green-600 mr-2">✓</span>
																{b}
															</li>
														))}
													</ul>
												</div>
											</div>
											<div className="mt-6 pt-4 border-t border-green-100">
												<a
													href="https://forms.gle/Ssa5G2sGYkYkKV7GA"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
												>
													{t.daftarSekarang}
												</a>
											</div>
										</div>

										{/* Dasar 1 (A2-1) */}
										<div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												{t.dasar1Title}
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>{t.tujuan}</strong> {t.dasar1Tujuan}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.durasi}</strong> {t.dasar1Durasi} | <strong>{t.kuota}</strong> {t.dasar1Kuota}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.materi}</strong> {t.dasar1Materi}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.syarat}</strong> {t.dasar1Syarat}
													</p>
													<p className="text-gray-700 mb-2">
														<i>{t.dasar1SyaratNote}</i>
													</p>
													<p className="text-2xl font-bold text-green-600 mt-4">
														{t.dasar1Price} <span className="text-sm text-gray-600">{t.dasar1PriceNote}</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">{t.benefit}</p>
													<ul className="space-y-2 text-gray-700">
														{t.dasar1Benefits.map((b, i) => (
															<li key={i} className="flex items-start">
																<span className="text-green-600 mr-2">✓</span>
																{b}
															</li>
														))}
													</ul>
												</div>

											</div>
											<div className="mt-6 pt-4 border-t border-green-100">
												<a
													href="https://forms.gle/4UPQwvmYyBAqXQuu6"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
												>
													{t.daftarSekarang}
												</a>
											</div>
										</div>

										{/* Dasar 2 (A2-2) */}
										<div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												{t.dasar2Title}
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>{t.tujuan}</strong> {t.dasar2Tujuan}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.durasi}</strong> {t.dasar2Durasi} | <strong>{t.kuota}</strong> {t.dasar2Kuota}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.materi}</strong> {t.dasar2Materi}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.syarat}</strong> {t.dasar2Syarat}
													</p>
													<p className="text-gray-700 mb-2">
														<i>{t.dasar2SyaratNote}</i>
													</p>
													<p className="text-2xl font-bold text-green-600 mt-4">
														{t.dasar2Price} <span className="text-sm text-gray-600">{t.dasar2PriceNote}</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">{t.benefit}</p>
													<ul className="space-y-2 text-gray-700">
														{t.dasar2Benefits.map((b, i) => (
															<li key={i} className="flex items-start">
																<span className="text-green-600 mr-2">✓</span>
																{b}
															</li>
														))}
													</ul>
												</div>

											</div>
											<div className="mt-6 pt-4 border-t border-green-100">
												<a
													href="https://forms.gle/ZGKU4f86uM9iNv3r8"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
												>
													{t.daftarSekarang}
												</a>
											</div>
										</div>
										<div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">{t.n4PrepTitle}</h4>

											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>{t.tujuan}</strong> {t.n4PrepTujuan}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.durasi}</strong> {t.n4PrepDurasi} | <strong>{t.kuota}</strong> {t.n4PrepKuota}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.materi}</strong> {t.n4PrepMateri}
													</p>
													<p className="text-gray-700 mb-2">
														<strong>{t.syarat}</strong> {t.n4PrepSyarat}
													</p>

													<p className="text-2xl font-bold text-green-600 mt-4">
														{t.n4PrepPrice}{" "}
														<span className="text-sm text-gray-600">
															{t.n4PrepPriceNote}
														</span>
													</p>
												</div>

												<div>
													<p className="font-semibold text-gray-900 mb-2">{t.benefit}</p>
													<ul className="space-y-2 text-gray-700">
														{t.n4PrepBenefits.map((b, i) => (
															<li key={i} className="flex items-start">
																<span className="text-green-600 mr-2">✓</span>
																{b}
															</li>
														))}
													</ul>
												</div>
											</div>
											<div className="mt-6 pt-4 border-t border-green-100">
												<a
													href="https://forms.gle/kfWJ9rLnue6z9k5G7"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
												>
													{t.daftarSekarang}
												</a>
											</div>
										</div>
									</div>

								)}

								{/* Tab Content: JLPT */}
								{activeTab === "jlpt" && (
									<div className="space-y-8">
										{/* JLPT N5 */}
										<div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												JLPT N5
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Lulus JLPT N5/Nat-Test/Jtest, Menguasai strategi soal
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 4 bulan (80 jam) | <strong>Kuota:</strong> 10
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> Nihongo Soomatome N5, JLPT Taisaku N5, Gokaku Dekiru N5-N4
													</p>
													<p className="text-2xl font-bold text-purple-600 mt-4">
														Rp4.250.000 <span className="text-sm text-gray-600">(+Sudah include pendaftaran)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Memahami strategi penyelesaian N5
														</li>
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Lulus Sertifikat JLPT N5
														</li>
													</ul>
												</div>
											</div>
										</div>

										{/* JLPT N4 */}
										<div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												JLPT N4
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Lulus JLPT N4/NatTest/Jtest, Menguasai strategi soal
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 4 bulan (80 jam) | <strong>Kuota:</strong> 10
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> Nihongo Soomatome N4, JLPT Taisaku N4, Gokaku Dekiru N5-N4, Best Practice N4
													</p>
													<p className="text-2xl font-bold text-purple-600 mt-4">
														Rp4.250.000 <span className="text-sm text-gray-600">(+Sudah include pendaftaran)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Memahami strategi penyelesaian N4
														</li>
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Lulus Sertifikat JLPT N4
														</li>
													</ul>
												</div>
											</div>
										</div>

										{/* JLPT N3 */}
										<div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												JLPT N3
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Lulus JLPT N3/Nat-Test/Jtest, Menguasai strategi soal
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 4 bulan (80 jam) | <strong>Kuota:</strong> 10
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> Nihongo Soomatome N3, JLPT Taisaku N3
													</p>
													<p className="text-2xl font-bold text-purple-600 mt-4">
														Rp4.250.000 <span className="text-sm text-gray-600">(+Sudah include pendaftaran)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Memahami strategi penyelesaian N3
														</li>
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Lulus Sertifikat JLPT N3
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Category 2: Program Chuo 3+2 */}
						<div className="mb-20">
							<div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 border-2 border-orange-100">
								<div className="flex flex-col lg:flex-row gap-8 items-start">
									<div className="flex-1">
										<h3 className="text-3xl font-bold text-gray-900 mb-4">
											{t.chuoTitle}
										</h3>
										<h4 className="text-xl font-semibold text-gray-800 mb-4">
											{t.chuoSubtitle}
										</h4>
										<p className="text-gray-700 text-lg leading-relaxed mb-6">
											{t.chuoDesc}
										</p>
										<div className="space-y-3 mb-8">
											{t.chuoBullets.map((bullet, i) => (
												<div key={i} className="flex items-center text-gray-700">
													<span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
													<span>{bullet}</span>
												</div>
											))}
										</div>
										<Link
											href="/programs/cmld4f2x2000004jvi2utogg4"
											target="_blank"
											className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg group"
										>
											{t.chuoBtn}
											<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
										</Link>
									</div>
									<div className="w-full lg:w-1/3 relative h-64 lg:h-auto min-h-[250px] rounded-xl overflow-hidden shadow-md">
										<img
											src="/images/programs/chuo.webp"
											alt="Program Chuo 3+2"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Category 3: Program SPUA */}
						{/* <div className="mb-20">
						<div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-8 lg:p-12 border-2 border-teal-100">
							<h3 className="text-3xl font-bold text-gray-900 mb-4">
								Program SPUA (Internship)
							</h3>
							<h4 className="text-xl font-semibold text-gray-800 mb-6">
								Kerja Sama Sekolah Vokasi IPB University dan Shizuoka Professional University of Agriculture Buka Peluang Internship Mahasiswa di Jepang
							</h4>

							<div className="space-y-6 text-gray-700">
								<div>
									<h5 className="font-bold text-gray-900 mb-2">Deskripsi & Kerjasama</h5>
									<p>
										Sekolah Vokasi IPB University terus memperluas kerja sama internasional melalui kemitraan dengan Shizuoka Professional University of Agriculture (SPUA), Jepang, yang membuka peluang program internship internasional bagi mahasiswa. Kerja sama ini bertujuan memberikan pengalaman praktik langsung di sektor pertanian modern Jepang sekaligus menyiapkan lulusan vokasi yang siap bersaing di pasar kerja global.
									</p>
								</div>

								<div>
									<h5 className="font-bold text-gray-900 mb-2">Implementasi</h5>
									<p>
										Program SPUA Internship merupakan salah satu bentuk implementasi nyata kolaborasi akademik antara Sekolah Vokasi IPB University dan SPUA. Melalui program ini, mahasiswa Sekolah Vokasi IPB University memperoleh kesempatan untuk mengikuti kegiatan magang di Jepang dalam rentang waktu tertentu, dengan fokus pada penguatan keterampilan praktis, pemahaman teknologi pertanian, serta budaya dan etos kerja Jepang.
									</p>
								</div>

								<div>
									<h5 className="font-bold text-gray-900 mb-2">Relevansi & Kegiatan</h5>
									<p>
										Program internship ini relevan dengan kebutuhan Jepang yang saat ini mengalami kekurangan tenaga kerja profesional di sektor pertanian, akibat menurunnya angka kelahiran. Selama program berlangsung, peserta internship akan mengikuti berbagai kegiatan, antara lain orientasi, praktik pertanian modern, pengelolaan tanaman, kegiatan agrowisata, hingga penyusunan dan presentasi proyek magang. Kerja sama ini juga sejalan dengan hubungan sister city antara Prefektur Shizuoka dan Provinsi Jawa Barat, yang selama beberapa tahun terakhir aktif mendorong mobilitas tenaga kerja dan kolaborasi pendidikan di bidang pertanian.
									</p>
								</div>

								<div>
									<h5 className="font-bold text-gray-900 mb-2">Harapan Program</h5>
									<p>
										Melalui kemitraan Sekolah Vokasi IPB University dan SPUA, diharapkan semakin banyak mahasiswa yang memperoleh kesempatan internship internasional, meningkatkan kompetensi global, serta membuka peluang karier di Jepang, khususnya di sektor pertanian dan agribisnis.
									</p>
								</div>
							</div>
						</div>
					</div> */}
					</div>
				</section>

				{/* Teachers Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
								{t.teachersTitle}
							</h2>
						</div>

						<div className="max-w-3xl mx-auto space-y-8">
							{/* Gambar Tim Pengajar */}
							<div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
								<div className="relative w-full aspect-video">
									<Image
										src="/images/ppbj/pengajar.webp"
										alt="Tim Pengajar Pusat Bahasa Sekolah Vokasi IPB"
										fill
										sizes="(max-width: 768px) 100vw, 1024px"
										quality={100}
										className="object-contain"
										priority={false}
									/>
								</div>
							</div>

							{/* Deskripsi */}
							<div className="max-w-4xl mx-auto">
								<div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
									<p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.teachersDesc }} />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
								{t.testiTitle}
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								{t.testiDesc}
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{/* Testimoni 1 */}
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
								{/* Profile Image */}
								<div className="flex justify-center mb-4">
									<div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-blue-100">
										{/* Placeholder for image - will be filled later */}
										<div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
											<span className="text-3xl text-gray-400">👤</span>
										</div>
									</div>
									{/* <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-blue-100 relative">
										<Image
											src="/images/testimonials/jonathan.webp"
											alt="Jonathan Devin Sanjaya"
											fill
											className="object-cover"
										/>
									</div> */}
								</div>
								<div className="mb-4 text-center">
									<h4 className="font-bold text-gray-900">Jonathan Devin Sanjaya</h4>
									<p className="text-sm text-gray-600">{t.testi1Role}</p>
								</div>
								<p className="text-gray-700 italic">
									{t.testi1Text}
								</p>
							</div>

							{/* Testimoni 2 */}
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
								{/* Profile Image */}
								<div className="flex justify-center mb-4">
									<div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-blue-100">
										{/* Placeholder for image - will be filled later */}
										<div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
											<span className="text-3xl text-gray-400">👤</span>
										</div>
									</div>
									{/* <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-blue-100 relative">
										<Image
											src="/images/testimonials/boy.webp"
											alt="Boy Mranata Sinaga"
											fill
											className="object-cover"
										/>
									</div> */}
								</div>
								<div className="mb-4 text-center">
									<h4 className="font-bold text-gray-900">Boy Mranata Sinaga</h4>
									<p className="text-sm text-gray-600">{t.testi2Role}</p>
								</div>
								<p className="text-gray-700 italic">
									{t.testi2Text}
								</p>
							</div>

							{/* Testimoni 3 */}
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
								{/* Profile Image */}
								<div className="flex justify-center mb-4">
									<div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-blue-100 relative">
										<Image
											src="/images/testimonials/ernesto.webp"
											alt="Ernesto Bagus"
											fill
											className="object-cover"
										/>
									</div>
								</div>
								<div className="mb-4 text-center">
									<h4 className="font-bold text-gray-900">Ernesto Bagus</h4>
									<p className="text-sm text-gray-600">{t.testi3Role}</p>
								</div>
								<p className="text-gray-700 italic">
									{t.testi3Text}
								</p>
							</div>

							{/* Testimoni 4 */}
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
								{/* Profile Image */}
								<div className="flex justify-center mb-4">
									<div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-blue-100">
										{/* Placeholder for image - will be filled later */}
										<div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
											<span className="text-3xl text-gray-400">👤</span>
										</div>
									</div>
									{/* <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-blue-100 relative">
										<Image
											src="/images/testimonials/purwoko.webp"
											alt="Purwoko Hedianto"
											fill
											className="object-cover"
										/>
									</div> */}
								</div>
								<div className="mb-4 text-center">
									<h4 className="font-bold text-gray-900">Purwoko Hedianto</h4>
									<p className="text-sm text-gray-600">{t.testi4Role}</p>
								</div>
								<p className="text-gray-700 italic">
									{t.testi4Text}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Kenali Kami Lebih Lanjut Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
								{t.socialTitle}
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								{t.socialDesc}
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
							{/* Instagram Card */}
							<a
								href="https://www.instagram.com/ppbj_svipb/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
							>
								<div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
									<Instagram className="w-10 h-10 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2">Instagram</h3>
								<p className="text-gray-600 mb-4 font-medium">@ppbj_svipb</p>
								<span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
									{t.socialIgCta}
								</span>
							</a>

							<a
								href="https://wa.me/6282299273968?text=Halo%20admin%2C%20saya%20ingin%20bertanya%20tentang%20PPBJ."
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
							>
								<div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
									<MessageCircle className="w-10 h-10 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp</h3>
								<p className="text-gray-600 mb-4 font-medium">{t.socialWaLabel}</p>
								<span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
									{t.socialWaCta}
								</span>
							</a>


							{/* Email Card */}
							<a
								href="mailto:kbj.svipb@gmail.com"
								className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
							>
								<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
									<Mail className="w-10 h-10 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2">Email</h3>
								<p className="text-gray-600 mb-4 font-medium">kbj.svipb@gmail.com</p>
								<span className="text-sm font-semibold text-blue-600 group-hover:opacity-80 transition-opacity">
									{t.socialEmailCta}
								</span>
							</a>

						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section
					id="cta-section"
					className="py-20 bg-gradient-to-r from-blue-600 to-blue-700"
				>
					<div className="container mx-auto px-4 text-center scroll-smooth">
						<h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
							{t.ctaTitle}
						</h2>
						<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
							{t.ctaDesc}
						</p>
						<button							// href="https://forms.gle/JDx5wEpHD6T4SciC7"
							onClick={scrollToPrograms}
							// target="_blank"
							className="inline-block px-10 py-5 bg-white text-blue-700 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
						>
							{t.ctaBtn}
						</button>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}
