"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Komisi Kerja Sama Sekolah Vokasi IPB
            </h3>
            <p className="text-gray-300 text-sm">
              Memfasilitasi kolaborasi internasional untuk meningkatkan kualitas pendidikan vokasi dan membuka peluang global bagi mahasiswa.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Program Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs/japan/ppbj"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  PPBJ SV IPB
                </Link>
              </li>
              <li>
                <Link
                  href="/pekerjamigranaceh"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  Pekerja Migran Aceh
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/japan"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  Program Jepang
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  Semua Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <address className="text-gray-300 text-sm not-italic">
              <p>Komisi Kerja Sama</p>
              <p>Sekolah Vokasi IPB University</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:kerjasama@apps.ipb.ac.id"
                  className="hover:text-white transition-colors"
                >
                  kerjasama@apps.ipb.ac.id
                </a>
              </p>
              <p>
                Telepon:{" "}
                <a
                  href="tel:+622518629442"
                  className="hover:text-white transition-colors"
                >
                  +62 251 8629442
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Komisi Kerja Sama Sekolah Vokasi IPB University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
