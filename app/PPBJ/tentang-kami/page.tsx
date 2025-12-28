import type { Metadata } from "next";
import { useLanguage } from "../../components/LanguageProvider";

export const metadata: Metadata = {
	title: "Tentang Kami - PPBJ Aceh",
	description: "Profil, visi, misi, legalitas dan kerja sama PPBJ Aceh",
};

export default function TentangKamiPage() {
	const { language, t } = useLanguage();

	// Define specific translations for tentang-kami page content
	const tentangKamiTranslations = {
		id: {
			pageTitle: "Tentang Kami",
			pageDescription:
				"Pusat Pelatihan Bahasa Jepang di Aceh yang siap membawa Anda bekerja di Jepang dengan program pelatihan terstandar",
			profileTitle: "Profil PPBJ Aceh",
			profileText1:
				"Pusat Pelatihan Bahasa Jepang (PPBJ) Aceh adalah lembaga pendidikan yang berfokus pada pengembangan kompetensi bahasa Jepang serta persiapan untuk bekerja di Jepang. Berdiri dengan komitmen untuk memberikan pelatihan berkualitas tinggi dengan kurikulum terstandarisasi yang siap mengantarkan peserta menjadi tenaga kerja profesional di Jepang.",
			profileText2:
				"Kami memiliki pengalaman bertahun-tahun dalam membentuk tenaga kerja siap kerja yang mampu bersaing di pasar global. Fokus utama kami adalah memberikan pendidikan yang tidak hanya mengutamakan aspek bahasa, tetapi juga pemahaman budaya dan etika kerja yang relevan dengan lingkungan kerja di Jepang.",
			visionMissionTitle: "Visi & Misi",
			visionMissionDescription:
				"Kami memiliki pandangan jangka panjang dan tujuan yang jelas dalam membentuk tenaga kerja unggul",
			visionTitle: "Visi",
			visionText:
				"Mewujudkan tenaga kerja Indonesia yang profesional dan kompetitif di pasar global, khususnya di Jepang, melalui pendidikan dan pelatihan berkualitas tinggi.",
			missionTitle: "Misi",
			missionList: [
				"Menyelenggarakan pelatihan bahasa Jepang yang berkualitas tinggi berbasis standar internasional.",
				"Membangun jejaring internasional untuk penyaluran tenaga kerja yang profesional.",
				"Membentuk karakter peserta yang siap bekerja di lingkungan multibudaya.",
				"Memberikan pendidikan yang komprehensif mencakup aspek bahasa, budaya, dan etika kerja.",
			],
			legalPartnershipTitle: "Legalitas & Kerja Sama",
			legalPartnershipDescription:
				"PPBJ Aceh beroperasi di bawah naungan institusi pendidikan resmi dengan legalitas yang sah serta memiliki kerja sama strategis dengan berbagai institusi",
			legalTitle: "Legalitas Lembaga",
			legalText:
				"PPBJ Aceh beroperasi secara legal di bawah naungan institusi pendidikan resmi dengan dokumen legalitas yang lengkap dan terdaftar secara resmi di instansi terkait. Kami berkomitmen untuk menjalankan operasional sesuai dengan peraturan perundang-undangan yang berlaku.",
			partnershipTitle: "Kemitraan Strategis",
			partnershipText:
				"Kami menjalin kerja sama dengan berbagai institusi pendidikan, pemerintah, dan perusahaan di dalam dan luar negeri untuk mendukung program pelatihan dan penyaluran kerja peserta.",
			partnershipList: [
				"Kemitraan dengan lembaga pelatihan di Jepang",
				"Kerja sama dengan perusahaan penerima di Jepang",
				"Kemitraan dengan institusi pendidikan lokal",
				"Kolaborasi dengan lembaga pemerintah terkait",
			],
			ctaTitle: "Bergabunglah dengan Komunitas Pembelajar di PPBJ Aceh",
			ctaDescription:
				"Mewujudkan impian bekerja di Jepang bersama ribuan alumni kami",
			ctaButton: "Daftar Sekarang",
		},
		en: {
			pageTitle: "About Us",
			pageDescription:
				"Japanese Language Training Center in Aceh that prepares you to work in Japan with standardized training programs",
			profileTitle: "PPBJ Aceh Profile",
			profileText1:
				"Japanese Language Training Center (PPBJ) Aceh is an educational institution focused on developing Japanese language competencies and preparation for working in Japan. Established with a commitment to provide high-quality training with standardized curriculum ready to deliver participants as professional workforce in Japan.",
			profileText2:
				"We have years of experience in forming job-ready workforce capable of competing in the global market. Our main focus is providing education that not only prioritizes language aspects, but also cultural understanding and work ethics relevant to the Japanese work environment.",
			visionMissionTitle: "Vision & Mission",
			visionMissionDescription:
				"We have a long-term view and clear goals in forming excellent workforce",
			visionTitle: "Vision",
			visionText:
				"Realizing Indonesian workforce that is professional and competitive in the global market, especially in Japan, through high-quality education and training.",
			missionTitle: "Mission",
			missionList: [
				"Conducting high-quality Japanese language training based on international standards.",
				"Building international networks for professional workforce placement.",
				"Shaping participant character ready to work in multicultural environments.",
				"Providing comprehensive education covering language, culture, and work ethics aspects.",
			],
			legalPartnershipTitle: "Legal Status & Partnerships",
			legalPartnershipDescription:
				"PPBJ Aceh operates under official educational institution with valid legal status and has strategic partnerships with various institutions",
			legalTitle: "Institution Legal Status",
			legalText:
				"PPBJ Aceh operates legally under official educational institution with complete legal documents and officially registered with relevant authorities. We are committed to conducting operations in accordance with applicable regulations.",
			partnershipTitle: "Strategic Partnerships",
			partnershipText:
				"We establish partnerships with various educational institutions, governments, and companies both domestically and internationally to support our training programs and participant placement.",
			partnershipList: [
				"Partnership with training institutions in Japan",
				"Collaboration with receiving companies in Japan",
				"Partnership with local educational institutions",
				"Collaboration with relevant government agencies",
			],
			ctaTitle: "Join the PPBJ Aceh Learning Community",
			ctaDescription:
				"Realizing your dream of working in Japan with our thousands of alumni",
			ctaButton: "Register Now",
		},
	};

	const getTranslation = (key: keyof typeof tentangKamiTranslations.id) => {
		return (
			tentangKamiTranslations[language][key] || tentangKamiTranslations.id[key]
		);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Page Header */}
			<div className="bg-gradient-to-b from-blue-50 to-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">
							{getTranslation("pageTitle")}
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							{getTranslation("pageDescription")}
						</p>
					</div>
				</div>
			</div>

			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								{getTranslation("profileTitle")}
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								{getTranslation("profileText1")}
							</p>
							<p className="text-lg text-gray-600">
								{getTranslation("profileText2")}
							</p>
						</div>
						<div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
					</div>
				</div>
			</div>

			<div className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							{getTranslation("visionMissionTitle")}
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							{getTranslation("visionMissionDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								{getTranslation("visionTitle")}
							</h3>
							<div className="flex items-start">
								<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-6">
									V
								</div>
								<p className="text-lg text-gray-600">
									{getTranslation("visionText")}
								</p>
							</div>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								{getTranslation("missionTitle")}
							</h3>
							<ul className="space-y-4">
								{getTranslation("missionList").map((mission, index) => (
									<li key={index} className="flex items-start">
										<div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
											{index + 1}
										</div>
										<p className="text-lg text-gray-600">{mission}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							{getTranslation("legalPartnershipTitle")}
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							{getTranslation("legalPartnershipDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								{getTranslation("legalTitle")}
							</h3>
							<p className="text-gray-600 mb-6">
								{getTranslation("legalText")}
							</p>
							<div className="grid grid-cols-2 gap-4">
								{[1, 2, 3, 4].map((item) => (
									<div key={item} className="border rounded-lg p-4 text-center">
										<div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-2" />
										<p className="text-sm">
											{language === "id"
												? `Izin/Ikon ${item}`
												: `License/Icon ${item}`}
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								{getTranslation("partnershipTitle")}
							</h3>
							<p className="text-gray-600 mb-6">
								{getTranslation("partnershipText")}
							</p>
							<ul className="space-y-4">
								{getTranslation("partnershipList").map((partnership, index) => (
									<li key={index} className="flex items-start">
										<div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full mt-1 mr-4"></div>
										<span className="text-gray-600">{partnership}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						{getTranslation("ctaTitle")}
					</h2>
					<p className="text-xl mb-10 text-blue-100">
						{getTranslation("ctaDescription")}
					</p>
					<a
						href="https://www.jotform.com/app/252954455231458"
						target="_blank"
						className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform inline-block"
						rel="noopener"
					>
						{getTranslation("ctaButton")}
					</a>
				</div>
			</div>
		</div>
	);
}
