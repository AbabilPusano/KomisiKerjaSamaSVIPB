"use client";
import { createContext, type ReactNode, useContext, useState } from "react";

type Language = "id" | "en";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
	tArray: (key: string) => string[];
}

const translations = {
	id: {
		// Navigation
		home: "Beranda",
		about: "Tentang Kami",
		programs: "Program",
		contact: "Kontak",

		// Hero Section
		heroTitle: "Vocational Collaboration Center (VCC)",
		heroDescription:
			"Pusat informasi kerja sama akademik internasional di bawah Komisi Kerja Sama Sekolah Vokasi IPB University. Temukan peluang akademik dan pengalaman internasional yang terstruktur dan terpercaya.",
		explorePrograms: "Jelajahi Program",
		learnMore: "Pelajari Lebih Lanjut",

		// Programs Section
		programsTitle: "Program Kerja Sama Pendidikan",
		programsSubtitle:
			"Temukan berbagai bentuk kerja sama akademik yang didukung oleh Komisi kerja sama Sekolah Vokasi IPB University",
		findOpportunities: "Temukan Peluang Internasional Anda",
		findOpportunitiesDesc:
			"Jelajahi program-program kolaborasi yang sesuai dengan minat dan tujuan akademik Anda",
		viewAllPrograms: "Lihat Semua Program",

		// Program Descriptions
		internship: "Program Magang Internasional",
		internshipDesc:
			"Dapatkan pengalaman kerja langsung di perusahaan mitra internasional.",
		internshipPoints: [
			"Kesempatan kerja di luar negeri",
			"Pengembangan keterampilan profesional",
			"Pemahaman budaya kerja global",
		],
		exchange: "Program Pertukaran Mahasiswa",
		exchangeDesc:
			"Belajar di universitas mitra internasional untuk memperluas wawasan akademik.",
		exchangePoints: [
			"Pengalaman akademik di luar negeri",
			"Peningkatan kompetensi global",
			"Jaringan internasional",
		],
		jointDegree: "Program Joint/Double Degree",
		jointDegreeDesc:
			"Dapatkan gelar dari dua institusi pendidikan dalam satu program studi.",
		jointDegreePoints: [
			"Dua gelar akademik dalam satu program",
			"Kualifikasi internasional",
			"Daya saing akademik",
		],
		languageClass: "Kelas Bahasa Asing",
		languageClassDesc:
			"Tingkatkan kemampuan bahasa Jepang dan Mandarin untuk kebutuhan akademik dan profesional.",
		languageClassPoints: [
			"Kelas bahasa Jepang dan Mandarin",
			"Pendekatan komunikatif dan kontekstual",
			"Persiapan untuk ujian sertifikasi",
		],
		competitions: "Kolaborasi Perlombaan & Kompetisi",
		competitionsDesc:
			"Berpartisipasi dalam kompetisi akademik internasional untuk mengasah kemampuan.",
		competitionsPoints: [
			"Perlombaan ilmiah dan teknologi",
			"Kolaborasi lintas institusi",
			"Pengakuan internasional",
		],
		partners: "Mitra Internasional",
		partnersDesc:
			"Jaringan kerja sama akademik dengan institusi dari berbagai negara.",
		partnersPoints: [
			"Jepang, China, Thailand, Vietnam",
			"Malaysia, New Zealand, dan lainnya",
			"Kesempatan belajar dan riset global",
		],

		// How It Works Section
		howItWorksTitle: "Cara Mendapatkan Informasi",
		howItWorksSubtitle:
			"Ikuti langkah-langkah sederhana untuk mengakses informasi kerja sama akademik dari VCC",
		step1: "Jelajahi Website",
		step1Desc:
			"Temukan informasi program dan mitra di halaman utama dan navigasi.",
		step2: "Kunjungi Halaman Program",
		step2Desc: "Lihat detail program kerja sama yang tersedia untuk dipilih.",
		step3: "Konsultasi",
		step3Desc:
			"Hubungi kami untuk informasi lebih lanjut dan bimbingan pendaftaran.",
		step4: "Ikuti Proses",
		step4Desc:
			"Lengkapi persyaratan dan ikuti langkah-langkah pendaftaran yang ditentukan.",

		// Testimonials Section
		testimonialsTitle: "Testimoni Mahasiswa",
		testimonialsSubtitle:
			"Cerita keberhasilan mahasiswa yang telah mengikuti program kolaborasi internasional",
		testimonial1Name: "M. Naufal Arkaan - MAB 59",
		testimonial1Role: "Delegasi Shizouka Professional University of Agriculture Japan Internship Program",
		testimonial1Image: "/images/testimonials/arkaan.webp",
		testimonial1Text:
			"Menjadi bagian dari program traineeship di Shizuoka Professional University of Agriculture (SPUA), Jepang, selama satu semester merupakan pengalaman yang luar biasa. Melalui kolaborasi antara IPB University dan SPUA, saya berkesempatan mengasah kompetensi internasional di bidang agribisnis serta memperluas wawasan lintas budaya secara langsung di lingkungan akademik Jepang. Program ini tidak hanya memperkuat kemampuan adaptasi saya, tetapi juga memberikan perspektif global yang sangat berharga bagi pengembangan karier saya di masa depan.",
		testimonial2Name: "Dzakiyyah Lainun Zain - MAB 60",
		testimonial2Role: "Delegasi Student Exchange Ilo Ilo Science and Technology University (ISAT U), Filipina",
		testimonial2Image: "/images/testimonials/dzakiyyah.webp",
		testimonial2Text:
			"Program student exchange di ISAT U, Filipina memberikan saya wawasan berharga mengenai sistem pertanian dan peternakan di Leon. Saya belajar banyak melalui praktik langsung di lapangan, kunjungan ke instansi pemerintah, hingga riset pasar di Leon Bagsakan Market. Pengalaman ini sangat efektif dalam meningkatkan kompetensi global dan pemahaman budaya saya di bidang agribisnis.",
		testimonial3Name: "Erina Lailani Safitri - TMP 59",
		testimonial3Role: "Delegasi Vietnam Coffee Plantation Research and Internship in Vietnam National University of Agriculture",
		testimonial3Image: "/images/testimonials/erina.webp",
		testimonial3Text:
			"Mengikuti program riset dan magang di Vietnam National University of Agriculture (VNUA) selama tiga bulan merupakan pengalaman yang sangat berharga. Saya tidak hanya memperdalam teori di kelas internasional, tetapi juga terjun langsung melakukan riset mandiri pada bibit kopi Arabika dan menjalani magang di Phuc Sinh Coffee Corporation, Sơn La. Program ini memberikan saya pemahaman mendalam mengenai seluruh rantai nilai kopi Vietnam, mulai dari budidaya berkelanjutan hingga strategi pemasaran internasional.",

		//about
		aboutTitle: "Tentang Kami",
		aboutSubtitle:
			"Komisi Kerja Sama Sekolah Vokasi IPB University mengelola dan mengembangkan kemitraan strategis untuk mendukung pendidikan vokasi yang relevan dan berdaya saing.",
		aboutImageAlt: "Komisi Kerja Sama Sekolah Vokasi IPB",
		aboutCardTitle: "Komisi Kerja Sama",
		aboutCardSubtitle: "Sekolah Vokasi IPB University",
		aboutRoleTitle: "Peran Komisi Kerja Sama",
		aboutRoleDesc:
			"Komisi ini menjadi penghubung antara Sekolah Vokasi IPB University dengan mitra industri, institusi pendidikan, dan lembaga pemerintah, baik nasional maupun internasional.",
		aboutPoint1: "Mengelola inisiatif kerja sama dan implementasi program.",
		aboutPoint2:
			"Mendorong kegiatan magang, pertukaran pelajar, dan penelitian terapan.",
		aboutPoint3: "Mendukung pengabdian masyarakat serta program internasional.",
		aboutCommitTitle: "Komitmen Kami",
		aboutCommitDesc:
			"Kami berkomitmen membangun kemitraan yang berkelanjutan untuk menciptakan pendidikan vokasi yang unggul, adaptif, dan berdaya saing global.",
		aboutCtaPrograms: "Lihat Program Kerja Sama",
		aboutCtaContact: "Hubungi Kami",
		//programs
		programsPageTitle: "Program",
		programsPageSubtitle:
			"Pilih negara tujuan untuk melihat program kerja sama dan detail kegiatannya.",

		programCountryVietnam: "Vietnam",
		programDescVietnam:
			"Program kerja sama pendidikan dan pelatihan vokasi bersama mitra di Vietnam.",

		programCountryThailand: "Thailand",
		programDescThailand:
			"Kesempatan pertukaran, pelatihan, dan kolaborasi akademik dengan institusi di Thailand.",

		programCountryNewZealand: "New Zealand",
		programDescNewZealand:
			"Program kolaborasi internasional, short course, dan penguatan kompetensi global.",

		programCountryMalaysia: "Malaysia",
		programDescMalaysia:
			"Kerja sama regional dalam bidang pendidikan vokasi dan pengembangan SDM.",

		programCountryJapan: "Jepang",
		programDescJapan:
			"Program pelatihan bahasa, magang, dan persiapan studi serta karier di Jepang.",

		programCountryChina: "China",
		programDescChina:
			"Peluang kerja sama pendidikan, riset terapan, dan pertukaran akademik dengan mitra di China.",

		// CTA Section
		ctaTitle: "Bergabunglah dengan Komunitas Mahasiswa VCC",
		ctaSubtitle:
			"Wujudkan pengalaman akademik internasional Anda bersama ribuan mahasiswa lainnya",
		contactUs: "Contact Us",

		// Footer
		footerQuickLinks: "Tautan Cepat",
		footerPrograms: "Program",
		footerCommission: "Komisi Kerja Sama",
		footerUniversity: "Sekolah Vokasi IPB University",
		footerEmail: "Email: vcc@ipb.ac.id",
		footerPhone: "Telepon: +62-xxx-xxxx-xxxx",
	},
	en: {
		// Navigation
		home: "Home",
		about: "About Us",
		programs: "Programs",
		contact: "Contact",

		// Hero Section
		heroTitle: "Vocational Collaboration Center (VCC)",
		heroDescription:
			"An international academic collaboration information center under the Colaboration Commission of IPB Vocational School. Discover structured and reliable academic opportunities and international experiences.",
		explorePrograms: "Explore Programs",
		learnMore: "Learn More",

		// Programs Section
		programsTitle: "Educational Collaboration Programs",
		programsSubtitle:
			"Discover various forms of academic collaboration supported by Colaboration Commission of IPB Vocational School",
		findOpportunities: "Find Your International Opportunities",
		findOpportunitiesDesc:
			"Explore collaborative programs that match your interests and academic goals",
		viewAllPrograms: "View All Programs",

		// Program Descriptions
		internship: "International Internship Program",
		internshipDesc:
			"Gain direct work experience at international partner companies.",
		internshipPoints: [
			"Overseas work opportunities",
			"Professional skill development",
			"Understanding of global work culture",
		],
		exchange: "Student Exchange Program",
		exchangeDesc:
			"Study at international partner universities to broaden your academic perspective.",
		exchangePoints: [
			"Overseas academic experience",
			"Global competency enhancement",
			"International networking",
		],
		jointDegree: "Joint/Double Degree Program",
		jointDegreeDesc:
			"Earn a degree from two educational institutions within a single study program.",
		jointDegreePoints: [
			"Two academic degrees in one program",
			"International qualification",
			"Academic competitiveness",
		],
		languageClass: "Foreign Language Classes",
		languageClassDesc:
			"Improve your Japanese and Mandarin skills for academic and professional needs.",
		languageClassPoints: [
			"Japanese and Mandarin language classes",
			"Communicative and contextual approach",
			"Certification exam preparation",
		],
		competitions: "Competition & Academic Contest Collaboration",
		competitionsDesc:
			"Participate in international academic competitions to hone your abilities.",
		competitionsPoints: [
			"Scientific and technology competitions",
			"Cross-institutional collaboration",
			"International recognition",
		],
		partners: "International Partners",
		partnersDesc:
			"Academic collaboration network with institutions from various countries.",
		partnersPoints: [
			"Japan, China, Thailand, Vietnam",
			"Malaysia, New Zealand, and others",
			"Global learning and research opportunities",
		],

		// How It Works Section
		howItWorksTitle: "How to Get Information",
		howItWorksSubtitle:
			"Follow simple steps to access academic collaboration information from VCC",
		step1: "Explore Website",
		step1Desc:
			"Find program and partner information on the main page and navigation.",
		step2: "Visit Program Page",
		step2Desc:
			"View details of available collaboration programs to choose from.",
		step3: "Consultation",
		step3Desc: "Contact us for further information and registration guidance.",
		step4: "Follow Process",
		step4Desc:
			"Complete requirements and follow the specified registration steps.",

		// Testimonials Section
		testimonialsTitle: "Student Testimonials",
		testimonialsSubtitle:
			"Success stories of students who have participated in international collaboration programs",
		testimonial1Name: "M. Naufal Arkaan - MAB 59",
		testimonial1Role: "Internship Program Delegate at Shizuoka Professional University of Agriculture, Japan",
		testimonial1Image: "/images/testimonials/arkaan.webp",
		testimonial1Text:
			"Being part of the traineeship program at Shizuoka Professional University of Agriculture (SPUA), Japan, for one semester was an extraordinary experience. Through the collaboration between IPB University and SPUA, I had the opportunity to hone international competencies in agribusiness and broaden my cross-cultural horizons directly in the Japanese academic environment. This program not only strengthened my adaptability but also provided a valuable global perspective for my future career development.",
		testimonial2Name: "Dzakiyyah Lainun Zain - MAB 60",
		testimonial2Role: "Student Exchange Delegate at Ilo Ilo Science and Technology University (ISAT U), Philippines",
		testimonial2Image: "/images/testimonials/dzakiyyah.webp",
		testimonial2Text:
			"The student exchange program at ISAT U, Philippines provided me with valuable insights into the agricultural and livestock systems in Leon. I learned a lot through hands-on practice in the field, visits to government agencies, and market research at the Leon Bagsakan Market. This experience was very effective in enhancing my global competence and cultural understanding in the field of agribusiness.",
		testimonial3Name: "Erina Lailani Safitri - TMP 59",
		testimonial3Role: "Research and Internship Delegate at Vietnam National University of Agriculture",
		testimonial3Image: "/images/testimonials/erina.webp",
		testimonial3Text:
			"Participating in the research and internship program at Vietnam National University of Agriculture (VNUA) for three months was a very valuable experience. I not only deepened my theoretical knowledge in international classes but also directly conducted independent research on Arabica coffee seedlings and interned at Phuc Sinh Coffee Corporation, Sơn La. This program gave me a deep understanding of the entire Vietnamese coffee value chain, from sustainable cultivation to international marketing strategies.",
		//about
		aboutTitle: "About Us",
		aboutSubtitle:
			"The Cooperation Commission of IPB Vocational School manages and develops strategic partnerships to support relevant and globally competitive vocational education.",
		aboutImageAlt: "Cooperation Commission - IPB Vocational School",
		aboutCardTitle: "Cooperation Commission",
		aboutCardSubtitle: "IPB Vocational School University",
		aboutRoleTitle: "Our Role",
		aboutRoleDesc:
			"We serve as a strategic bridge between IPB Vocational School and partners from industry, educational institutions, and government, both nationally and internationally.",
		aboutPoint1: "Manage cooperation initiatives and program implementation.",
		aboutPoint2: "Support internships, student exchange, and applied research.",
		aboutPoint3: "Support community service and international programs.",
		aboutCommitTitle: "Our Commitment",
		aboutCommitDesc:
			"We are committed to building sustainable partnerships to create excellent, adaptive, and globally competitive vocational education.",
		aboutCtaPrograms: "Explore Cooperation Programs",
		aboutCtaContact: "Contact Us",
		//programs
		programsPageTitle: "Programs",
		programsPageSubtitle:
			"Choose a destination country to explore cooperation programs and details.",

		programCountryVietnam: "Vietnam",
		programDescVietnam:
			"Educational cooperation and vocational training programs with partners in Vietnam.",

		programCountryThailand: "Thailand",
		programDescThailand:
			"Exchange opportunities, training, and academic collaboration with institutions in Thailand.",

		programCountryNewZealand: "New Zealand",
		programDescNewZealand:
			"International collaboration programs, short courses, and global competency development.",

		programCountryMalaysia: "Malaysia",
		programDescMalaysia:
			"Regional cooperation in vocational education and human resource development.",

		programCountryJapan: "Japan",
		programDescJapan:
			"Language training, internships, and preparation for study and career opportunities in Japan.",

		programCountryChina: "China",
		programDescChina:
			"Opportunities for educational cooperation, applied research, and academic exchange with partners in China.",

		// CTA Section
		ctaTitle: "Join the VCC Student Community",
		ctaSubtitle:
			"Realize your international academic experience alongside thousands of other students",
		contactUs: "Contact Us",

		// Footer
		footerQuickLinks: "Quick Links",
		footerPrograms: "Programs",
		footerCommission: "Cooperation Commission",
		footerUniversity: "IPB Vocational School",
		footerEmail: "Email: vcc@ipb.ac.id",
		footerPhone: "Phone: +62-xxx-xxxx-xxxx",
	},
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<Language>("id");

	const t = (key: string): string => {
		const value = translations[language][key as keyof (typeof translations)[Language]];
		if (typeof value === 'string') {
			return value;
		}
		return key;
	};

	const tArray = (key: string): string[] => {
		return (
			(translations[language][
				key as keyof (typeof translations)[Language]
			] as string[]) || []
		);
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
