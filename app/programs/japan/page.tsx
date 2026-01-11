"use client";

import Navbar from "@/app/vcc/components/Navbar";
import Footer from "@/app/vcc/components/Footer";
import Link from "next/link";

export default function JapanProgramsPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main className="py-14 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<h1 className="text-5xl font-extrabold text-slate-900 mb-4">
							Program Jepang
						</h1>
						<p className="text-slate-700 text-lg max-w-2xl mx-auto">
							Komisi Kerja Sama SVIPB menyediakan berbagai program untuk mendukung pekerja migran Indonesia di Jepang
						</p>
					</div>

					{/* Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
						{/* Card 1: Pekerja Migran Aceh */}
						<div className="rounded-3xl p-3 shadow-lg bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							<div className="rounded-2xl overflow-hidden bg-white shadow-inner">
								{/* Header */}
								<div className="bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-8 relative overflow-hidden">
									<div className="absolute inset-0 opacity-10">
										<div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
										<div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
									</div>
									<h2 className="text-white font-extrabold text-3xl leading-tight relative z-10 drop-shadow-md">
										Pekerja Migran Aceh
									</h2>
								</div>

								{/* Content */}
								<div className="bg-gradient-to-b from-white to-slate-50 px-6 py-8 flex flex-col min-h-[280px]">
									<p className="text-slate-600 leading-relaxed flex-1 text-base mb-6">
										Program khusus untuk pekerja migran dari Aceh yang bekerja di Jepang.
										Kami menyediakan layanan pendampingan, konsultasi, dan dukungan untuk
										memastikan kesejahteraan dan perlindungan hak-hak pekerja migran Aceh
										selama bekerja di Jepang.
									</p>

									<Link
										href="/pekerjamigranaceh"
										className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 py-3.5 text-base font-semibold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
									>
										Selengkapnya
									</Link>
								</div>
							</div>
						</div>

						{/* Card 2: PPBJ */}
						<div className="rounded-3xl p-3 shadow-lg bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							<div className="rounded-2xl overflow-hidden bg-white shadow-inner">
								{/* Header */}
								<div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-8 relative overflow-hidden">
									<div className="absolute inset-0 opacity-10">
										<div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
										<div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
									</div>
									<h2 className="text-white font-extrabold text-3xl leading-tight relative z-10 drop-shadow-md">
										PPBJ
									</h2>
								</div>

								{/* Content */}
								<div className="bg-gradient-to-b from-white to-slate-50 px-6 py-8 flex flex-col min-h-[280px]">
									<p className="text-slate-600 leading-relaxed flex-1 text-base mb-6">
										Program Penempatan Pekerja Berbasis Jepang (PPBJ) adalah program
										resmi yang memfasilitasi penempatan tenaga kerja Indonesia ke Jepang.
										Program ini mencakup pelatihan, sertifikasi, dan proses penempatan
										yang sesuai dengan standar pemerintah Jepang.
									</p>

									<Link
										href="/ppbj"
										className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 py-3.5 text-base font-semibold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
									>
										Selengkapnya
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
