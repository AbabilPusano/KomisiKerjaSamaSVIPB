"use client";

import Link from "next/link";
import { useState } from "react";
import { Header, Footer } from "@/app/components";

export default function PPBJPage() {
	const [activeTab, setActiveTab] = useState<"intensif" | "reguler" | "jlpt">("reguler");

	// Scroll to programs section
	const scrollToPrograms = () => {
		const programsSection = document.getElementById("programs-section");
		if (programsSection) {
			programsSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Scroll to CTA section
	const scrollToCTA = () => {
		const ctaSection = document.getElementById("cta-section");
		if (ctaSection) {
			ctaSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<Header />
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
				{/* Hero Section */}
				<section className="container mx-auto px-4 py-20 lg:py-32">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
								Raih Masa Depan Akademik dan Karier Profesional di Jepang
							</h1>
							<p className="text-lg text-gray-600">
								Program Pelatihan Bahasa Jepang resmi Sekolah Vokasi IPB. Kurikulum standar mitra Jepang, pengajar Native Speaker, dan peluang beasiswa penuh.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<button
									onClick={scrollToPrograms}
									className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
								>
									Lihat Pilihan Program
								</button>
								<button
									onClick={scrollToCTA}
									className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all text-center"
								>
									Daftar Sekarang
								</button>
							</div>
						</div>

						{/* Hero Image */}
						<div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
							<img
								src="images/chuo/rapat.webp"
								alt="PPBJ SV IPB"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section className="bg-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-5xl mx-auto">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
								Deskripsi Program PPBJ
							</h2>
							<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
								<p>
									Program Pelatihan Bahasa Jepang (PPBJ) pada awalnya dibentuk sebagai program pendukung pelaksanaan program 3+2, hasil kerja sama Sekolah Vokasi IPB dengan Chuo Computer and Communication College, Jepang. Oleh karena itu, kurikulum dan arah pembelajaran PPBJ sejak awal disusun untuk menyesuaikan kebutuhan akademik dan tuntutan pembelajaran pada perguruan tinggi mitra tersebut.
								</p>
								<p>
									Seiring berjalannya waktu dan setelah satu tahun pelaksanaan, PPBJ berkembang menjadi program pelatihan bahasa Jepang yang lebih luas dan dikenal oleh berbagai kalangan. Saat ini, peserta PPBJ tidak hanya berasal dari calon peserta program 3+2, tetapi juga dari masyarakat umum dengan beragam kebutuhan, baik untuk melanjutkan studi, bekerja, maupun meningkatkan kompetensi bahasa Jepang secara profesional.
								</p>
								<p>
									Pelatihan bahasa Jepang dilaksanakan selama <strong>6 (enam) bulan</strong> dengan total durasi pembelajaran sebanyak <strong>400 jam</strong>. Kegiatan pembelajaran mencakup tatap muka secara daring dan luring, latihan komunikasi lisan dan tulisan secara terbimbing dan mandiri, Ujian Simulasi Kemahiran Bahasa Jepang (UKBJ), bimbingan dan konseling, serta evaluasi tengah dan akhir pelatihan.
								</p>
								<p>
									Capaian pembelajaran peserta difokuskan pada kemampuan memahami kalimat dan ungkapan yang berkaitan dengan informasi dasar diri, menanggapi pertukaran informasi mengenai aktivitas sehari-hari, serta menjelaskan latar belakang diri dan kebutuhan komunikasi secara langsung. Selain penguasaan bahasa, peserta juga dibekali dengan pengetahuan sosial budaya Jepang, etos belajar dan bekerja, serta pembiasaan belajar mandiri agar siap mengikuti pendidikan dan/atau bekerja di Jepang.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Main Programs Section */}
				<section id="programs-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
								Program Kami
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Pilihan program yang dirancang untuk berbagai kebutuhan akademik dan profesional
							</p>
						</div>

						{/* Category 1: Program Pelatihan Bahasa Jepang */}
						<div className="mb-20">
							<div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
								<h3 className="text-3xl font-bold text-gray-900 mb-4">
									Program Pelatihan Bahasa Jepang
								</h3>
								<p className="text-gray-600 mb-8">
									Pilihan kelas bahasa untuk umum, mahasiswa, dan persiapan kerja
								</p>

								{/* Tabs */}
								<div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
									{/* <button
									onClick={() => setActiveTab("intensif")}
									className={`px-6 py-3 font-semibold transition-all ${activeTab === "intensif"
											? "text-blue-600 border-b-4 border-blue-600"
											: "text-gray-600 hover:text-blue-600"
										}`}
								>
									Program Intensif
								</button> */}
									<button
										onClick={() => setActiveTab("reguler")}
										className={`px-6 py-3 font-semibold transition-all ${activeTab === "reguler"
											? "text-blue-600 border-b-4 border-blue-600"
											: "text-gray-600 hover:text-blue-600"
											}`}
									>
										Program Reguler
									</button>
									{/* <button
									onClick={() => setActiveTab("jlpt")}
									className={`px-6 py-3 font-semibold transition-all ${activeTab === "jlpt"
											? "text-blue-600 border-b-4 border-blue-600"
											: "text-gray-600 hover:text-blue-600"
										}`}
								>
									Persiapan JLPT
								</button> */}
								</div>

								{/* Tab Content: Intensif */}
								{activeTab === "intensif" && (
									<div className="space-y-8">
										{/* Intensif 1 */}
										<div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												Bahasa Jepang Intensif 1
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Berkomunikasi dalam Bahasa Jepang tingkat kemahiran CEFR A2B1, Lulus JLPT N4
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 6 bulan (400 Jam) | <strong>Kuota:</strong> 15
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> Irodori A1, A2-1, A2-2; JLPT Taisaku N5 dan N4; Marugoto A2B1
													</p>
													<p className="text-2xl font-bold text-blue-600 mt-4">
														Rp8.000.000 <span className="text-sm text-gray-600">(+Pendaftaran Rp250.000)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Latihan berkomunikasi dengan topik kehidupan sehari-hari secara mendalam
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Diskusi tentang etos kerja dan budaya Jepang praktis
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Latihan menyelesaikan soal-soal JLPT N5 dan N4
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Peluang mengikuti joint degree di Chuo College 100%
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Peluang mendapat beasiswa Nikkei 100%
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Huruf Hiragana & Katakana, 300 Kanji, 1500 buah Kosakata
														</li>
													</ul>
												</div>
											</div>
										</div>

										{/* Intensif 2 */}
										<div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												Bahasa Jepang Intensif 2
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Berkomunikasi dalam Bahasa Jepang tingkat kemahiran CEFR A2B1, Lulus JLPT N4
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 6 bulan (450 Jam) | <strong>Kuota:</strong> 15
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> MNN 1 dan 2; Marugoto A1, A2-1, A2-2; JLPT Taisaku N5 dan N4; Langoal
													</p>
													<p className="text-2xl font-bold text-blue-600 mt-4">
														Rp8.000.000 <span className="text-sm text-gray-600">(+Pendaftaran Rp250.000)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Latihan berkomunikasi dengan topik kehidupan sehari-hari secara mendalam
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Diskusi tentang etos kerja dan budaya Jepang praktis
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Latihan menyelesaikan soal-soal JLPT N5 dan N4
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Peluang mengikuti joint degree di Chuo College 100%
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Peluang mendapat beasiswa Nikkei berdasarkan kuota
														</li>
														<li className="flex items-start">
															<span className="text-blue-600 mr-2">✓</span>
															Huruf Hiragana & Katakana, 300 Kanji, 1500 buah Kosakata
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								)}

								{/* Tab Content: Reguler */}
								{activeTab === "reguler" && (
									<div className="space-y-8">
										{/* Pemula (A1) */}
										<div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												Pemula (A1)
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Berkomunikasi tingkat CEFR A1, JLPT N5
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 5 bulan (150 Jam) | <strong>Kuota:</strong> 15
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> MNN 1 (1-16), Marugoto A1 (1-18), JLPT Taisaku N5, Langoal (100 Kanji)
													</p>
													<p className="text-2xl font-bold text-green-600 mt-4">
														Rp3.500.000 <span className="text-sm text-gray-600">(+Pendaftaran Rp250.000)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Latihan komunikasi topik sehari-hari
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Diskusi etos kerja & budaya
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Latihan soal JLPT N5
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Peluang Joint Degree Chuo & Beasiswa Nikkei (Kuota)
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Hiragana/Katakana, 100 Kanji, 600 Kosakata
														</li>
													</ul>
												</div>
											</div>
										</div>

										{/* Dasar 1 (A2-1) */}
										<div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												Dasar 1 (A2-1)
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Berkomunikasi tingkat CEFR A2-1, JLPT N5 menuju N4
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 5 bulan (150 jam) | <strong>Kuota:</strong> 15
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> MNN 1 (16-30), Marugoto A2-1 (1-18), JLPT Taisaku N5, Langoal (98 Kanji + 100 Kanji N4)
													</p>
													<p className="text-2xl font-bold text-green-600 mt-4">
														Rp4.000.000 <span className="text-sm text-gray-600">(+Pendaftaran Rp250.000)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Komunikasi sehari-hari lebih mendalam
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Diskusi etos kerja & budaya
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Latihan soal JLPT N5 & N4
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Peluang Joint Degree Chuo & Beasiswa Nikkei (Kuota)
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Hiragana/Katakana, 200 Kanji, 1000 Kosakata
														</li>
													</ul>
												</div>
											</div>
										</div>

										{/* Dasar 2 (A2-2) */}
										<div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												Dasar 2 (A2-2)
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Berkomunikasi tingkat CEFR A2-2, JLPT N4
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 5 bulan (150 jam) | <strong>Kuota:</strong> 15
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> MNN 1 (30-50), Marugoto A2-2 (1-18), JLPT Taisaku N4, Langoal (209 Kanji N4)
													</p>
													<p className="text-2xl font-bold text-green-600 mt-4">
														Rp4.500.000 <span className="text-sm text-gray-600">(+Pendaftaran Rp250.000)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Komunikasi sehari-hari mendalam & mendetail
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Diskusi etos kerja & budaya
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Latihan soal JLPT dan N4
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Peluang Joint Degree Chuo & Beasiswa Nikkei (Kuota)
														</li>
														<li className="flex items-start">
															<span className="text-green-600 mr-2">✓</span>
															Hiragana/Katakana, 300 Kanji, 1500 Kosakata
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								)}

								{/* Tab Content: JLPT */}
								{activeTab === "jlpt" && (
									<div className="space-y-8">
										{/* JLPT N5 */}
										<div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												JLPT N5
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Lulus JLPT N5/Nat-Test/Jtest, Menguasai strategi soal
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 4 bulan (80 jam) | <strong>Kuota:</strong> 10
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> Nihongo Soomatome N5, JLPT Taisaku N5, Gokaku Dekiru N5-N4
													</p>
													<p className="text-2xl font-bold text-purple-600 mt-4">
														Rp4.000.000 <span className="text-sm text-gray-600">(+Pendaftaran Rp250.000)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Memahami strategi penyelesaian N5
														</li>
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Lulus Sertifikat JLPT N5
														</li>
													</ul>
												</div>
											</div>
										</div>

										{/* JLPT N4 */}
										<div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												JLPT N4
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Lulus JLPT N4/NatTest/Jtest, Menguasai strategi soal
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 4 bulan (80 jam) | <strong>Kuota:</strong> 10
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> Nihongo Soomatome N4, JLPT Taisaku N4, Gokaku Dekiru N5-N4, Best Practice N4
													</p>
													<p className="text-2xl font-bold text-purple-600 mt-4">
														Rp4.000.000 <span className="text-sm text-gray-600">(+Pendaftaran Rp250.000)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Memahami strategi penyelesaian N4
														</li>
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Lulus Sertifikat JLPT N4
														</li>
													</ul>
												</div>
											</div>
										</div>

										{/* JLPT N3 */}
										<div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
											<h4 className="text-2xl font-bold text-gray-900 mb-4">
												JLPT N3
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<p className="text-gray-700 mb-2">
														<strong>Tujuan:</strong> Lulus JLPT N3/Nat-Test/Jtest, Menguasai strategi soal
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Durasi:</strong> 4 bulan (80 jam) | <strong>Kuota:</strong> 10
													</p>
													<p className="text-gray-700 mb-2">
														<strong>Materi:</strong> Nihongo Soomatome N3, JLPT Taisaku N3
													</p>
													<p className="text-2xl font-bold text-purple-600 mt-4">
														Rp4.000.000 <span className="text-sm text-gray-600">(+Pendaftaran Rp250.000)</span>
													</p>
												</div>
												<div>
													<p className="font-semibold text-gray-900 mb-2">Benefit:</p>
													<ul className="space-y-2 text-gray-700">
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Memahami strategi penyelesaian N3
														</li>
														<li className="flex items-start">
															<span className="text-purple-600 mr-2">✓</span>
															Lulus Sertifikat JLPT N3
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Category 2: Program Chuo 3+2 */}
						<div className="mb-20">
							<div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-8 lg:p-12 border-2 border-orange-100">
								<h3 className="text-3xl font-bold text-gray-900 mb-4">
									Program Chuo 3+2 (Joint Degree)
								</h3>
								<h4 className="text-xl font-semibold text-gray-800 mb-6">
									Kolaborasi Sekolah Vokasi IPB University dan Chuo Joho Institute Jepang: Skema 3+2 Siapkan Mahasiswa Bersaing di Pasar Kerja Global
								</h4>

								<div className="space-y-6 text-gray-700">
									<div>
										<h5 className="font-bold text-gray-900 mb-2">Deskripsi Program</h5>
										<p>
											Sekolah Vokasi IPB University membuka kesempatan bagi mahasiswa untuk mengikuti Program Internasional skema 3+2 hasil kolaborasi dengan Chuo Joho Institute Jepang. Program ini dirancang untuk membekali mahasiswa dengan kompetensi akademik, keterampilan kerja, serta pemahaman budaya dan etos kerja Jepang sebagai persiapan memasuki pasar kerja global.
										</p>
									</div>

									<div>
										<h5 className="font-bold text-gray-900 mb-2">Skema Program 3+2</h5>
										<p className="mb-3">Program ini merupakan pendidikan kolaboratif setara jenjang Diploma 4 (D4) dengan alur sebagai berikut:</p>
										<ul className="space-y-2">
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">•</span>
												<span>6 semester (3 tahun) studi di Sekolah Vokasi IPB University</span>
											</li>
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">•</span>
												<span>1 semester (6 bulan) program pembelajaran bahasa Jepang di Jepang</span>
											</li>
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">•</span>
												<span>Wisuda di IPB University</span>
											</li>
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">•</span>
												<span>4 semester (2 tahun) studi lanjutan di Chuo Joho Institute Jepang pada bidang Program Desain Bisnis</span>
											</li>
										</ul>
									</div>

									<div>
										<h5 className="font-bold text-gray-900 mb-2">Fasilitas dan Dukungan Beasiswa</h5>
										<p className="mb-3">Mahasiswa yang mengikuti program dan berangkat ke Jepang berkesempatan memperoleh dukungan pendanaan melalui skema sponsor/beasiswa, yaitu:</p>
										<ul className="space-y-2">
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">•</span>
												<span>Beasiswa Nikkei Newspaper</span>
											</li>
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">•</span>
												<span>Beasiswa Yomiuri Shimbun</span>
											</li>
										</ul>
										<p className="mt-3">
											Skema beasiswa ini ditujukan untuk mendukung pembiayaan selama masa studi dan persiapan kerja di Jepang, sekaligus memberikan kesempatan bagi mahasiswa untuk mendapatkan pengalaman internasional yang komprehensif.
										</p>
									</div>

									<div>
										<h5 className="font-bold text-gray-900 mb-2">Tujuan Program</h5>
										<ul className="space-y-2">
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">✓</span>
												<span>Mempersiapkan mahasiswa untuk melanjutkan studi di Jepang</span>
											</li>
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">✓</span>
												<span>Mempersiapkan mahasiswa untuk bekerja di Jepang</span>
											</li>
											<li className="flex items-start">
												<span className="text-orange-600 mr-2">✓</span>
												<span>Membekali mahasiswa dengan kompetensi dan keterampilan yang sesuai dengan kebutuhan pasar kerja Jepang</span>
											</li>
										</ul>
										<p className="mt-3">
											Melalui program ini, mahasiswa diharapkan tidak hanya unggul secara akademik, tetapi juga mampu beradaptasi dengan lingkungan kerja internasional serta memiliki daya saing global. Informasi lebih lanjut mengenai persyaratan, mekanisme seleksi, dan jadwal pendaftaran akan diumumkan melalui kanal resmi Sekolah Vokasi IPB University.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Category 3: Program SPUA */}
						{/* <div className="mb-20">
						<div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-8 lg:p-12 border-2 border-teal-100">
							<h3 className="text-3xl font-bold text-gray-900 mb-4">
								Program SPUA (Internship)
							</h3>
							<h4 className="text-xl font-semibold text-gray-800 mb-6">
								Kerja Sama Sekolah Vokasi IPB University dan Shizuoka Professional University of Agriculture Buka Peluang Internship Mahasiswa di Jepang
							</h4>

							<div className="space-y-6 text-gray-700">
								<div>
									<h5 className="font-bold text-gray-900 mb-2">Deskripsi & Kerjasama</h5>
									<p>
										Sekolah Vokasi IPB University terus memperluas kerja sama internasional melalui kemitraan dengan Shizuoka Professional University of Agriculture (SPUA), Jepang, yang membuka peluang program internship internasional bagi mahasiswa. Kerja sama ini bertujuan memberikan pengalaman praktik langsung di sektor pertanian modern Jepang sekaligus menyiapkan lulusan vokasi yang siap bersaing di pasar kerja global.
									</p>
								</div>

								<div>
									<h5 className="font-bold text-gray-900 mb-2">Implementasi</h5>
									<p>
										Program SPUA Internship merupakan salah satu bentuk implementasi nyata kolaborasi akademik antara Sekolah Vokasi IPB University dan SPUA. Melalui program ini, mahasiswa Sekolah Vokasi IPB University memperoleh kesempatan untuk mengikuti kegiatan magang di Jepang dalam rentang waktu tertentu, dengan fokus pada penguatan keterampilan praktis, pemahaman teknologi pertanian, serta budaya dan etos kerja Jepang.
									</p>
								</div>

								<div>
									<h5 className="font-bold text-gray-900 mb-2">Relevansi & Kegiatan</h5>
									<p>
										Program internship ini relevan dengan kebutuhan Jepang yang saat ini mengalami kekurangan tenaga kerja profesional di sektor pertanian, akibat menurunnya angka kelahiran. Selama program berlangsung, peserta internship akan mengikuti berbagai kegiatan, antara lain orientasi, praktik pertanian modern, pengelolaan tanaman, kegiatan agrowisata, hingga penyusunan dan presentasi proyek magang. Kerja sama ini juga sejalan dengan hubungan sister city antara Prefektur Shizuoka dan Provinsi Jawa Barat, yang selama beberapa tahun terakhir aktif mendorong mobilitas tenaga kerja dan kolaborasi pendidikan di bidang pertanian.
									</p>
								</div>

								<div>
									<h5 className="font-bold text-gray-900 mb-2">Harapan Program</h5>
									<p>
										Melalui kemitraan Sekolah Vokasi IPB University dan SPUA, diharapkan semakin banyak mahasiswa yang memperoleh kesempatan internship internasional, meningkatkan kompetensi global, serta membuka peluang karier di Jepang, khususnya di sektor pertanian dan agribisnis.
									</p>
								</div>
							</div>
						</div>
					</div> */}
					</div>
				</section>

				{/* Teachers Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
								Profil Tim Pengajar
							</h2>
						</div>

						<div className="max-w-4xl mx-auto">
							<div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
								<p className="text-gray-700 text-lg leading-relaxed">
									Pengajar pada pelatihan bahasa Jepang ini terdiri dari para pengajar profesional dengan pengalaman mengajar bahasa Jepang di lembaga pendidikan bahasa Jepang formal dan informal, dengan pengalaman minimal selama <strong>15 tahun</strong>. Tim pengajar terdiri atas 5 orang pengajar yang masing-masing berkewarganegaraan Indonesia serta 1 orang pengajar dengan kewarganegaraan Jepang (<strong>Native Speaker</strong>). Dengan begitu diharapkan dapat memperkaya proses pembelajaran dan dapat memberikan kontribusi yang signifikan terhadap pengalaman belajar peserta pelatihan.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
								Apa Kata Mereka?
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Testimoni dari peserta PPBJ yang telah merasakan manfaat program kami
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{/* Testimoni 1 */}
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
								<div className="mb-4">
									<h4 className="font-bold text-gray-900">Jonathan Devin Sanjaya</h4>
									<p className="text-sm text-gray-600">Peserta kelas pemula - SMA Pelita Harapan</p>
								</div>
								<p className="text-gray-700 italic">
									"Pembelajaran di PPBJ sangat membantu saya memahami bahasa Jepang. Guru-guru nya asik, kelasnya aktif dan suportif, sehingga materi mudah dipahami. Les ini sangat bermanfaat untuk persiapan komunikasi di jepang dan rencana melanjutkan studi."
								</p>
							</div>

							{/* Testimoni 2 */}
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
								<div className="mb-4">
									<h4 className="font-bold text-gray-900">Boy Mranata Sinaga</h4>
									<p className="text-sm text-gray-600">Peserta kelas dasar 1 - Mahasiswa SV IPB</p>
								</div>
								<p className="text-gray-700 italic">
									"Belajar Nihongo di PPBJ terasa terstruktur dan menyenangkan. Materi disampaikan secara runtut dan interaktif, serta didukung rekaman dan materi di classroom sehingga tetap mudah diikuti meskipun saya memiliki jadwal perkuliahan yang padat sebagai mahasiswa. Saya mengikuti les ini sebagai persiapan untuk mengikuti program 3+2 yang diselenggarakan oleh SV IPB."
								</p>
							</div>

							{/* Testimoni 3 */}
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
								<div className="mb-4">
									<h4 className="font-bold text-gray-900">Ernesto Bagus</h4>
									<p className="text-sm text-gray-600">Peserta Program 3+2, Penerima beasiswa NIKKEI</p>
								</div>
								<p className="text-gray-700 italic">
									"Awal saya ikuti program ini dengan target lulus N4. Materinya terstruktur dan jadwalnya konsisten, dan sensei selalu sabar membimbing. Suasana kelas interaktif dan menyenangkan, didukung latihan soal serta percakapan yang meningkatkan kemampuan bahasa jepang. Program ini benar-benar mendukung saya untuk mencapai target lulus N4 sekaligus mempersiapkan diri untuk kesempatan akademik maupun professional di Jepang."
								</p>
							</div>

							{/* Testimoni 4 */}
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
								<div className="mb-4">
									<h4 className="font-bold text-gray-900">Purwoko Hedianto</h4>
									<p className="text-sm text-gray-600">Peserta kelas dasar 1 - Wirausaha</p>
								</div>
								<p className="text-gray-700 italic">
									"Saya belajar bahasa jepang di PPBJ SV IPB dengan pengajar professional termasuk native speaker, sehingga proses belajar menarik dan menyenangkan. Jika kesulitan, saya bisa langsung bertanya kepada sensei dan mendapatkan penjelasan yang jelas. Pembelajaran online fleksibel, didukung latihan dan percakapan yang meningkatkan kemampuan berbicara, sekaligus mengenai budaya jepang, mempersiapkan saya untuk berwisata, bekerja, atau melanjutkan studi ke Jepang."
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section
					id="cta-section"
					className="py-20 bg-gradient-to-r from-blue-600 to-blue-700"
				>
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
							Kuota Terbatas (Maksimal 10-15 orang per kelas). Amankan kursimu sekarang!
						</h2>
						<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
							Raih kesempatan emas untuk belajar bahasa Jepang dengan kurikulum standar internasional dan pengajar berpengalaman
						</p>
						<Link
							href="https://forms.gle/JDx5wEpHD6T4SciC7"
							target="_blank"
							className="inline-block px-10 py-5 bg-white text-blue-700 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
						>
							Daftar Online Sekarang
						</Link>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}
