"use client";

import { Header, Footer } from "@/app/components";
import Link from "next/link";
import Image from "next/image";

export default function JapanProgramsPage() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<main className="py-14 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
							Program Malaysia
						</h1>
						<p className="text-slate-700 text-lg max-w-2xl mx-auto">
							Komisi Kerja Sama SV IPB menyediakan berbagai program untuk
							mendukung mahasiswa/i SV IPB di Malaysia
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch">
						<div className="rounded-3xl p-3 shadow-lg bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
							<div className="rounded-2xl overflow-hidden bg-white shadow-inner h-full flex flex-col">
								{/* Header */}
								<div className="bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-8 relative overflow-hidden min-h-[120px] flex items-center">
									<div className="absolute inset-0 opacity-10">
										<div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
										<div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
									</div>
									<h2 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight relative z-10 drop-shadow-md">
										Kolej Komuniti Jerantut
									</h2>
								</div>

								{/* Image */}
								<div className="relative w-full h-48 bg-slate-200">
									<Image
										// src="/images/programs/pekerja-migran-aceh.webp"
										src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000"
										alt="Pekerja Migran Aceh"
										fill
										className="object-cover"
									/>
								</div>

								{/* Content */}
								<div className="bg-gradient-to-b from-white to-slate-50 p-5 sm:px-6 sm:py-8 flex flex-col flex-1">
									<p className="text-slate-600 leading-relaxed flex-1 text-base mb-6">
										Detail program ini masih dalam tahap pengembangan. Informasi
										lengkap mengenai skema pendampingan, konsultasi, serta
										bentuk dukungan yang diberikan akan segera diumumkan.
										Silakan menunggu pembaruan selanjutnya.
									</p>

									<Link
										href="/programs/onprogres"
										className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 py-3.5 text-base font-semibold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
									>
										Selengkapnya
									</Link>
								</div>
							</div>
						</div>

						{/* Card 2: PPBJ */}
						<div className="rounded-3xl p-3 shadow-lg bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
							<div className="rounded-2xl overflow-hidden bg-white shadow-inner h-full flex flex-col">
								{/* Header */}
								<div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-8 relative overflow-hidden min-h-[120px] flex items-center">
									<div className="absolute inset-0 opacity-10">
										<div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
										<div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
									</div>
									<h2 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight relative z-10 drop-shadow-md">
										PTSN Malaysia
									</h2>
								</div>

								{/* Image */}
								<div className="relative w-full h-48 bg-slate-200">
									<Image
										src="/images/programs/ppbj.webp"
										alt="PPBJ"
										fill
										className="object-cover"
									/>
								</div>

								{/* Content */}
								<div className="bg-gradient-to-b from-white to-slate-50 p-5 sm:px-6 sm:py-8 flex flex-col flex-1">
									<p className="text-slate-600 leading-relaxed flex-1 text-base mb-6">
										Program Kerja Sama Sekolah Vokasi IPB University-PTSN
										Malaysia merupakan kolaborasi internasional di bidang
										pendidikan vokasi yang berfokus pada pengembangan pendidikan
										TVET melalui kegiatan akademik dan non-akademik, termasuk
										penyelenggaraan perlombaan internasional I-Sinergie sebagai
										wadah peningkatan inovasi, kreativitas, dan daya saing
										mahasiswa di tingkat global.
									</p>

									<Link
										href="/programs/onprogres"
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
