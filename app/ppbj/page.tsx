"use client";

import Link from "next/link";

export default function Home() {
	// Scroll to CTA section when button is clicked
	const scrollToCTA = () => {
		const ctaSection = document.getElementById("cta-section");
		if (ctaSection) {
			ctaSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
			{/* Hero Section */}
			<section className="container mx-auto px-4 py-20 lg:py-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
							Wujudkan Mimpi Bekerja di Jepang
						</h1>
						<p className="text-lg text-gray-600">
							Program Pelatihan Bahasa Jepang Aceh mempersiapkan Anda dengan
							pelatihan intensif bahasa, budaya, dan keterampilan kerja untuk
							sukses berkarir di Jepang.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button
								onClick={scrollToCTA}
								className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
							>
								Daftar Sekarang
							</button>
							<Link
								href="/programs"
								className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all text-center"
							>
								Pelajari Lebih Lanjut
							</Link>
						</div>
					</div>

					{/* Hero Image */}
					<div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
						<img
							src="/102.png"
							alt="Japanese Training"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-white py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
							Keunggulan Program Kami
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							PPBJ Aceh menawarkan program pelatihan komprehensif yang dirancang
							khusus untuk kesuksesan Anda di Jepang
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Pelatihan Bahasa Jepang */}
						<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="text-5xl mb-4">📚</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								Pelatihan Bahasa Jepang
							</h3>
							<p className="text-gray-700 mb-4">
								Kurikulum terstruktur dari level dasar hingga mahir dengan
								instruktur bersertifikat.
							</p>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Kelas N5 hingga N2 (JLPT)</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Latihan percakapan sehari-hari</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Pengajaran Kanji, Hiragana, Katakana</span>
								</li>
							</ul>
						</div>

						{/* Metode Pembelajaran */}
						<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="text-5xl mb-4">🎓</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								Metode Pembelajaran
							</h3>
							<p className="text-gray-700 mb-4">
								Pendekatan praktis dan interaktif yang memaksimalkan pemahaman
								dan keterampilan.
							</p>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Kelas interaktif dan role-playing</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Simulasi lingkungan kerja Jepang</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Pelatihan budaya dan etika kerja</span>
								</li>
							</ul>
						</div>

						{/* Fasilitas */}
						<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="text-5xl mb-4">🏫</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								Fasilitas Lengkap
							</h3>
							<p className="text-gray-700 mb-4">
								Infrastruktur modern dan mendukung untuk pengalaman belajar yang
								optimal.
							</p>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Ruang kelas ber-AC dan multimedia</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Perpustakaan dengan koleksi buku Jepang</span>
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									<span>Asrama nyaman dan kantin</span>
								</li>
							</ul>
						</div>
					</div>

					{/* CTA for Program Details */}
					<div className="text-center mt-16">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Ingin Tahu Lebih Detail Tentang Program Kami?
						</h3>
						<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
							Pelajari lebih lanjut tentang berbagai program pelatihan yang kami
							tawarkan
						</p>
						<Link
							href="/programs"
							className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
						>
							Lihat Semua Program
						</Link>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
							Langkah Menuju Jepang
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Proses yang terstruktur dan jelas untuk memastikan kesuksesan Anda
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Step 1 */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
								1
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
								Pendaftaran
							</h3>
							<p className="text-gray-600 text-center">
								Proses administrasi dan seleksi awal untuk memastikan kesiapan
								peserta.
							</p>
						</div>

						{/* Step 2 */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
								2
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
								Pelatihan
							</h3>
							<p className="text-gray-600 text-center">
								Pembelajaran intensif bahasa, budaya, dan simulasi lingkungan
								kerja.
							</p>
						</div>

						{/* Step 3 */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
								3
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
								Sertifikasi
							</h3>
							<p className="text-gray-600 text-center">
								Ujian JLPT/JFT dan Skill Test untuk menilai kompetensi peserta.
							</p>
						</div>

						{/* Step 4 */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
								4
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
								Penyaluran
							</h3>
							<p className="text-gray-600 text-center">
								Proses penempatan kerja di perusahaan-perusahaan rekanan di
								Jepang.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
							Testimoni Alumni
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Cerita keberhasilan alumni PPBJ Aceh yang kini bekerja di Jepang
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="flex items-center mb-4">
								<img
									src="/images/avatar-1.jpg"
									alt="Ahmad Fauzi"
									className="w-16 h-16 rounded-full object-cover mr-4"
								/>
								<div>
									<h4 className="font-bold text-gray-900">Ahmad Fauzi</h4>
									<p className="text-sm text-gray-600">
										Operator Mesin di Toyota
									</p>
								</div>
							</div>
							<p className="text-gray-700 italic">
								"Proses pelatihan di PPBJ sangat sistematis. Setelah lulus
								langsung ditempatkan di perusahaan besar di Jepang."
							</p>
						</div>

						<div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="flex items-center mb-4">
								<img
									src="/images/avatar-2.jpg"
									alt="Siti Nurhaliza"
									className="w-16 h-16 rounded-full object-cover mr-4"
								/>
								<div>
									<h4 className="font-bold text-gray-900">Siti Nurhaliza</h4>
									<p className="text-sm text-gray-600">Perawat di RS Tokyo</p>
								</div>
							</div>
							<p className="text-gray-700 italic">
								"Metode pembelajaran di PPBJ sangat membantu memahami budaya dan
								komunikasi di lingkungan kerja Jepang."
							</p>
						</div>

						<div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="flex items-center mb-4">
								<img
									src="/images/avatar-3.jpg"
									alt="Rizki Pratama"
									className="w-16 h-16 rounded-full object-cover mr-4"
								/>
								<div>
									<h4 className="font-bold text-gray-900">Rizki Pratama</h4>
									<p className="text-sm text-gray-600">
										IT Support di SoftBank
									</p>
								</div>
							</div>
							<p className="text-gray-700 italic">
								"PPBJ tidak hanya memberikan pelatihan bahasa, tapi juga
								persiapan mental dan budaya yang sangat berguna di lapangan."
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
						Siap Memulai Perjalanan ke Jepang?
					</h2>
					<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
						Bergabunglah dengan ribuan alumni sukses kami yang kini bekerja di
						berbagai perusahaan di Jepang.
					</p>
					<Link
						href="/registration"
						className="inline-block px-10 py-5 bg-white text-blue-700 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
					>
						Daftar Sekarang
					</Link>
				</div>
			</section>
		</div>
	);
}
