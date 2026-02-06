"use client";

import { Header, Footer } from "@/app/components";
import { useLanguage } from "@/app/vcc/components/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { Search, Filter, Calendar, MapPin, ChevronRight, BookOpen } from "lucide-react";

/* =======================
	 DATA PROGRAM (NEGARA) - EXISTING
======================= */
type ProgramCard = {
	key: string;
	titleKey: string;
	descKey: string;
	imageSrc: string;
};

const PROGRAMS_CATEGORIES: ProgramCard[] = [
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

const STUDY_PROGRAMS = [
	"Program 1", "Program 2", "Program 3", "Program 4", "Program 5",
	"Program 6", "Program 7", "Program 8", "Program 9", "Program 10",
	"Program 11", "Program 12", "Program 13", "Program 14", "Program 15",
	"Program 16", "Program 17"
];

/* =======================
	 CARD COMPONENT - EXISTING
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
							<h3 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight break-words drop-shadow-md tracking-tight">
								{title}
							</h3>
						</div>
					</div>
				</div>

				{/* BOTTOM – KETERANGAN */}
				<div className="bg-gradient-to-b from-white to-slate-50 p-5 sm:px-6 sm:py-8 flex flex-col min-h-[210px]">
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

// Interfaces
interface Country {
	id: string;
	name: string;
}

interface Program {
	id: string;
	title: string;
	thumbnail: string;
	shortDescription: string;
	country: Country;
	createdAt: string;
	eligibleStudyPrograms: string[];
	mainColor?: string; // New field
}

/* =======================
	 PAGE
======================= */
export default function ProgramsPage() {
	const { t } = useLanguage();

	// New State for Filtering
	const [allPrograms, setAllPrograms] = useState<Program[]>([]);
	const [countries, setCountries] = useState<Country[]>([]);
	const [loading, setLoading] = useState(true);

	const [keyword, setKeyword] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("all");
	const [selectedStudy, setSelectedStudy] = useState("all");
	const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>("newest");

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				// Fetch Countries
				const countryRes = await fetch("https://vccbe.vercel.app/api/countries?limit=100");
				const countryData = await countryRes.json();
				if (countryData.success) setCountries(countryData.data);

				// Fetch Programs (Fetch sufficient amount to filter client-side since API might not support all filters)
				const programRes = await fetch("https://vccbe.vercel.app/api/programs?limit=100&isPublished=true");
				const programData = await programRes.json();
				if (programData.success) setAllPrograms(programData.data);
			} catch (error) {
				console.error("Failed to fetch data", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// Filter Logic
	const displayedPrograms = useMemo(() => {
		let filtered = [...allPrograms];

		// 1. Keyword
		if (keyword) {
			const lowerKey = keyword.toLowerCase();
			filtered = filtered.filter(p =>
				p.title.toLowerCase().includes(lowerKey) ||
				p.shortDescription.toLowerCase().includes(lowerKey)
			);
		}

		// 2. Country
		if (selectedCountry !== "all") {
			filtered = filtered.filter(p => p.country.id === selectedCountry);
		}

		// 3. Study Program
		if (selectedStudy !== "all") {
			filtered = filtered.filter(p =>
				p.eligibleStudyPrograms?.includes(selectedStudy)
			);
		}

		// 4. Sorting
		filtered.sort((a, b) => {
			const dateA = new Date(a.createdAt).getTime();
			const dateB = new Date(b.createdAt).getTime();
			return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
		});

		// 5. Limit to 5
		return filtered.slice(0, 5);
	}, [allPrograms, keyword, selectedCountry, selectedStudy, sortOrder]);


	return (
		<div className="min-h-screen bg-slate-50">
			<Header />

			{/* HER0 / CARDS SECTION */}
			<section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 text-center mb-4">
						{t("programsPageTitle")}
					</h1>
					<p className="text-slate-700 text-lg max-w-2xl mx-auto text-center">
						{t("programsPageSubtitle")}
					</p>

					{/* Category Cards */}
					<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{PROGRAMS_CATEGORIES.map((program) => (
							<ProgramCardItem
								key={program.key}
								title={t(program.titleKey)}
								description={t(program.descKey)}
								imageSrc={program.imageSrc}
								buttonText={t("learnMore")}
								href={`/programs/${program.key}`}
							/>
						))}
					</div>
				</div>
			</section>

			{/* NEW SECTION: SEARCH & FILTER */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold text-slate-800">Available Programs</h2>
						<p className="text-slate-600 mt-2">Find the opportunity that suits you best</p>
					</div>

					{/* TOP: Search Bar */}
					<div className="relative max-w-3xl mx-auto mb-14">
						<div className="relative transform transition-transform hover:-translate-y-1 duration-300">
							<Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
							<input
								type="text"
								placeholder="Search program name or description..."
								className="w-full pl-16 pr-8 py-5 rounded-full border-0 shadow-[0_10px_40px_rgba(0,0,0,0.08)] focus:shadow-[0_15px_50px_rgba(0,0,0,0.12)] outline-none transition-all text-slate-700 text-lg font-medium placeholder:text-slate-400"
								value={keyword}
								onChange={(e) => setKeyword(e.target.value)}
							/>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						{/* LEFT: Filter Sidebar */}
						<aside className="w-full lg:w-[320px] shrink-0 space-y-6">
							<div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] sticky top-6 border border-slate-100">
								<h3 className="flex items-center gap-2 mb-6 text-slate-800 text-2xl font-bold">
									<span className="text-2xl">🎯</span> Filters
								</h3>

								{/* Filter: Country */}
								<div className="mb-6">
									<label className="block text-sm font-bold text-slate-600 mb-2">Country</label>
									<div className="relative">
										<select
											className="w-full p-3 pr-10 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-medium focus:ring-0 focus:border-blue-500 hover:border-blue-300 transition-colors cursor-pointer appearance-none outline-none"
											value={selectedCountry}
											onChange={(e) => setSelectedCountry(e.target.value)}
										>
											<option value="all">All Countries</option>
											{countries.map(c => (
												<option key={c.id} value={c.id}>{c.name}</option>
											))}
										</select>
										<ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rotate-90 pointer-events-none" />
									</div>
								</div>

								{/* Filter: Study Program */}
								<div className="mb-6">
									<label className="block text-sm font-bold text-slate-600 mb-2">Study Program</label>
									<div className="relative">
										<select
											className="w-full p-3 pr-10 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-medium focus:ring-0 focus:border-blue-500 hover:border-blue-300 transition-colors cursor-pointer appearance-none outline-none"
											value={selectedStudy}
											onChange={(e) => setSelectedStudy(e.target.value)}
										>
											<option value="all">All Majors</option>
											{STUDY_PROGRAMS.map(s => (
												<option key={s} value={s}>{s}</option>
											))}
										</select>
										<ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rotate-90 pointer-events-none" />
									</div>
								</div>

								{/* Sort Order */}
								<div>
									<label className="block text-sm font-bold text-slate-600 mb-2">Sort By</label>
									<div className="flex flex-col gap-2">
										<label className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-colors ${sortOrder === 'newest' ? 'bg-slate-50' : 'hover:bg-slate-50'}`}>
											<input
												type="radio"
												name="sort"
												value="newest"
												checked={sortOrder === "newest"}
												onChange={() => setSortOrder("newest")}
												className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
											/>
											<span className="text-slate-700 font-medium">Newest First</span>
										</label>
										<label className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-colors ${sortOrder === 'oldest' ? 'bg-slate-50' : 'hover:bg-slate-50'}`}>
											<input
												type="radio"
												name="sort"
												value="oldest"
												checked={sortOrder === "oldest"}
												onChange={() => setSortOrder("oldest")}
												className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
											/>
											<span className="text-slate-700 font-medium">Oldest First</span>
										</label>
									</div>
								</div>
							</div>
						</aside>

						{/* RIGHT: Programs List */}
						<div className="w-full lg:w-3/4">
							{loading ? (
								<div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
									<p className="text-slate-500 animate-pulse">Loading programs...</p>
								</div>
							) : displayedPrograms.length === 0 ? (
								<div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
									<p className="text-slate-500">No programs found matching your filters.</p>
									<button
										className="mt-4 text-blue-600 font-medium hover:underline"
										onClick={() => {
											setKeyword("");
											setSelectedCountry("all");
											setSelectedStudy("all");
										}}
									>
										Clear all filters
									</button>
								</div>
							) : (
								<div className="flex flex-col gap-6">
									{displayedPrograms.map(program => (
										<div key={program.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 flex flex-col md:flex-row">
											{/* LEFT: Image Section */}
											<div className="relative w-full md:w-[320px] h-64 md:h-auto shrink-0 overflow-hidden">
												<Image
													src={program.thumbnail}
													alt={program.title}
													fill
													className="object-cover group-hover:scale-105 transition-transform duration-500"
												/>

												{/* Overlay Gradient for Text Contrast (Optional, mostly for visual styling) */}
												<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

												{/* Location Badge */}
												<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-blue-700 shadow-sm flex items-center gap-1.5 z-10">
													<MapPin className="w-3.5 h-3.5 text-red-500" />
													{program.country.name}
												</div>
											</div>

											{/* RIGHT: Content Section */}
											<div className="p-6 md:p-8 flex flex-col flex-1">
												<div className="flex flex-wrap items-center justify-between gap-4 mb-4">
													<div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-bold">
														<Calendar className="w-3.5 h-3.5" />
														{new Date(program.createdAt).toLocaleDateString()}
													</div>
												</div>

												<h3 className="text-2xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
													<Link href={`#`} className="hover:underline">
														{program.title}
													</Link>
												</h3>

												<p className="text-slate-600 text-base leading-relaxed line-clamp-2 md:line-clamp-3 mb-4 flex-1">
													{program.shortDescription}
												</p>

												{/* Study Programs Tags */}
												{program.eligibleStudyPrograms && program.eligibleStudyPrograms.length > 0 && (
													<div className="flex flex-wrap gap-2 mb-6">
														{program.eligibleStudyPrograms.slice(0, 5).map((sp, idx) => (
															<span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
																{sp}
															</span>
														))}
														{program.eligibleStudyPrograms.length > 5 && (
															<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 text-xs font-medium border border-slate-200">
																+{program.eligibleStudyPrograms.length - 5}
															</span>
														)}
													</div>
												)}

												{/* Buttons */}
												<div className="flex flex-wrap gap-3 mt-auto pt-5 border-t border-slate-50">
													<Link
														href={`#`}
														className="flex-1 min-w-[140px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm text-center"
													>
														Learn More
													</Link>
													{/* <button className="flex-1 min-w-[140px] bg-white border-2 border-slate-200 hover:border-blue-200 text-slate-600 hover:bg-blue-50 hover:text-blue-700 font-semibold py-3.5 px-6 rounded-xl transition-all text-sm">
														Save
													</button> */}
												</div>
											</div>
										</div>
									))}
								</div>
							)}

							{!loading && displayedPrograms.length > 0 && (
								<div className="mt-8 text-center">
									<p className="text-sm text-slate-500">Showing top {displayedPrograms.length} results</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
