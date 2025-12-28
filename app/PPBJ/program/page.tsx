import type { Metadata } from "next";
import { useLanguage } from "../../components/LanguageProvider";

export const metadata: Metadata = {
	title: "Program - PPBJ Aceh",
	description:
		"Program pelatihan bahasa Jepang dari level N5 hingga N3 di PPBJ Aceh",
};

export default function ProgramPage() {
	const { language, t } = useLanguage();

	// Define specific translations for program page content
	const programTranslations = {
		id: {
			pageTitle: "Program Pelatihan",
			pageDescription:
				"Program pelatihan bahasa Jepang dari level N5 hingga N3 dengan metode pembelajaran terbaik dan fasilitas memadai",
			trainingTitle: "Pelatihan Bahasa Jepang (Level N5–N3)",
			trainingDescription:
				"Program kami dirancang untuk membawa peserta dari tingkat pemula hingga siap bekerja di Jepang",
			levelN5: "Level N5",
			levelN5Description:
				"Awal belajar bahasa Jepang, mempelajari huruf hiragana/katakana dan kosakata dasar",
			levelN5List: [
				"Pengenalan huruf hiragana dan katakana",
				"Kosakata dasar (100+ kata)",
				"Tata bahasa dasar",
				"Kalimat sederhana",
			],
			levelN4: "Level N4",
			levelN4Description:
				"Kemampuan dasar untuk berkomunikasi dalam situasi sederhana",
			levelN4List: [
				"Pola kalimat kompleks",
				"Kosakata menengah (300+ kata)",
				"Latihan percakapan harian",
				"Membaca dan menulis kanji dasar",
			],
			levelN3: "Level N3",
			levelN3Description:
				"Kemampuan menengah lanjut untuk lingkungan profesional",
			levelN3List: [
				"Tata bahasa kompleks",
				"Kosakata luas (600+ kata)",
				"Simulasi kerja & budaya Jepang",
				"Kemampuan berkomunikasi profesional",
			],
			methodTitle: "Metode Pembelajaran",
			methodDescription:
				"Pendekatan pembelajaran yang efektif dan menyesuaikan dengan kebutuhan dunia kerja di Jepang",
			workSimulationTitle: "Simulasi Kerja",
			workSimulationDescription:
				"Pembelajaran tidak hanya seputar bahasa, tetapi juga simulasi situasi kerja nyata di Jepang. Peserta dilatih untuk berkomunikasi secara profesional dalam lingkungan kerja.",
			workSimulationList: [
				"Latihan wawancara kerja",
				"Simulasi komunikasi di tempat kerja",
				"Praktik situasi kerja nyata",
			],
			cultureApproachTitle: "Pendekatan Budaya",
			cultureApproachDescription:
				"Pemahaman terhadap budaya Jepang merupakan bagian penting dari program kami. Selain penguasaan bahasa, peserta juga mempelajari etika kerja dan nilai-nilai budaya Jepang.",
			cultureApproachList: [
				"Pemahaman budaya kerja Jepang",
				"Nilai-nilai etika dan profesionalisme",
				"Simulasi interaksi budaya di tempat kerja",
			],
			facilitiesTitle: "Fasilitas",
			facilitiesDescription:
				"Kami menyediakan fasilitas terbaik untuk mendukung proses pembelajaran yang optimal",
			facilitiesList: [
				"Kelas ber-AC dengan fasilitas multimedia",
				"Laboratorium bahasa digital",
				"Perpustakaan dengan koleksi Jepang",
				"Akses internet cepat dan stabil",
			],
			enrollmentTitle: "Pendaftaran & Biaya",
			enrollmentDescription:
				"Proses pendaftaran yang mudah dan biaya terjangkau untuk semua kalangan",
			enrollmentList: [
				"Biaya pelatihan terjangkau",
				"Proses pendaftaran online",
				"Jadwal fleksibel",
				"Sertifikat pelatihan resmi",
			],
			ctaTitle: "Siap Memulai Pelatihan Bahasa Jepang?",
			ctaDescription:
				"Bergabunglah dengan ribuan alumni kami yang sukses bekerja di Jepang",
			ctaButton: "Daftar Sekarang",
		},
		en: {
			pageTitle: "Training Program",
			pageDescription:
				"Japanese language training program from N5 to N3 level with the best learning methods and adequate facilities",
			trainingTitle: "Japanese Language Training (Level N5–N3)",
			trainingDescription:
				"Our program is designed to bring participants from beginner level to ready for work in Japan",
			levelN5: "Level N5",
			levelN5Description:
				"Beginning of learning Japanese, studying hiragana/katakana characters and basic vocabulary",
			levelN5List: [
				"Introduction to hiragana and katakana characters",
				"Basic vocabulary (100+ words)",
				"Basic grammar",
				"Simple sentences",
			],
			levelN4: "Level N4",
			levelN4Description: "Basic ability to communicate in simple situations",
			levelN4List: [
				"Complex sentence patterns",
				"Intermediate vocabulary (300+ words)",
				"Daily conversation practice",
				"Reading and writing basic kanji",
			],
			levelN3: "Level N3",
			levelN3Description:
				"Advanced intermediate ability for professional environments",
			levelN3List: [
				"Complex grammar",
				"Extensive vocabulary (600+ words)",
				"Work simulation & Japanese culture",
				"Professional communication skills",
			],
			methodTitle: "Learning Methods",
			methodDescription:
				"Effective learning approach that suits the needs of the Japanese workplace",
			workSimulationTitle: "Work Simulation",
			workSimulationDescription:
				"Learning is not only about language, but also simulation of real work situations in Japan. Participants are trained to communicate professionally in the work environment.",
			workSimulationList: [
				"Job interview practice",
				"Workplace communication simulation",
				"Real work situation practice",
			],
			cultureApproachTitle: "Cultural Approach",
			cultureApproachDescription:
				"Understanding of Japanese culture is an important part of our program. In addition to language mastery, participants also learn work ethics and Japanese cultural values.",
			cultureApproachList: [
				"Understanding Japanese work culture",
				"Work ethics and professionalism values",
				"Cultural interaction simulation in the workplace",
			],
			facilitiesTitle: "Facilities",
			facilitiesDescription:
				"We provide the best facilities to support optimal learning processes",
			facilitiesList: [
				"Air-conditioned classroom with multimedia facilities",
				"Digital language laboratory",
				"Library with Japanese collections",
				"Fast and stable internet access",
			],
			enrollmentTitle: "Registration & Fees",
			enrollmentDescription:
				"Easy registration process and affordable fees for all levels",
			enrollmentList: [
				"Affordable training fees",
				"Online registration process",
				"Flexible schedules",
				"Official training certificates",
			],
			ctaTitle: "Ready to Start Japanese Language Training?",
			ctaDescription:
				"Join our thousands of successful alumni working in Japan",
			ctaButton: "Register Now",
		},
	};

	const getTranslation = (key: keyof typeof programTranslations.id) => {
		return programTranslations[language][key] || programTranslations.id[key];
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

			{/* Pelatihan Bahasa Jepang (Level N5–N3) Section */}
			<section id="pelatihan" className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							{getTranslation("trainingTitle")}
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							{getTranslation("trainingDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Level N5 */}
						<div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-6">
								N5
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
								{getTranslation("levelN5")}
							</h3>
							<p className="text-gray-600 mb-6 text-center">
								{getTranslation("levelN5Description")}
							</p>
							<ul className="space-y-3">
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN5List")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN5List")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN5List")[2]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN5List")[3]}
									</span>
								</li>
							</ul>
						</div>

						{/* Level N4 */}
						<div className="bg-green-50 p-8 rounded-xl border border-green-100">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-6">
								N4
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
								{getTranslation("levelN4")}
							</h3>
							<p className="text-gray-600 mb-6 text-center">
								{getTranslation("levelN4Description")}
							</p>
							<ul className="space-y-3">
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN4List")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN4List")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN4List")[2]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN4List")[3]}
									</span>
								</li>
							</ul>
						</div>

						{/* Level N3 */}
						<div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
							<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xl mx-auto mb-6">
								N3
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
								{getTranslation("levelN3")}
							</h3>
							<p className="text-gray-600 mb-6 text-center">
								{getTranslation("levelN3Description")}
							</p>
							<ul className="space-y-3">
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-yellow-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN3List")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-yellow-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN3List")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-yellow-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN3List")[2]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-yellow-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("levelN3List")[3]}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Metode Pembelajaran Section */}
			<section id="metode" className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							{getTranslation("methodTitle")}
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							{getTranslation("methodDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
								💼
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								{getTranslation("workSimulationTitle")}
							</h3>
							<p className="text-gray-600 mb-4">
								{getTranslation("workSimulationDescription")}
							</p>
							<ul className="space-y-2">
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("workSimulationList")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("workSimulationList")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("workSimulationList")[2]}
									</span>
								</li>
							</ul>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
								🌏
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								{getTranslation("cultureApproachTitle")}
							</h3>
							<p className="text-gray-600 mb-4">
								{getTranslation("cultureApproachDescription")}
							</p>
							<ul className="space-y-2">
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("cultureApproachList")[0]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("cultureApproachList")[1]}
									</span>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
									<span className="text-gray-600">
										{getTranslation("cultureApproachList")[2]}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Fasilitas Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							{getTranslation("facilitiesTitle")}
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							{getTranslation("facilitiesDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{getTranslation("facilitiesList").map((facility, index) => (
							<div
								key={index}
								className="bg-gray-50 p-6 rounded-xl border border-gray-100"
							>
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4 mx-auto">
									{index + 1}
								</div>
								<p className="text-gray-600 text-center">{facility}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pendaftaran Section */}
			<section className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							{getTranslation("enrollmentTitle")}
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							{getTranslation("enrollmentDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
							<h3 className="text-xl font-bold text-gray-900 mb-6">
								{language === "id"
									? "Proses Pendaftaran"
									: "Registration Process"}
							</h3>
							<ol className="space-y-4">
								<li className="flex">
									<div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
										1
									</div>
									<span className="text-gray-600">
										{language === "id"
											? "Isi formulir pendaftaran online"
											: "Fill out the online registration form"}
									</span>
								</li>
								<li className="flex">
									<div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
										2
									</div>
									<span className="text-gray-600">
										{language === "id"
											? "Upload dokumen persyaratan"
											: "Upload required documents"}
									</span>
								</li>
								<li className="flex">
									<div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
										3
									</div>
									<span className="text-gray-600">
										{language === "id"
											? "Ikuti tes seleksi awal"
											: "Take the initial selection test"}
									</span>
								</li>
								<li className="flex">
									<div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
										4
									</div>
									<span className="text-gray-600">
										{language === "id"
											? "Konfirmasi penerimaan dan mulai pelatihan"
											: "Confirm acceptance and start training"}
									</span>
								</li>
							</ol>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
							<h3 className="text-xl font-bold text-gray-900 mb-6">
								{language === "id"
									? "Keuntungan Mendaftar"
									: "Registration Benefits"}
							</h3>
							<ul className="space-y-3">
								{getTranslation("enrollmentList").map((item, index) => (
									<li key={index} className="flex items-start">
										<div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
										<span className="text-gray-600">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
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
			</section>
		</div>
	);
}
