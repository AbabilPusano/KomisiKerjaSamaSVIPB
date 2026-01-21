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
							Halaman  dalam Pengembangan
						</h1>
						<p className="text-slate-700 text-lg max-w-2xl mx-auto">
							Konten pada halaman ini sedang dalam proses pengembangan.
							Pembaruan informasi akan dilakukan secara bertahap.
						</p>
					</div>
					{/* buat card underconstruction setelah comment ini */}
					{/* Under Construction Card */}
					<div className="flex justify-center">
						<div className="w-full max-w-xl bg-slate-50 border border-slate-200 rounded-2xl shadow-sm p-8 text-center">
							<div className="flex justify-center mb-4">
								<div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-3xl">
									🚧
								</div>
							</div>
							<h2 className="text-2xl font-bold text-slate-900 mb-2">
								Halaman Dalam Pengembangan
							</h2>
							<p className="text-slate-600">
								Halaman ini masih dalam tahap pengembangan. Informasi program
								ini akan segera tersedia. Mohon menunggu update selanjutnya.
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
