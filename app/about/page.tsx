"use client";

import Navbar from "@/app/vcc/components/Navbar";
import Footer from "@/app/vcc/components/Footer";
import { useLanguage } from "@/app/vcc/components/LanguageProvider";
import Image from "next/image";

function AboutPageContent() {
	const { t } = useLanguage();

	return (
		<>
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="text-center max-w-3xl mx-auto mb-12">
						<h1 className="text-5xl font-extrabold text-slate-900 text-center mb-4">
							{t("aboutTitle")}
						</h1>
						<p className="text-slate-700 text-lg max-w-2xl mx-auto">
							{t("aboutSubtitle")}
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
						{/* Left - Image Card */}
						<div className="flex justify-center lg:justify-start">
							<div className="w-full max-w-md">
								<div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
									<div className="relative aspect-[3/4]">
										<Image
											src="/pr1.jpeg"
											alt={t("aboutImageAlt")}
											fill
											className="object-cover"
											priority
										/>
										{/* Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

										{/* Bottom Title */}
										<div className="absolute bottom-0 left-0 w-full p-5">
											<div className="rounded-xl bg-blue-700/95 backdrop-blur text-white px-5 py-4 text-center shadow-md">
												<p className="text-xl font-semibold">
													{t("aboutCardTitle")}
												</p>
												<p className="text-sm mt-1 text-white/90">
													{t("aboutCardSubtitle")}
												</p>
											</div>
										</div>
									</div>

									{/* Optional footer bawah gambar (kalau mau) */}
									{/* <div className="px-5 py-4 text-sm text-gray-600">
										{t("aboutCardFooter")}
									</div> */}
								</div>
							</div>
						</div>

						{/* Right - Content */}
						<div className="space-y-6">
							{/* Main Card */}
							<div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-7">
								<h2 className="text-xl font-semibold text-gray-900">
									{t("aboutRoleTitle")}
								</h2>
								<p className="mt-3 text-gray-700 leading-relaxed">
									{t("aboutRoleDesc")}
								</p>

								{/* Bullets */}
								<ul className="mt-5 space-y-3 text-gray-700">
									<li className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
										<span>{t("aboutPoint1")}</span>
									</li>
									<li className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
										<span>{t("aboutPoint2")}</span>
									</li>
									<li className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
										<span>{t("aboutPoint3")}</span>
									</li>
								</ul>
							</div>

							{/* Vision Box */}
							<div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 md:p-7">
								<h3 className="text-lg font-semibold text-gray-900">
									{t("aboutCommitTitle")}
								</h3>
								<p className="mt-3 text-gray-700 leading-relaxed">
									{t("aboutCommitDesc")}
								</p>

								<div className="mt-5 flex flex-col sm:flex-row gap-3">
									<a
										href="/programs"
										className="inline-flex justify-center items-center rounded-xl bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800 transition"
									>
										{t("aboutCtaPrograms")}
									</a>
									<a
										href="/contact"
										className="inline-flex justify-center items-center rounded-xl bg-white px-5 py-3 text-blue-700 font-medium border border-blue-200 hover:bg-blue-50 transition"
									>
										{t("aboutCtaContact")}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<AboutPageContent />
		</div>
	);
}
