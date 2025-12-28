import { useLanguage } from "./LanguageProvider";

export default function Footer() {
	const { t } = useLanguage();

	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Column 1: About VCC */}
					<div>
						<h3 className="text-lg font-bold mb-4">
							Vocational Collaboration Center
						</h3>
						<p className="text-gray-300 text-sm">{t("heroDescription")}</p>
					</div>

					{/* Column 2: Quick Links */}
					<div>
						<h3 className="text-lg font-bold mb-4">{t("footerQuickLinks")}</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="/"
									className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
								>
									{t("home")}
								</a>
							</li>
							<li>
								<a
									href="/about"
									className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
								>
									{t("about")}
								</a>
							</li>
							<li>
								<a
									href="/programs"
									className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
								>
									{t("programs")}
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
								>
									{t("contact")}
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3: Programs */}
					<div>
						<h3 className="text-lg font-bold mb-4">{t("footerPrograms")}</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
								>
									{t("exchange")}
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
								>
									{t("internship")}
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
								>
									{t("jointDegree")}
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
								>
									{t("languageClass")}
								</a>
							</li>
						</ul>
					</div>

					{/* Column 4: Contact */}
					<div>
						<h3 className="text-lg font-bold mb-4">{t("contact")}</h3>
						<address className="text-gray-300 text-sm not-italic">
							<p>{t("footerCommission")}</p>
							<p>{t("footerUniversity")}</p>
							<p className="mt-2">{t("footerEmail")}</p>
							<p>{t("footerPhone")}</p>
						</address>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-8 text-center">
					<p className="text-gray-400 text-sm">
						© {new Date().getFullYear()} Vocational Collaboration Center (VCC) -
						IPB University. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
