"use client";

import Link from "next/link";
import { useLanguage } from "../../vcc/components/LanguageProvider";

export default function Footer() {
	const { language, t } = useLanguage();

	// Define specific translations for footer content
	const footerTranslations = {
		id: {
			title: "PPBJ Aceh",
			description:
				"Pusat pelatihan bahasa Jepang untuk persiapan kerja di Jepang.",
			programTitle: "Program",
			program1: "Level N5-N3",
			program2: "Metode Pembelajaran",
			program3: "Fasilitas",
			informationTitle: "Informasi",
			information1: "Tentang Kami",
			information2: "Alur ke Jepang",
			information3: "Testimoni",
			contactTitle: "Kontak",
			address: "Alamat: Jl. Contoh Alamat PPBJ",
			phone: "Telp: +62 651 123 4567",
			email: "Email: info@ppbj-aceh.ac.id",
			copyright: `© ${new Date().getFullYear()} PPBJ Aceh - Pusat Pelatihan Bahasa Jepang. Hak Cipta Dilindungi.`,
		},
		en: {
			title: "PPBJ Aceh",
			description:
				"Japanese language training center for job preparation in Japan.",
			programTitle: "Program",
			program1: "Level N5-N3",
			program2: "Learning Methods",
			program3: "Facilities",
			informationTitle: "Information",
			information1: "About Us",
			information2: "Path to Japan",
			information3: "Testimonials",
			contactTitle: "Contact",
			address: "Address: Jl. Example Address PPBJ",
			phone: "Phone: +62 651 123 4567",
			email: "Email: info@ppbj-aceh.ac.id",
			copyright: `© ${new Date().getFullYear()} PPBJ Aceh - Japanese Language Training Center. All Rights Reserved.`,
		},
	};

	const getTranslation = (key: keyof typeof footerTranslations.id) => {
		return footerTranslations[language][key] || footerTranslations.id[key];
	};

	return (
		<footer className="bg-gray-900 text-white py-12 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">
							{getTranslation("title")}
						</h3>
						<p className="text-gray-400 mb-4">
							{getTranslation("description")}
						</p>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-white">
								📘
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								🐦
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								📷
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								💼
							</a>
						</div>
					</div>
					<div>
						<h4 className="font-bold mb-4">{getTranslation("programTitle")}</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/PPBJ/program"
									className="text-gray-400 hover:text-white"
								>
									{getTranslation("program1")}
								</Link>
							</li>
							<li>
								<Link
									href="/PPBJ/program#metode"
									className="text-gray-400 hover:text-white"
								>
									{getTranslation("program2")}
								</Link>
							</li>
							<li>
								<Link
									href="/PPBJ/program#fasilitas"
									className="text-gray-400 hover:text-white"
								>
									{getTranslation("program3")}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">
							{getTranslation("informationTitle")}
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/PPBJ/tentang-kami"
									className="text-gray-400 hover:text-white"
								>
									{getTranslation("information1")}
								</Link>
							</li>
							<li>
								<a
									href="#how-it-works"
									className="text-gray-400 hover:text-white"
								>
									{getTranslation("information2")}
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									{getTranslation("information3")}
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">{getTranslation("contactTitle")}</h4>
						<ul className="space-y-2 text-gray-400">
							<li>{getTranslation("address")}</li>
							<li>{getTranslation("phone")}</li>
							<li>{getTranslation("email")}</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
					<p>{getTranslation("copyright")}</p>
				</div>
			</div>
		</footer>
	);
}
