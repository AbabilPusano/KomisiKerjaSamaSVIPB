"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
	const { language, t } = useLanguage();

	// Define specific translations for home page content
	const homeTranslations = {
		id: {
			heroTitle: "Belajar Bahasa Jepang & Siap Kerja di Jepang",
			heroDescription:
				"Bergabunglah dengan PPBJ Aceh dan wujudkan mimpi bekerja di Jepang bersama lembaga terpercaya. Program pelatihan terstandar dengan metode modern untuk sukses di pasar kerja Jepang.",
			registerNow: "Daftar Sekarang",
			learnMore: "Pelajari Lebih Lanjut",
			featuresTitle: "Program Pelatihan",
			featuresDescription:
				"Kami menawarkan program pelatihan bahasa Jepang dari level dasar hingga siap kerja",
			feature1Title: "Pelatihan Bahasa Jepang (Level N5–N3)",
			feature1Description:
				"Program pelatihan dari dasar hingga tingkat menengah atas, siap untuk bekerja di Jepang.",
			feature1List: [
				"Level N5: Huruf hiragana/katakana dan kosakata dasar",
				"Level N4: Kalimat kompleks dan percakapan harian",
				"Level N3: Komunikasi profesional dan budaya kerja",
			],
			feature2Title: "Metode Pembelajaran",
			feature2Description:
				"Pembelajaran berbasis simulasi kerja dan budaya, bukan hanya fokus pada bahasa.",
			feature2List: [
				"Simulasi kerja di lingkungan Jepang",
				"Pendekatan budaya dan etika kerja",
				"Latihan percakapan intensif",
			],
			feature3Title: "Fasilitas",
			feature3Description:
				"Dilengkapi laboratorium bahasa, perpustakaan, dan ruang konsultasi untuk optimalisasi belajar.",
			feature3List: [
				"Kelas ber-AC dengan fasilitas multimedia",
				"Laboratorium bahasa digital",
				"Perpustakaan dengan koleksi Jepang",
			],
			ctaTitle: "Ingin Tahu Lebih Lanjut Tentang Program Kami?",
			ctaDescription:
				"Jelajahi kurikulum, metode pembelajaran, dan fasilitas lengkap kami",
			ctaButtonText: "Lihat Detail Program",
			stepsTitle: "4 Langkah Menuju Jepang",
			stepsDescription:
				"Ikuti langkah-langkah sistematis untuk mewujudkan impian bekerja di Jepang bersama PPBJ Aceh",
			step1Title: "Pendaftaran",
		},
		en: {
			heroTitle: "Learn Japanese & Get Ready to Work in Japan",
			heroDescription:
				"Join PPBJ Aceh and fulfill your dream of working in Japan with a trusted institution. Standardized training programs with modern methods for success in the Japanese job market.",
			registerNow: "Register Now",
			learnMore: "Learn More",
			featuresTitle: "Training Programs",
			featuresDescription:
				"We offer Japanese language training programs from basic level to job-ready",
			feature1Title: "Japanese Language Training (Level N5–N3)",
			feature1Description:
				"Training program from basic to upper intermediate level, ready to work in Japan.",
			feature1List: [
				"Level N5: Hiragana/katakana characters and basic vocabulary",
				"Level N4: Complex sentences and daily conversations",
				"Level N3: Professional communication and work culture",
			],
			feature2Title: "Learning Methods",
			feature2Description:
				"Work-based and cultural simulation learning, not just focusing on language.",
			feature2List: [
				"Work simulation in Japanese environment",
				"Cultural approach and work ethics",
				"Intensive conversation practice",
			],
			feature3Title: "Facilities",
			feature3Description:
				"Equipped with language laboratory, library, and consultation room for optimal learning.",
			feature3List: [
				"Air-conditioned classroom with multimedia facilities",
				"Digital language laboratory",
				"Library with Japanese collections",
			],
			ctaTitle: "Want to Know More About Our Programs?",
			ctaDescription:
				"Explore our curriculum, learning methods, and complete facilities",
			ctaButtonText: "View Program Details",
			stepsTitle: "4 Steps to Japan",
			stepsDescription:
				"Follow systematic steps to fulfill your dream of working in Japan with PPBJ Aceh",
			step1Title: "Registration",
		},
	};

	const getTranslation = (key: keyof typeof homeTranslations.id) => {
		return homeTranslations[language][key] || homeTranslations.id[key];
	};

	// Scroll to CTA section when button is clicked
	const scrollToCTA = () => {
		const ctaSection = document.getElementById("cta-section");
		if (ctaSection) {
			ctaSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-blue-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
							{getTranslation("heroTitle")}
						</h1>
						<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
							{getTranslation("heroDescription")}
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Link
								href="https://www.jotform.com/app/252954455231458"
								target="_blank"
								className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
							>
								{getTranslation("registerNow")}
							</Link>
							<a
								href="/PPBJ/tentang-kami"
								className="bg-white hover:bg-gray-50 text-blue-500 border-2 border-blue-500 font-medium py-4 px-8 rounded-lg text-lg transition-colors duration-300"
							>
								{getTranslation("learnMore")}
							</a>
						</div>
					</div>

					{/* Hero Image */}
					<div className="mt-16 max-w-5xl mx-auto">
						<div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mx-auto" />
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-16 md:py-24 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{getTranslation("featuresTitle")}
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							{getTranslation("featuresDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Pelatihan Bahasa Jepang */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">📚</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{getTranslation("feature1Title")}
							</h3>
							<p className="text-gray-600">
								{getTranslation("feature1Description")}
							</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature1List")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature1List")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature1List")[2]}
									</span>
								</li>
							</ul>
						</div>

						{/* Metode Pembelajaran */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">🎓</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{getTranslation("feature2Title")}
							</h3>
							<p className="text-gray-600">
								{getTranslation("feature2Description")}
							</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature2List")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature2List")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature2List")[2]}
									</span>
								</li>
							</ul>
						</div>

						{/* Fasilitas */}
						<div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<span className="text-2xl">🏫</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{getTranslation("feature3Title")}
							</h3>
							<p className="text-gray-600">
								{getTranslation("feature3Description")}
							</p>
							<ul className="mt-4 space-y-2">
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature3List")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature3List")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-500 mr-2">•</span>
									<span className="text-gray-600">
										{getTranslation("feature3List")[2]}
									</span>
								</li>
							</ul>
						</div>
					</div>

					{/* CTA for Program Details */}
					<div className="mt-16 max-w-3xl mx-auto text-center">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							{getTranslation("ctaTitle")}
						</h3>
						<p className="text-gray-600 mb-6">
							{getTranslation("ctaDescription")}
						</p>
						<Link
							href="/PPBJ/program"
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
						>
							{getTranslation("ctaButtonText")}
						</Link>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section id="how-it-works" className="py-16 md:py-24 px-4 bg-blue-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{getTranslation("stepsTitle")}
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							{getTranslation("stepsDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Step 1 */}
						<div className="text-center">
							<div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								1
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{getTranslation("step1Title")}
							</h3>
							<p className="text-gray-600">
								Proses administrasi dan seleksi awal untuk memastikan kesiapan
								peserta.
							</p>
						</div>

						{/* Step 2 */}
						<div className="text-center">
							<div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								2
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{language === "id" ? "Pelatihan" : "Training"}
							</h3>
							<p className="text-gray-600">
								{language === "id"
									? "Pembelajaran intensif bahasa, budaya, dan simulasi lingkungan kerja."
									: "Intensive learning of language, culture, and work environment simulation."}
							</p>
						</div>

						{/* Step 3 */}
						<div className="text-center">
							<div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								3
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{language === "id" ? "Sertifikasi" : "Certification"}
							</h3>
							<p className="text-gray-600">
								{language === "id"
									? "Ujian JLPT/JFT dan Skill Test untuk menilai kompetensi peserta."
									: "JLPT/JFT and Skill Test to assess participants' competencies."}
							</p>
						</div>

						{/* Step 4 */}
						<div className="text-center">
							<div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								4
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{language === "id" ? "Penyaluran" : "Placement"}
							</h3>
							<p className="text-gray-600">
								{language === "id"
									? "Proses penempatan kerja di perusahaan-perusahaan rekanan di Jepang."
									: "Job placement process at partner companies in Japan."}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 md:py-24 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{language === "id" ? "Testimoni Alumni" : "Alumni Testimonials"}
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							{language === "id"
								? "Cerita keberhasilan alumni PPBJ Aceh yang kini bekerja di Jepang"
								: "Success stories of PPBJ Aceh alumni who are now working in Japan"}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
							<div className="flex items-center mb-6">
								<div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
								<div className="ml-4">
									<h3 className="font-bold text-lg">Ahmad Fauzi</h3>
									<p className="text-gray-600">
										{language === "id"
											? "Operator Mesin di Toyota"
											: "Machine Operator at Toyota"}
									</p>
								</div>
							</div>
							<p className="text-gray-600 italic">
								{language === "id"
									? "Proses pelatihan di PPBJ sangat sistematis. Setelah lulus langsung ditempatkan di perusahaan besar di Jepang."
									: "The training process at PPBJ is very systematic. After graduation, I was immediately placed at a major company in Japan."}
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
							<div className="flex items-center mb-6">
								<div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
								<div className="ml-4">
									<h3 className="font-bold text-lg">Siti Nurhaliza</h3>
									<p className="text-gray-600">
										{language === "id"
											? "Perawat di RS Tokyo"
											: "Nurse at Tokyo Hospital"}
									</p>
								</div>
							</div>
							<p className="text-gray-600 italic">
								{language === "id"
									? "Metode pembelajaran di PPBJ sangat membantu memahami budaya dan komunikasi di lingkungan kerja Jepang."
									: "The learning method at PPBJ was very helpful in understanding culture and communication in the Japanese work environment."}
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
							<div className="flex items-center mb-6">
								<div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
								<div className="ml-4">
									<h3 className="font-bold text-lg">Rizki Pratama</h3>
									<p className="text-gray-600">
										{language === "id"
											? "IT Support di SoftBank"
											: "IT Support at SoftBank"}
									</p>
								</div>
							</div>
							<p className="text-gray-600 italic">
								{language === "id"
									? "PPBJ tidak hanya memberikan pelatihan bahasa, tapi juga persiapan mental dan budaya yang sangat berguna di lapangan."
									: "PPBJ not only provides language training, but also mental and cultural preparation that is very useful in the field."}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section
				id="cta-section"
				className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white"
			>
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
						{language === "id"
							? "Siap Memulai Perjalanan ke Jepang?"
							: "Ready to Start Your Journey to Japan?"}
					</h2>
					<p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
						{language === "id"
							? "Bergabunglah dengan ribuan alumni sukses kami yang kini bekerja di berbagai perusahaan di Jepang."
							: "Join our thousands of successful alumni who are now working at various companies in Japan."}
					</p>
					<Link
						href="https://www.jotform.com/app/252954455231458"
						target="_blank"
						className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform inline-block"
					>
						{getTranslation("registerNow")}
					</Link>
				</div>
			</section>
		</div>
	);
}
