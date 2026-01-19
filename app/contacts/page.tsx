"use client";

import { Header, Footer } from "@/app/components";
import { useLanguage } from "@/app/vcc/components/LanguageProvider";
import {
	Mail,
	Phone,
	MapPin,
	Send,
	Instagram,
} from "lucide-react";
import { useState } from "react";

function HomePageContent() {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="container mx-auto px-4 py-16 max-w-7xl">
			{/* HEADER */}
			<div className="text-center mb-16">
				<h1 className="text-5xl font-extrabold text-slate-900 mb-4">
					Hubungi Kami
				</h1>
				<p className="text-slate-700 text-lg max-w-2xl mx-auto">
					Punya pertanyaan atau ingin bekerja sama? Kami siap membantu Anda.
				</p>
			</div>

			{/* CONTACT INFO */}
			<div className="grid lg:grid-cols-3 gap-8 mb-16">
				<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
					<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
						<Phone className="w-8 h-8 text-white" />
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-3">Telepon</h3>
					<p className="text-slate-700 mb-2">+62 21 1234 5678</p>
					<p className="text-slate-700">+62 812 3456 7890</p>
				</div>

				<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
					<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
						<Mail className="w-8 h-8 text-white" />
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
					<p className="text-slate-700 mb-2">info@vcc.ac.id</p>
					<p className="text-slate-700">admissions@vcc.ac.id</p>
				</div>

				<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
					<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
						<MapPin className="w-8 h-8 text-white" />
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-3">Alamat</h3>
					<p className="text-slate-700">
						Jl. Kumbang No. 14, RT 02/RW 06
						<br />
						Kel. Babakan, Kec. Bogor Tengah
						<br />
						Kota Bogor, Jawa Barat 16128
					</p>
				</div>
			</div>

			{/* FORM & MAP */}
			<div className="grid lg:grid-cols-2 gap-8">
				{/* FORM */}
				<div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
					<h2 className="text-3xl font-bold text-slate-900 mb-6">
						Kirim Pesan
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-semibold text-slate-700 mb-2"
							>
								Nama Lengkap
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Masukkan nama Anda"
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-semibold text-slate-700 mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="nama@email.com"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="subject"
								className="block text-sm font-semibold text-slate-700 mb-2"
							>
								Subjek
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="Topik pesan Anda"
								value={formData.subject}
								onChange={handleChange}
								className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-semibold text-slate-700 mb-2"
							>
								Pesan
							</label>
							<textarea
								id="message"
								name="message"
								placeholder="Tulis pesan Anda di sini..."
								value={formData.message}
								onChange={handleChange}
								rows={5}
								className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
								required
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center gap-2"
						>
							<Send className="w-5 h-5" />
							Kirim Pesan
						</button>
					</form>
				</div>

				{/* MAP + SOCIAL */}
				<div className="space-y-8">
					<div className="h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4628251636286!2d106.80611479999999!3d-6.5892504999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5d2e602b501%3A0x25a12f0f97fac4ee!2sSekolah%20Vokasi%20Institut%20Pertanian%20Bogor!5e0!3m2!1sid!2sid!4v1767563696590!5m2!1sid!2sid"
							className="w-full h-full border-0"
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>

					<div className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 rounded-2xl p-10 shadow-xl border border-pink-100">
						<h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
							Ikuti Kami
						</h3>

						<a
							href="https://www.instagram.com/collaboration.svipb/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center gap-4 bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden"
						>
							{/* Gradient overlay on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>

							{/* Icon container with gradient */}
							<div className="relative w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500">
								<Instagram className="w-10 h-10 text-white" />
							</div>

							{/* Text */}
							<div className="text-center relative z-10">
								<span className="font-bold text-xl text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-orange-500 transition-all duration-300">
									Instagram
								</span>
								<p className="text-sm text-slate-500 mt-1 group-hover:text-slate-600 transition-colors">
									@collaboration.svipb
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>

			{/* OFFICE HOURS */}
			<div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center shadow-xl">
				<h3 className="text-3xl font-bold mb-6">Jam Operasional</h3>
				<div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
					<div>
						<p className="text-xl font-semibold mb-2">Senin - Jumat</p>
						<p className="text-blue-100">08:00 - 17:00 WIB</p>
					</div>
				</div>
				<p className="mt-6 text-blue-100">
					Sabtu–Minggu & Hari Libur Nasional: Tutup
				</p>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<HomePageContent />
			<Footer />
		</div>
	);
}
