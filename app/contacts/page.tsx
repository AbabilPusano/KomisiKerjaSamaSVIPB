"use client";

import Navbar from "@/app/vcc/components/Navbar";
import Footer from "@/app/vcc/components/Footer";
import { useLanguage } from "@/app/vcc/components/LanguageProvider";
import {
	Mail,
	Phone,
	MapPin,
	Send,
	Facebook,
	Instagram,
	Linkedin,
	Twitter,
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

					<div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg">
						<h3 className="text-2xl font-bold text-slate-900 mb-6">
							Ikuti Kami
						</h3>

						<div className="grid grid-cols-2 gap-4">
							<a
								href="#"
								className="flex items-center gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
							>
								<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
									<Facebook className="w-6 h-6 text-white" />
								</div>
								<span className="font-semibold text-slate-700">Facebook</span>
							</a>

							<a
								href="#"
								className="flex items-center gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
							>
								<div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center group-hover:bg-pink-700 transition-colors">
									<Instagram className="w-6 h-6 text-white" />
								</div>
								<span className="font-semibold text-slate-700">Instagram</span>
							</a>

							<a
								href="#"
								className="flex items-center gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
							>
								<div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
									<Linkedin className="w-6 h-6 text-white" />
								</div>
								<span className="font-semibold text-slate-700">LinkedIn</span>
							</a>

							<a
								href="#"
								className="flex items-center gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
							>
								<div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center group-hover:bg-sky-600 transition-colors">
									<Twitter className="w-6 h-6 text-white" />
								</div>
								<span className="font-semibold text-slate-700">Twitter</span>
							</a>
						</div>
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
			<Navbar />
			<HomePageContent />
			<Footer />
		</div>
	);
}
