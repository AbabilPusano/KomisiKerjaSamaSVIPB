import React from "react";
import { BookOpen, Award, Building2 } from "lucide-react";

export default function AboutPage() {
	const missionPoints = [
		"Menyediakan program pelatihan bahasa Jepang berkualitas tinggi",
		"Mempersiapkan peserta untuk bekerja di Jepang dengan standar profesional",
		"Memberikan dukungan komprehensif dari pendaftaran hingga penempatan kerja",
		"Membangun jembatan budaya antara Indonesia dan Jepang"
	];

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="px-4 py-16 max-w-5xl mx-auto">
				{/* Header */}
				<div className="mb-16">
					<h1 className="text-5xl font-bold text-gray-900 mb-4">
						Tentang Kami
					</h1>
					<div className="w-24 h-1 bg-blue-600 mb-6"></div>
					<p className="text-xl text-gray-600 leading-relaxed">
						Program Pelatihan Bahasa Jepang yang berkomitmen untuk mengembangkan SDM Indonesia berkualitas tinggi
					</p>
				</div>

				{/* Vision */}
				<section className="mb-16">
					<div className="flex items-start gap-4 mb-6">
						<div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
							<BookOpen className="w-6 h-6 text-white" />
						</div>
						<h2 className="text-3xl font-bold text-gray-900 mt-2">
							Visi Kami
						</h2>
					</div>
					<div className="pl-16">
						<p className="text-lg text-gray-700 leading-relaxed">
							Menjadi lembaga pelatihan bahasa Jepang terdepan yang menghasilkan tenaga kerja terampil dan profesional, siap berkontribusi di pasar kerja global, khususnya Jepang.
						</p>
					</div>
				</section>

				{/* Mission */}
				<section className="mb-16 bg-white border-l-4 border-blue-600 p-8 shadow-sm">
					<div className="flex items-start gap-4 mb-6">
						<div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
							<Award className="w-6 h-6 text-white" />
						</div>
						<h2 className="text-3xl font-bold text-gray-900 mt-2">
							Misi Kami
						</h2>
					</div>
					<div className="pl-16">
						<ul className="space-y-4">
							{missionPoints.map((item, index) => (
								<li key={index} className="flex items-start gap-3">
									<span className="text-blue-600 font-bold text-lg flex-shrink-0 mt-1">
										{index + 1}.
									</span>
									<span className="text-lg text-gray-700 leading-relaxed">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Role */}
				<section className="mb-16">
					<div className="flex items-start gap-4 mb-6">
						<div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
							<Building2 className="w-6 h-6 text-white" />
						</div>
						<h2 className="text-3xl font-bold text-gray-900 mt-2">
							Peran Kami
						</h2>
					</div>
					<div className="pl-16">
						<p className="text-lg text-gray-700 leading-relaxed">
							Kami berperan sebagai fasilitator utama dalam mempersiapkan calon pekerja migran Indonesia untuk sukses di Jepang. Melalui program pelatihan intensif, kami memastikan setiap peserta tidak hanya menguasai bahasa Jepang, tetapi juga memahami budaya kerja dan nilai-nilai profesionalisme yang dijunjung tinggi di Jepang.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}
