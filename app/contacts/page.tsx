"use client";

import { Header, Footer } from "@/app/components";
import { useLanguage } from "@/app/vcc/components/LanguageProvider";
import {
	Mail,
	MapPin,
	Send,
	Instagram,
	MessageCircle,
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

		// Create mailto link with form data
		const mailtoLink = `mailto:svipb-partneship@apps.ipb.ac.id?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
			`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
		)}`;

		// Open email client
		window.location.href = mailtoLink;

		// Optional: Reset form after submission
		// setFormData({ name: "", email: "", subject: "", message: "" });
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
			<div className="grid lg:grid-cols-4 gap-8 mb-16">
				{/* WhatsApp Card */}
				<a
					href="https://wa.me/6282299273968"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
				>
					<div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-green-600 transition-colors">
						<MessageCircle className="w-8 h-8 text-white" />
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp</h3>
					<p className="text-slate-700 mb-2 group-hover:text-green-700 transition-colors">+62 822-9927-3968</p>
					<p className="text-sm text-green-600 font-semibold mt-2">Klik untuk chat →</p>
				</a>

				{/* Email Card */}
				<a
					href="mailto:svipb-partneship@apps.ipb.ac.id"
					className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
				>
					<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-blue-700 transition-colors">
						<Mail className="w-8 h-8 text-white" />
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
					<p className="text-slate-700 mb-2 group-hover:text-blue-700 transition-colors break-words">svipb-partneship@apps.ipb.ac.id</p>
					<p className="text-sm text-blue-600 font-semibold mt-2">Klik untuk email →</p>
				</a>

				{/* Instagram Card */}
				<a
					href="https://www.instagram.com/collaboration.svipb/"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
				>
					<div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all">
						<Instagram className="w-8 h-8 text-white" />
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-3">Instagram</h3>
					<p className="text-slate-700 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-orange-500 transition-all">@collaboration.svipb</p>
					<p className="text-sm font-semibold mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Klik untuk follow →</p>
				</a>

				{/* Address Card */}
				<div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
					<div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
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

			{/* FORM - FULL WIDTH */}
			<div className="mb-16">
				<div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200">
					<h2 className="text-3xl font-bold text-slate-900 mb-6">
						Kirim Pesan
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
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
			</div>

			{/* MAP + OFFICE HOURS - SIDE BY SIDE */}
			<div className="grid lg:grid-cols-2 gap-8">
				{/* MAP */}
				<div className="h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4628251636286!2d106.80611479999999!3d-6.5892504999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5d2e602b501%3A0x25a12f0f97fac4ee!2sSekolah%20Vokasi%20Institut%20Pertanian%20Bogor!5e0!3m2!1sid!2sid!4v1767563696590!5m2!1sid!2sid"
						className="w-full h-full border-0"
						loading="lazy"
						allowFullScreen
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				{/* OFFICE HOURS */}
				<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-center">
					<h3 className="text-3xl font-bold mb-6 text-center">Jam Operasional</h3>
					<div className="space-y-4">
						<div className="text-center">
							<p className="text-xl font-semibold mb-2">Senin - Jumat</p>
							<p className="text-blue-100 text-lg">08:00 - 16:00 WIB</p>
						</div>
						<div className="border-t border-blue-400 pt-4 text-center">
							<p className="text-blue-100">
								Sabtu–Minggu & Hari Libur Nasional: Tutup
							</p>
						</div>
					</div>
				</div>
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
