"use client";

import { Header, Footer } from "@/app/components";
import { useLanguage } from "@/app/vcc/components/LanguageProvider";
import Image from "next/image";
import Link from "next/link";

/* =======================
	 DATA PROGRAM (NEGARA)
======================= */
type ProgramCard = {
	key: string;
	titleKey: string;
	descKey: string;
	imageSrc: string;
};

const PROGRAMS: ProgramCard[] = [
	{
		key: "japan",
		titleKey: "programCountryJapan",
		descKey: "programDescJapan",
		imageSrc: "/flags/japan.png",
	},
	{
		key: "china",
		titleKey: "programCountryChina",
		descKey: "programDescChina",
		imageSrc: "/flags/china.png",
	},
	{
		key: "malaysia",
		titleKey: "programCountryMalaysia",
		descKey: "programDescMalaysia",
		imageSrc: "/flags/malaysia.png",
	},
	{
		key: "newzealand",
		titleKey: "programCountryNewZealand",
		descKey: "programDescNewZealand",
		imageSrc: "/flags/newzealand.png",
	},
	{
		key: "vietnam",
		titleKey: "programCountryVietnam",
		descKey: "programDescVietnam",
		imageSrc: "/flags/vietnam.png",
	},
	{
		key: "thailand",
		titleKey: "programCountryThailand",
		descKey: "programDescThailand",
		imageSrc: "/flags/thailand.png",
	},
];

/* =======================
	 CARD COMPONENT
======================= */
function ProgramCardItem({
	title,
	description,
	imageSrc,
	buttonText,
	href,
}: {
	title: string;
	description: string;
	imageSrc: string;
	buttonText: string;
	href: string;
}) {
	return (
		<div className="rounded-3xl p-3 shadow-lg bg-gradient-to-br from-slate-100 to-slate-200">
			<div className="rounded-2xl overflow-hidden bg-white shadow-inner">
				{/* TOP – NEGARA */}
				<div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-10 relative overflow-hidden">
					{/* Decorative background pattern */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
						<div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
					</div>

					<div className="flex items-center gap-5 relative z-10">
						{/* Bendera dengan border dan shadow */}
						<div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white shadow-lg shrink-0 ring-4 ring-white/30">
							<Image src={imageSrc} alt={title} fill className="object-cover" />
						</div>

						{/* Nama Negara - LEBIH BESAR & BOLD */}
						<div className="flex-1 min-w-0">
							<h3 className="text-white font-extrabold text-3xl leading-tight break-words drop-shadow-md tracking-tight">
								{title}
							</h3>
						</div>
					</div>
				</div>

				{/* BOTTOM – KETERANGAN */}
				<div className="bg-gradient-to-b from-white to-slate-50 px-6 py-8 flex flex-col min-h-[210px]">
					<p className="text-slate-600 leading-relaxed flex-1 text-base">
						{description}
					</p>

					<Link
						href={href}
						className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 py-3.5 text-base font-semibold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
					>
						{buttonText}
					</Link>
				</div>
			</div>
		</div>
	);
}

/* =======================
	 PAGE
======================= */
export default function ProgramsPage() {
	const { t } = useLanguage();

	return (
		<div className="min-h-screen bg-white">
			<Header />
			<section className="py-14 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<h1 className="text-5xl font-extrabold text-slate-900 text-center mb-4">
						{t("programsPageTitle")}
					</h1>
					<p className="text-slate-700 text-lg max-w-2xl mx-auto">
						{t("programsPageSubtitle")}
					</p>

					{/* Cards */}
					<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{PROGRAMS.map((program) => (
							<ProgramCardItem
								key={program.key}
								title={t(program.titleKey)}
								description={t(program.descKey)}
								imageSrc={program.imageSrc}
								buttonText={t("learnMore")}
								href={`/programs/${program.key}`} // <--- ini arahinnya
							/>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
