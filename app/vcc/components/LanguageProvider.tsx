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
		testimonial1Name: "Budi Santoso",
		testimonial1Role: "Mahasiswa Pertukaran di Jepang",
		testimonial1Text:
			"Informasi dari VCC sangat membantu saya memilih program pertukaran yang tepat. Proses pendaftaran pun jelas dan terstruktur.",
		testimonial2Name: "Siti Aminah",
		testimonial2Role: "Peserta Magang di Thailand",
		testimonial2Text:
			"VCC memberikan persiapan yang matang sebelum saya berangkat magang. Pengalaman ini sangat berharga untuk karier saya.",
		testimonial3Name: "Ahmad Kurnia",
		testimonial3Role: "Peserta Program Joint Degree",
		testimonial3Text:
			"Berkat VCC, saya bisa mengikuti program joint degree dan mendapatkan dua gelar. Ini membuka banyak peluang baru.",

		//about
		aboutTitle: "Tentang Kami",
		aboutSubtitle:
			"Komisi Kerja Sama Sekolah Vokasi IPB University mengelola dan mengembangkan kemitraan strategis untuk mendukung pendidikan vokasi yang relevan dan berdaya saing.",
		aboutImageAlt: "Komisi Kerja Sama Sekolah Vokasi IPB",
		aboutCardTitle: "Komisi Kerja Sama",
		aboutCardSubtitle: "Sekolah Vokasi IPB University",
		aboutRoleTitle: "Peran Komisi Kerja Sama",
		aboutRoleDesc:
			"Komisi ini menjadi penghubung antara Sekolah Vokasi IPB University dengan mitra industri, institusi pendidikan, dan lembaga pemerintah—baik nasional maupun internasional.",
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
		testimonial1Name: "Budi Santoso",
		testimonial1Role: "Exchange Student in Japan",
		testimonial1Text:
			"Information from VCC was very helpful in choosing the right exchange program. The registration process was also clear and structured.",
		testimonial2Name: "Siti Aminah",
		testimonial2Role: "Internship Participant in Thailand",
		testimonial2Text:
			"VCC provided mature preparation before I departed for my internship. This experience was very valuable for my career.",
		testimonial3Name: "Ahmad Kurnia",
		testimonial3Role: "Joint Degree Program Participant",
		testimonial3Text:
			"Thanks to VCC, I was able to participate in the joint degree program and earn two degrees. This has opened many new opportunities.",
		//about
		aboutTitle: "About Us",
		aboutSubtitle:
			"The Cooperation Commission of IPB Vocational School manages and develops strategic partnerships to support relevant and globally competitive vocational education.",
		aboutImageAlt: "Cooperation Commission - IPB Vocational School",
		aboutCardTitle: "Cooperation Commission",
		aboutCardSubtitle: "IPB Vocational School University",
		aboutRoleTitle: "Our Role",
		aboutRoleDesc:
			"We serve as a strategic bridge between IPB Vocational School and partners from industry, educational institutions, and government—both nationally and internationally.",
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
