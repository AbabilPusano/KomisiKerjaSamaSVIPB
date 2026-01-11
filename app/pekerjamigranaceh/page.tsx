'use client'

import React, { useState, useEffect, useRef } from 'react';
import {
	CheckCircle,
	AlertTriangle,
	MapPin,
	Users,
	Calendar,
	BookOpen,
	Award,
	Check,
	MessageCircle,
	Download,
	Plane,
	ShieldCheck,
	Menu,
	X,
	ArrowRight,
	ArrowDown,
	Instagram,
	Mail
} from 'lucide-react';

export default function PekerjaMigranAcehPage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeTab, setActiveTab] = useState('pemula');
	const [isRoadmapVisible, setIsRoadmapVisible] = useState(false);

	// State untuk Checklist
	const [checklistState, setChecklistState] = useState<Record<number, boolean>>({});

	const roadmapRef = useRef(null);
	const primaryColor = "#f6399f";

	// Intersection Observer untuk animasi roadmap
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsRoadmapVisible(true);
				}
			},
			{ threshold: 0.2 }
		);

		if (roadmapRef.current) {
			observer.observe(roadmapRef.current);
		}

		return () => {
			if (roadmapRef.current) {
				observer.unobserve(roadmapRef.current);
			}
		};
	}, []);

	const checklistItems = [
		"Pengisian Formulir Online Lengkap",
		"Esai Komitmen Pelatihan (Minimal 200 kata)",
		"Surat Perjanjian Taat Aturan (Bermaterai)",
		"Rencana Target Belajar (Study Plan)"
	];

	const toggleChecklist = (index: number) => {
		setChecklistState(prev => ({
			...prev,
			[index]: !prev[index]
		}));
	};

	const hasCheckedItems = Object.values(checklistState).some(val => val);

	const handleRegistrationClick = () => {
		if (hasCheckedItems) {
			const checkedLabels = checklistItems.filter((_, idx) => checklistState[idx]);
			const intro = "Halo Admin, saya mau mengenal program pekerja migran aceh lebih lanjut.";
			const list = checkedLabels.map(item => `- ${item}`).join('\n');
			const message = `${intro}\n\nSaya sudah mengisi/menyiapkan:\n${list}`;

			window.open(`https://wa.me/628988000065?text=${encodeURIComponent(message)}`, '_blank');
		} else {
			// Default action jika belum ada yang diceklis (misal ke form pendaftaran atau WA umum)
			window.open(`https://wa.me/628988000065?text=${encodeURIComponent("Halo Admin, saya ingin mendaftar program SSW.")}`, '_blank');
		}
	};

	const roadmap = [
		{
			title: "Sosialisasi",
			desc: "Penyampaian informasi program dan pendaftaran.",
			gridPos: "md:col-start-1 md:row-start-1",
			arrow: "right"
		},
		{
			title: "Pendaftaran Online",
			desc: "Pengisian formulir dan unggah dokumen administrasi.",
			gridPos: "md:col-start-2 md:row-start-1",
			arrow: "right"
		},
		{
			title: "Seleksi & Wawancara",
			desc: "Wawancara dengan Sekolah Vokasi IPB University dan perusahaan Jepang.",
			gridPos: "md:col-start-3 md:row-start-1",
			arrow: "down"
		},
		{
			title: "Orientasi & Matrikulasi",
			desc: "Pengenalan program, pengajar, serta dasar huruf Jepang.",
			gridPos: "md:col-start-3 md:row-start-2",
			arrow: "left"
		},
		{
			title: "Pelatihan Intensif",
			desc: "Pelatihan bahasa Jepang online (9 bulan) & offline (1 bulan).",
			gridPos: "md:col-start-2 md:row-start-2",
			arrow: "left"
		},
		{
			title: "Ujian Sertifikasi",
			desc: "Evaluasi kemampuan bahasa dan kompetensi kerja standar Jepang.",
			gridPos: "md:col-start-1 md:row-start-2",
			arrow: "down"
		},
		{
			title: "Proses Keberangkatan",
			desc: "Fasilitasi dokumen, karantina, dan persiapan akhir.",
			gridPos: "md:col-start-1 md:row-start-3",
			arrow: "right"
		},
		{
			title: "Penempatan Kerja",
			desc: "Penempatan kerja di Jepang sesuai bidang dan kompetensi peserta.",
			gridPos: "md:col-start-2 md:row-start-3",
			arrow: "none"
		}
	];

	const goals = [
		{ icon: <MessageCircle className="w-6 h-6" />, title: "Komunikasi Harian", desc: "Mampu berinteraksi secara lancar dalam lingkungan kerja dan sosial di Jepang." },
		{ icon: <Award className="w-6 h-6" />, title: "Sertifikasi Resmi", desc: "Mendapatkan sertifikat JLPT N4 atau JFT-Basic A2 sebagai syarat SSW." },
		{ icon: <Users className="w-6 h-6" />, title: "Etos Kerja Jepang", desc: "Memahami budaya Hou-Ren-So dan kedisiplinan tinggi ala Jepang." },
		{ icon: <BookOpen className="w-6 h-6" />, title: "Kemandirian Belajar", desc: "Membangun kebiasaan belajar mandiri untuk pengembangan karir berkelanjutan." }
	];

	return (
		<div className="min-h-screen bg-white text-[#2d2d2d] font-sans overflow-x-hidden">
			<style>
				{`
          @keyframes drawLineRight {
            0% { width: 0; opacity: 0; }
            100% { width: 100%; opacity: 1; }
          }
          @keyframes drawLineDown {
            0% { height: 0; opacity: 0; }
            100% { height: 60px; opacity: 1; }
          }
          @keyframes drawLineLeft {
            0% { width: 0; opacity: 0; }
            100% { width: 100%; opacity: 1; }
          }
          @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-line-right { animation: drawLineRight 0.6s ease-out forwards; }
          .animate-line-down { animation: drawLineDown 0.6s ease-out forwards; }
          .animate-line-left { animation: drawLineLeft 0.6s ease-out forwards; }
          .animate-pop-in { animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        `}
			</style>

			{/* Navigation */}
			<nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						<div className="flex items-center gap-2">
							<div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white`} style={{ backgroundColor: primaryColor }}>
								<Plane className="w-6 h-6" />
							</div>
							<span className="font-bold text-xl tracking-tight">Pekerja Migran <span style={{ color: primaryColor }}>Aceh</span></span>
						</div>

						<div className="hidden md:flex items-center space-x-8">
							<a href="#program" className="hover:text-[#f6399f] transition-colors font-medium">Program</a>
							<a href="#alur" className="hover:text-[#f6399f] transition-colors font-medium">Alur</a>
							<a href="#syarat" className="hover:text-[#f6399f] transition-colors font-medium">Syarat</a>
							<a href="#kurikulum" className="hover:text-[#f6399f] transition-colors font-medium">Kurikulum</a>
							<a href="https://wa.me/628988000065" target="_blank" rel="noopener noreferrer"
								className="px-6 py-2.5 rounded-full text-white font-semibold transition-transform hover:scale-105"
								style={{ backgroundColor: primaryColor }}
							>
								Daftar Sekarang
							</a>
						</div>

						<div className="md:hidden">
							<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
								{isMenuOpen ? <X /> : <Menu />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden bg-white border-b px-4 py-4 space-y-4">
						<a href="#program" className="block py-2 font-medium">Program</a>
						<a href="#alur" className="block py-2 font-medium">Alur</a>
						<a href="#syarat" className="block py-2 font-medium">Syarat</a>
						<button className="w-full py-3 rounded-xl text-white font-bold" style={{ backgroundColor: primaryColor }}>Daftar Sekarang</button>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-[#f9f9f9]">
				<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100">
							<span className="w-2 h-2 rounded-full bg-[#f6399f] animate-pulse"></span>
							<span className="text-sm font-semibold uppercase tracking-wider text-[#f6399f]">Pendaftaran Dibuka - Batch 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-bold leading-tight">
							Wujudkan Karir Masa Depan di Jepang Bersama <span style={{ color: primaryColor }}>Pekerja Migran Aceh.</span>
						</h1>
						<p className="text-lg md:text-xl text-gray-600 max-w-xl">
							Pelatihan intensif bahasa Jepang dan persiapan kerja Specified Skilled Worker (SSW) hingga siap berangkat ke Negeri Sakura.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button
								className="px-10 py-4 rounded-xl text-white text-lg font-bold shadow-lg shadow-pink-200 transition-all hover:-translate-y-1"
								style={{ backgroundColor: primaryColor }}
							>
								Daftar Sekarang
							</button>
						</div>
						{/* <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="alumni" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                <span className="text-[#2d2d2d] font-bold">500+</span> Alumni telah bekerja di Jepang
              </p>
            </div> */}
					</div>
					<div className="relative">
						<div className="absolute -inset-4 bg-pink-100 rounded-[2rem] -rotate-2"></div>
						<div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000"
								alt="Pelatihan Bahasa Jepang"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Value Proposition */}
			<section id="program" className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Tujuan & Target Luaran</h2>
						<p className="text-gray-600">Kami tidak hanya mengajarkan bahasa, tapi membekali Anda dengan kompetensi global yang siap bersaing.</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{goals.map((goal, idx) => (
							<div key={idx} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-pink-100 transition-all group">
								<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-[#f6399f] group-hover:text-white bg-pink-50 text-[#f6399f]">
									{goal.icon}
								</div>
								<h3 className="text-xl font-bold mb-3">{goal.title}</h3>
								<p className="text-gray-500 leading-relaxed">{goal.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#2d2d2d] text-white flex flex-col md:flex-row items-center justify-between gap-8">
						<div className="space-y-4">
							<h3 className="text-2xl font-bold">Target Akademik Batch Ini:</h3>
							<ul className="grid sm:grid-cols-2 gap-4">
								<li className="flex items-center gap-3"><CheckCircle className="text-[#f6399f] w-5 h-5" /> Kemampuan setara A2</li>
								<li className="flex items-center gap-3"><CheckCircle className="text-[#f6399f] w-5 h-5" /> 450+ Kanji & 1500+ Kosakata</li>
								<li className="flex items-center gap-3"><CheckCircle className="text-[#f6399f] w-5 h-5" /> Sertifikat JLPT N4 / JFT-A2</li>
								<li className="flex items-center gap-3"><CheckCircle className="text-[#f6399f] w-5 h-5" /> Kelulusan Ginou Test (SSW)</li>
							</ul>
						</div>
						<div className="flex-shrink-0 text-center px-10 py-6 bg-white/10 rounded-2xl backdrop-blur-sm">
							<span className="text-4xl font-bold text-[#f6399f]">100%</span>
							<p className="text-sm uppercase tracking-widest mt-1 text-gray-400">Target Kelulusan</p>
						</div>
					</div>
				</div>
			</section>

			{/* Roadmap Section */}
			<section id="alur" className="py-24 px-4 bg-[#f9f9f9]" ref={roadmapRef}>
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-20">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">8 Langkah Menuju Jepang</h2>
						<p className="text-gray-600">Alur sistematis yang dirancang untuk memastikan kesiapan dan keberhasilan Anda.</p>
					</div>

					<div className="relative">
						{/* Grid Container for S-Shape Layout */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 relative">

							{roadmap.map((step, idx) => {
								// Calculation for animation delays - DIPERCEPAT
								// Sebelumnya idx * 0.8s, sekarang idx * 0.3s
								const stepDelay = `${idx * 0.3}s`;
								const arrowDelay = `${(idx * 0.3) + 0.15}s`; // Arrow appears shortly after step

								return (
									<div
										key={idx}
										className={`${step.gridPos} relative group opacity-0 ${isRoadmapVisible ? 'animate-pop-in' : ''}`}
										style={{ animationDelay: stepDelay }}
									>
										{/* Card Content */}
										<div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full relative z-10">
											<div
												className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg transform -translate-y-12 absolute left-8"
												style={{ backgroundColor: primaryColor }}
											>
												{idx + 1}
											</div>
											<div className="mt-4">
												<h4 className="text-xl font-bold mb-3 text-[#2d2d2d] group-hover:text-[#f6399f] transition-colors">{step.title}</h4>
												<p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
											</div>
										</div>

										{/* Animated Connecting Lines (Desktop Only) */}
										<div className="hidden md:block">
											{step.arrow === 'right' && (
												<div className="absolute top-1/2 -right-16 w-16 h-1 bg-gray-200 -z-0">
													<div
														className={`h-full bg-[#f6399f] opacity-0 ${isRoadmapVisible ? 'animate-line-right' : ''}`}
														style={{ animationDelay: arrowDelay }}
													/>
													<div className="absolute -right-2 -top-1.5 text-gray-200">
														<ArrowRight size={16} strokeWidth={4} />
													</div>
												</div>
											)}

											{step.arrow === 'left' && (
												<div className="absolute top-1/2 -left-16 w-16 h-1 bg-gray-200 -z-0">
													<div
														className={`h-full bg-[#f6399f] opacity-0 ${isRoadmapVisible ? 'animate-line-left' : ''} absolute right-0`}
														style={{ animationDelay: arrowDelay }}
													/>
													<div className="absolute -left-2 -top-1.5 text-gray-200 rotate-180">
														<ArrowRight size={16} strokeWidth={4} />
													</div>
												</div>
											)}

											{step.arrow === 'down' && (
												<div className="absolute -bottom-16 left-1/2 w-1 h-16 bg-gray-200 -z-0 -translate-x-1/2">
													<div
														className={`w-full bg-[#f6399f] opacity-0 ${isRoadmapVisible ? 'animate-line-down' : ''}`}
														style={{ animationDelay: arrowDelay }}
													/>
													<div className="absolute -bottom-2 -left-1.5 text-gray-200">
														<ArrowDown size={16} strokeWidth={4} />
													</div>
												</div>
											)}
										</div>

										{/* Mobile Connector (Simple Down Arrow) */}
										<div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-300">
											{idx !== roadmap.length - 1 && <ArrowDown />}
										</div>
									</div>
								);
							})}

						</div>
					</div>
				</div>
			</section>

			{/* Syarat Peserta (Tabs) */}
			<section id="syarat" className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Syarat & Kualifikasi Peserta</h2>
						<p className="text-gray-600">Pilih kategori yang sesuai dengan latar belakang Anda.</p>
					</div>

					<div className="flex justify-center mb-10">
						<div className="bg-gray-100 p-1.5 rounded-2xl inline-flex">
							<button
								onClick={() => setActiveTab('pemula')}
								className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'pemula' ? 'bg-white shadow-md text-[#f6399f]' : 'text-gray-500'}`}
							>
								Kategori Pemula
							</button>
							<button
								onClick={() => setActiveTab('eksjapan')}
								className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'eksjapan' ? 'bg-white shadow-md text-[#f6399f]' : 'text-gray-500'}`}
							>
								Eks-Japan
							</button>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-8 md:p-12 overflow-hidden relative">
						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
									<Users className="text-[#f6399f]" /> Profil Utama
								</h3>
								<div className="space-y-4">
									<div className="flex justify-between items-center p-4 rounded-xl bg-gray-50">
										<span className="font-semibold">Usia</span>
										<span className="text-[#f6399f] font-bold">{activeTab === 'pemula' ? '18 - 27 Tahun' : '20 - 35 Tahun'}</span>
									</div>
									<div className="flex justify-between items-center p-4 rounded-xl bg-gray-50">
										<span className="font-semibold">Pendidikan</span>
										<span>SMA / SMK / Sederajat</span>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
									<ShieldCheck className="text-[#f6399f]" /> Persyaratan Khusus
								</h3>
								<ul className="space-y-3">
									{activeTab === 'pemula' ? (
										<>
											<li className="flex items-start gap-3"><Check className="mt-1 text-green-500" /> Sehat fisik & mental, tidak buta warna</li>
											<li className="flex items-start gap-3"><Check className="mt-1 text-green-500" /> Tidak bertato dan bertindik</li>
											<li className="flex items-start gap-3"><Check className="mt-1 text-green-500" /> Memiliki SKCK aktif</li>
											<li className="flex items-start gap-3"><Check className="mt-1 text-green-500" /> Berkomitmen mengikuti pelatihan intensif</li>
										</>
									) : (
										<>
											<li className="flex items-start gap-3"><Check className="mt-1 text-green-500" /> Sertifikat Magang (Jisshu) Tahun ke-3</li>
											<li className="flex items-start gap-3"><Check className="mt-1 text-green-500" /> Bukan eks-peserta ilegal atau warning</li>
											<li className="flex items-start gap-3"><Check className="mt-1 text-green-500" /> Memiliki CV Lama saat magang</li>
											<li className="flex items-start gap-3"><Check className="mt-1 text-green-500" /> Skill Test Level 3 / Hyouka Choso</li>
										</>
									)}
								</ul>
							</div>
						</div>

						<div className="bg-pink-50 rounded-3xl p-8 border border-pink-100">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
									<AlertTriangle className="text-pink-500" />
								</div>
								<div>
									<h4 className="font-bold text-lg">Diskualifikasi Otomatis</h4>
									<p className="text-sm text-gray-500">Penting untuk diperhatikan sebelum mendaftar.</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className="bg-white/60 p-4 rounded-xl">
									<h5 className="font-bold text-sm uppercase text-gray-400 mb-2">Kesehatan Mata</h5>
									<p className="text-sm">Buta warna (total/parsial), Minus {'>'} -2, Silinder.</p>
								</div>
								<div className="bg-white/60 p-4 rounded-xl">
									<h5 className="font-bold text-sm uppercase text-gray-400 mb-2">Fisik</h5>
									<p className="text-sm">Obesitas berat, bertato/tindik, cacat fisik yang menghambat kerja.</p>
								</div>
								<div className="bg-white/60 p-4 rounded-xl">
									<h5 className="font-bold text-sm uppercase text-gray-400 mb-2">Riwayat Medis</h5>
									<p className="text-sm">Asma, Penyakit Jantung, TBC, Hepatitis, atau penyakit berat lainnya.</p>
								</div>
								<div className="bg-white/60 p-4 rounded-xl">
									<h5 className="font-bold text-sm uppercase text-gray-400 mb-2">Kriminal</h5>
									<p className="text-sm">Pernah terlibat narkoba atau rekam jejak kriminal buruk.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Curriculum & Materials */}
			<section id="kurikulum" className="py-24 px-4 bg-[#2d2d2d] text-white">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl font-bold">Kurikulum & Metode Pembelajaran</h2>
							<div className="space-y-6">
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-xl bg-[#f6399f]/20 flex items-center justify-center flex-shrink-0">
										<Calendar className="text-[#f6399f]" />
									</div>
									<div>
										<h4 className="font-bold text-xl mb-1">Jadwal Intensif</h4>
										<p className="text-gray-400">Pembelajaran 4x seminggu via Zoom dengan tutor berpengalaman (N1/N2 Level).</p>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-xl bg-[#f6399f]/20 flex items-center justify-center flex-shrink-0">
										<BookOpen className="text-[#f6399f]" />
									</div>
									<div>
										<h4 className="font-bold text-xl mb-1">Referensi Buku Standar</h4>
										<p className="text-gray-400">Minna no Nihongo, Marugoto, dan Nihongo Soumatome untuk persiapan JLPT.</p>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-xl bg-[#f6399f]/20 flex items-center justify-center flex-shrink-0">
										<MapPin className="text-[#f6399f]" />
									</div>
									<div>
										<h4 className="font-bold text-xl mb-1">LMS Khusus</h4>
										<p className="text-gray-400">Akses materi 24/7 melalui sistem manajemen belajar kami, Quizlet, dan Padlet.</p>
									</div>
								</div>
							</div>
							{/* <button className="inline-flex items-center gap-3 bg-white text-[#2d2d2d] px-8 py-4 rounded-xl font-bold hover:bg-[#f6399f] hover:text-white transition-all">
                <Download size={20} /> Unduh Brosur Pelatihan (PDF)
              </button> */}
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4 pt-8">
								<div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
									<p className="text-3xl font-bold mb-1">90%</p>
									<p className="text-xs text-gray-400 uppercase tracking-widest">Interaksi Aktif</p>
								</div>
								<div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
									<p className="text-3xl font-bold mb-1">4 bln</p>
									<p className="text-xs text-gray-400 uppercase tracking-widest">Durasi Program</p>
								</div>
							</div>
							<div className="space-y-4">
								<div className="bg-[#f6399f] p-6 rounded-2xl text-center">
									<p className="text-3xl font-bold mb-1">10+</p>
									<p className="text-xs text-white/80 uppercase tracking-widest">Sektor Kerja</p>
								</div>
								<div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
									<p className="text-3xl font-bold mb-1">Live</p>
									<p className="text-xs text-gray-400 uppercase tracking-widest">Interactive Class</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pre-Registration Checklist */}
			<section className="py-24 px-4">
				<div className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Daftar Periksa Persiapan</h2>
						<p className="text-gray-600">Pastikan Anda telah menyiapkan dokumen berikut sebelum mengisi formulir.</p>
					</div>

					<div className="space-y-4 max-w-xl mx-auto">
						{checklistItems.map((item, i) => (
							<label key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 cursor-pointer hover:border-pink-200 transition-colors select-none">
								<input
									type="checkbox"
									className="w-6 h-6 rounded accent-[#f6399f]"
									checked={!!checklistState[i]}
									onChange={() => toggleChecklist(i)}
								/>
								<span className={`font-medium transition-colors ${checklistState[i] ? 'text-[#f6399f]' : 'text-gray-700'}`}>{item}</span>
							</label>
						))}
					</div>

					<div className="mt-12 text-center">
						<p className="text-sm text-gray-400 mb-6 italic">Dengan mendaftar, Anda menyatakan bahwa seluruh data yang diberikan adalah benar dan bersedia mengikuti prosedur yang berlaku.</p>
						<button
							onClick={handleRegistrationClick}
							className={`w-full sm:w-auto px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 mx-auto ${hasCheckedItems ? 'text-white' : 'text-white'}`}
							style={{ backgroundColor: hasCheckedItems ? '#25D366' : primaryColor }}
						>
							{hasCheckedItems ? (
								<>
									<MessageCircle size={24} /> Hubungi Kami
								</>
							) : (
								"Klik Untuk Daftar Sekarang"
							)}
						</button>
					</div>
				</div>
			</section>

			{/* Contact / Social Media Section */}
			<section className="py-24 px-4 bg-gradient-to-b from-white to-pink-50">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Informasi Lebih Lanjut?</h2>
					<p className="text-gray-600 mb-12 text-lg">
						Jangan ragu untuk menghubungi kami melalui media sosial atau WhatsApp admin kami untuk pertanyaan seputar program.
					</p>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Instagram 1 */}
						<a
							href="https://instagram.com/ppbj_svipb"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:border-pink-300 hover:shadow-2xl transition-all group"
						>
							<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Instagram size={32} />
							</div>
							<h3 className="font-bold text-xl mb-1">@ppbj_svipb</h3>
							<p className="text-gray-500 text-sm">Sekolah Vokasi IPB</p>
							<span className="mt-6 text-[#f6399f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
								Kunjungi Profil <ArrowRight size={16} />
							</span>
						</a>

						{/* Instagram 2 */}
						<a
							href="https://instagram.com/pekerjamigranaceh"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:border-pink-300 hover:shadow-2xl transition-all group"
						>
							<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Instagram size={32} />
							</div>
							<h3 className="font-bold text-xl mb-1">@pekerjamigranaceh</h3>
							<p className="text-gray-500 text-sm">Pekerja Migran Aceh</p>
							<span className="mt-6 text-[#f6399f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
								Kunjungi Profil <ArrowRight size={16} />
							</span>
						</a>

						{/* WhatsApp */}
						<a
							href="https://wa.me/628988000065"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:border-green-300 hover:shadow-2xl transition-all group"
						>
							<div className="w-16 h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<MessageCircle size={32} />
							</div>
							<h3 className="font-bold text-xl mb-1">WhatsApp Admin</h3>
							<p className="text-gray-500 text-sm">0898-8000-065</p>
							<span className="mt-6 text-[#25D366] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
								Chat Sekarang <ArrowRight size={16} />
							</span>
						</a>

						{/* Email */}
						<a
							href="mailto:pekerjamigranaceh@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:border-[#f6399f] hover:shadow-2xl transition-all group"
						>
							<div className="w-16 h-16 rounded-2xl bg-[#f6399f] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Mail size={32} />
							</div>
							<h3 className="font-bold text-xl mb-1">Email Kami</h3>
							<p className="text-gray-500 text-sm">pekerjamigranaceh@gmail.com</p>
							<span className="mt-6 text-[#f6399f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
								Kirim Email <ArrowRight size={16} />
							</span>
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-20 px-4 border-t border-gray-100">
				<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
					<div className="col-span-2 space-y-6">
						<div className="flex items-center gap-2">
							<div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white`} style={{ backgroundColor: primaryColor }}>
								<Plane className="w-5 h-5" />
							</div>
							<span className="font-bold text-lg tracking-tight">Pekerja Migran <span style={{ color: primaryColor }}>Aceh</span></span>
						</div>
						<p className="text-gray-500 max-w-sm">
							Lembaga pelatihan resmi yang berfokus pada penyiapan Sumber Daya Manusia Aceh yang unggul untuk program Specified Skilled Worker di Jepang.
						</p>
					</div>
					<div>
						<h5 className="font-bold mb-6">Navigasi</h5>
						<ul className="space-y-4 text-gray-500">
							<li><a href="#" className="hover:text-[#f6399f]">Tentang Kami</a></li>
							<li><a href="#" className="hover:text-[#f6399f]">Program Pelatihan</a></li>
							<li><a href="#" className="hover:text-[#f6399f]">Testimoni</a></li>
							<li><a href="#" className="hover:text-[#f6399f]">FAQ</a></li>
						</ul>
					</div>
					<div>
						<h5 className="font-bold mb-6">Hubungi Kami</h5>
						<ul className="space-y-4 text-gray-500 text-sm">
							<li className="flex gap-2"><MapPin size={18} className="text-[#f6399f] flex-shrink-0" /> Banda Aceh, Provinsi Aceh, Indonesia</li>
							<li className="flex gap-2"><MessageCircle size={18} className="text-[#f6399f] flex-shrink-0" /> +62 8988-0000-65</li>
						</ul>
					</div>
				</div>
				<div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-gray-100 text-center text-sm text-gray-400">
					<p>© 2026 Pekerja Migran Aceh - Japan Preparation Program. All Rights Reserved.</p>
				</div>
			</footer>

			{/* Floating WhatsApp Button */}
			<a
				href="https://wa.me/628988000065"
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
			>
				<MessageCircle size={32} />
				<span className="absolute right-20 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
					Konsultasi Admin
				</span>
			</a>
		</div>
	);
};