'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Scroll to CTA section when button is clicked
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Belajar Bahasa Jepang & Siap Kerja di Jepang
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Bergabunglah dengan PPBJ Aceh dan wujudkan mimpi bekerja di Jepang bersama lembaga terpercaya.
              Program pelatihan terstandar dengan metode modern untuk sukses di pasar kerja Jepang.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://www.jotform.com/app/252954455231458"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
              >
                Daftar Sekarang
              </Link>
              <a href="/tentang-kami" className="bg-white hover:bg-gray-50 text-blue-500 border-2 border-blue-500 font-medium py-4 px-8 rounded-lg text-lg transition-colors duration-300">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Pelatihan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menawarkan program pelatihan bahasa Jepang dari level dasar hingga siap kerja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pelatihan Bahasa Jepang */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pelatihan Bahasa Jepang (Level N5–N3)</h3>
              <p className="text-gray-600">
                Program pelatihan dari dasar hingga tingkat menengah atas, siap untuk bekerja di Jepang.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Level N5: Huruf hiragana/katakana dan kosakata dasar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Level N4: Kalimat kompleks dan percakapan harian</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Level N3: Komunikasi profesional dan budaya kerja</span>
                </li>
              </ul>
            </div>

            {/* Metode Pembelajaran */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Metode Pembelajaran</h3>
              <p className="text-gray-600">
                Pembelajaran berbasis simulasi kerja dan budaya, bukan hanya fokus pada bahasa.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Simulasi kerja di lingkungan Jepang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Pendekatan budaya dan etika kerja</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Latihan percakapan intensif</span>
                </li>
              </ul>
            </div>

            {/* Fasilitas */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fasilitas</h3>
              <p className="text-gray-600">
                Dilengkapi laboratorium bahasa, perpustakaan, dan ruang konsultasi untuk optimalisasi belajar.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Kelas ber-AC dengan fasilitas multimedia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Laboratorium bahasa digital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Perpustakaan dengan koleksi Jepang</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA for Program Details */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ingin Tahu Lebih Lanjut Tentang Program Kami?</h3>
            <p className="text-gray-600 mb-6">Jelajahi kurikulum, metode pembelajaran, dan fasilitas lengkap kami</p>
            <Link
              href="/program"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
            >
              Lihat Detail Program
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">4 Langkah Menuju Jepang</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ikuti langkah-langkah sistematis untuk mewujudkan impian bekerja di Jepang bersama PPBJ Aceh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pendaftaran</h3>
              <p className="text-gray-600">
                Proses administrasi dan seleksi awal untuk memastikan kesiapan peserta.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pelatihan</h3>
              <p className="text-gray-600">
                Pembelajaran intensif bahasa, budaya, dan simulasi lingkungan kerja.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sertifikasi</h3>
              <p className="text-gray-600">
                Ujian JLPT/JFT dan Skill Test untuk menilai kompetensi peserta.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Penyaluran</h3>
              <p className="text-gray-600">
                Proses penempatan kerja di perusahaan-perusahaan rekanan di Jepang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Alumni</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cerita keberhasilan alumni PPBJ Aceh yang kini bekerja di Jepang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Ahmad Fauzi</h3>
                  <p className="text-gray-600">Operator Mesin di Toyota</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                Proses pelatihan di PPBJ sangat sistematis. Setelah lulus langsung ditempatkan di perusahaan besar di Jepang.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Siti Nurhaliza</h3>
                  <p className="text-gray-600">Perawat di RS Tokyo</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                Metode pembelajaran di PPBJ sangat membantu memahami budaya dan komunikasi di lingkungan kerja Jepang.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Rizki Pratama</h3>
                  <p className="text-gray-600">IT Support di SoftBank</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                PPBJ tidak hanya memberikan pelatihan bahasa, tapi juga persiapan mental dan budaya yang sangat berguna di lapangan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Siap Memulai Perjalanan ke Jepang?
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan alumni sukses kami yang kini bekerja di berbagai perusahaan di Jepang.
          </p>
          <Link href="https://www.jotform.com/app/252954455231458"
                target="_blank" 
                className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform inline-block">
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
