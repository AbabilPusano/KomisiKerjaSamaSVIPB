"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
const nav = [
	{ label: "Beranda", href: "/" },
	{ label: "Program", href: "/programs" },
	{ label: "Alur Pendaftaran", href: "/#how-it-works" },
	{ label: "Tentang Kami", href: "/tentang-kami" },
	{ label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		// tutup menu saat route berubah
		setOpen(false);
	}, [pathname]);

	const isActive = (href: string) => {
		if (href.includes("#")) return false;
		if (href === "/") return pathname === "/";
		return pathname?.startsWith(href);
	};

	return (
		<header className="sticky top-0 z-50">
			<nav className="border-b border-blue-100 bg-white/90 backdrop-blur">
				<div className="max-w-7xl mx-auto px-4 md:px-8">
					<div className="h-16 flex items-center justify-between">
						{/* Brand */}
						<Link href="/" className="flex items-center gap-3">
							<div className="h-9 w-9 rounded-lg overflow-hidden bg-white border border-blue-100 flex items-center justify-center">
								<Image
									src="/ipb2.png"
									alt="Logo PPBJ"
									width={36}
									height={36}
									className="object-contain"
									priority
								/>
							</div>

							<div className="leading-tight">
								<div className="font-semibold text-gray-900">
									Pusat Pelatihan Bahasa Jepang
								</div>
								<div className="text-xs text-gray-600">
									Sekolah Vokasi IPB University
								</div>
							</div>
						</Link>

						{/* Desktop */}
						<div className="hidden md:flex items-center gap-1">
							{nav.map((item) => {
								const active = isActive(item.href);
								return (
									<Link
										key={item.href}
										href={item.href}
										className={[
											"px-3 py-2 rounded-md text-sm font-medium transition",
											active
												? "text-blue-700 bg-blue-50"
												: "text-gray-700 hover:text-blue-700 hover:bg-blue-50/60",
										].join(" ")}
									>
										{item.label}
									</Link>
								);
							})}

							<Link
								href="/registration"
								className="ml-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
							>
								Daftar Sekarang
							</Link>
						</div>

						{/* Mobile button */}
						<button
							onClick={() => setOpen((s) => !s)}
							className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-50 transition"
							aria-label="Toggle menu"
							aria-expanded={open}
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{open ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>

					{/* Mobile menu */}
					{open && (
						<div className="md:hidden pb-4">
							<div className="pt-2 border-t border-blue-100 flex flex-col gap-1">
								{nav.map((item) => {
									const active = isActive(item.href);
									return (
										<Link
											key={item.href}
											href={item.href}
											onClick={() => setOpen(false)}
											className={[
												"px-3 py-2 rounded-md text-sm font-medium transition",
												active
													? "text-blue-700 bg-blue-50"
													: "text-gray-700 hover:text-blue-700 hover:bg-blue-50/60",
											].join(" ")}
										>
											{item.label}
										</Link>
									);
								})}

								<Link
									href="/registration"
									onClick={() => setOpen(false)}
									className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
								>
									Daftar Sekarang
								</Link>
							</div>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
}
