"use client";

import Link from "next/link";
import { Header, Footer } from "@/app/components";
import Image from "next/image";

export default function ChuoPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                International Program: 3+2 Scheme with Chuo Joho Institute
              </h1>
              <p className="text-lg text-gray-600">
                Program kolaboratif setara Diploma 4 (D4) yang mempersiapkan mahasiswa untuk bersaing di pasar kerja global, khususnya Jepang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#program-details"
                  className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Pelajari Program
                </a>
                <a
                  href="#gallery"
                  className="px-8 py-4 bg-white text-orange-700 font-semibold rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-all text-center"
                >
                  Lihat Galeri
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/chuo/hero-placeholder.webp"
                alt="Chuo Joho Institute Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                Program Overview
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Sekolah Vokasi IPB University bekerja sama dengan Chuo Joho Institute, Jepang, membuka Program Internasional skema 3+2 yang dirancang untuk mempersiapkan mahasiswa agar mampu bersaing di pasar kerja global, khususnya Jepang. Program ini mengintegrasikan pendidikan akademik, pelatihan keterampilan kerja, serta pemahaman budaya dan etos kerja Jepang.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Objectives */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                Program Objectives
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <span className="text-3xl text-white">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Melanjutkan Studi
                  </h3>
                  <p className="text-gray-700">
                    Mempersiapkan mahasiswa untuk melanjutkan studi di Jepang
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <span className="text-3xl text-white">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Bekerja di Jepang
                  </h3>
                  <p className="text-gray-700">
                    Mempersiapkan mahasiswa untuk bekerja di Jepang
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <span className="text-3xl text-white">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Kompetensi Global
                  </h3>
                  <p className="text-gray-700">
                    Membekali mahasiswa dengan kompetensi dan keterampilan yang sesuai dengan kebutuhan pasar kerja Jepang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3+2 Program Scheme */}
        <section id="program-details" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                3+2 Program Scheme
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Program ini merupakan jalur pendidikan kolaboratif setara Diploma 4 (D4) dengan alur sebagai berikut:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        6 Semester (3 Tahun) di Sekolah Vokasi IPB University
                      </h4>
                      <p className="text-gray-700">
                        Studi di Sekolah Vokasi IPB University dengan kurikulum yang dirancang khusus untuk mempersiapkan mahasiswa mengikuti program lanjutan di Jepang.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        1 Semester (6 Bulan) Pembelajaran Bahasa Jepang di Jepang
                      </h4>
                      <p className="text-gray-700">
                        Program intensif pembelajaran bahasa Jepang langsung di Jepang untuk mempersiapkan komunikasi dan adaptasi budaya.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Wisuda di IPB University
                      </h4>
                      <p className="text-gray-700">
                        Setelah menyelesaikan 6 semester di IPB, mahasiswa akan diwisuda dan mendapatkan gelar dari IPB University.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        4 Semester (2 Tahun) Studi Lanjutan di Chuo Joho Institute, Jepang
                      </h4>
                      <p className="text-gray-700">
                        Melanjutkan studi di Chuo Joho Institute dengan fokus pada <strong>Program Desain Bisnis</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarship Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                Scholarship and Financial Support
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Mahasiswa yang mengikuti program ini berkesempatan memperoleh dukungan pendanaan melalui skema sponsor/beasiswa, antara lain:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-orange-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <span className="text-3xl text-white">📰</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Nikkei Newspaper Scholarship
                  </h3>
                  <p className="text-gray-700">
                    Beasiswa dari Nikkei Newspaper untuk mendukung studi dan kehidupan mahasiswa di Jepang.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-orange-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <span className="text-3xl text-white">📄</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Yomiuri Shimbun Scholarship
                  </h3>
                  <p className="text-gray-700">
                    Beasiswa dari Yomiuri Shimbun untuk mendukung pendidikan mahasiswa selama di Jepang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Implementation */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                Program Implementation
              </h2>
              <p className="text-lg text-gray-700 mb-12 text-center">
                Program Internasional Skema 3+2 dengan Chuo Joho Institute telah memasuki tahap implementasi dengan keberangkatan mahasiswa ke Jepang dalam beberapa batch sebagai berikut:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-2 border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        Batch 1
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <strong>Participant:</strong> Angga
                        </p>
                        <p className="text-green-700 font-semibold">
                          <strong>Status:</strong> Successfully Departed to Japan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-2 border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        Batch 2
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <strong>Participants:</strong> Ernesto, Hauzan
                        </p>
                        <p className="text-green-700 font-semibold">
                          <strong>Status:</strong> Successfully Departed to Japan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                Gallery
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Gallery Item 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <img
                      src="/images/chuo/student-activities.webp"
                      alt="Chuo Joho Institute – Student Activities"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Chuo Joho Institute – Student Activities
                    </h3>
                    <p className="text-gray-700">
                      Dokumentasi mahasiswa Sekolah Vokasi IPB University selama mengikuti program di Chuo Joho Institute, Jepang.
                    </p>
                  </div>
                </div>

                {/* Gallery Item 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <img
                      src="/images/chuo/batch1-departure.webp"
                      alt="Departure of Batch 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Departure of Batch 1
                    </h3>
                    <p className="text-gray-700">
                      Keberangkatan mahasiswa <strong>Angga</strong> sebagai peserta Batch 1 Program Internasional 3+2 ke Jepang.
                    </p>
                  </div>
                </div>

                {/* Gallery Item 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <img
                      src="/images/chuo/batch2-departure.webp"
                      alt="Departure of Batch 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Departure of Batch 2
                    </h3>
                    <p className="text-gray-700">
                      Keberangkatan mahasiswa <strong>Ernesto</strong> dan <strong>Hauzan</strong> sebagai peserta Batch 2 Program Internasional 3+2 ke Jepang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Further Information */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Further Information
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Informasi lebih lanjut mengenai persyaratan, mekanisme seleksi, dan jadwal pendaftaran akan diumumkan melalui kanal resmi Sekolah Vokasi IPB University.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacts"
                  className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Hubungi Kami
                </Link>
                <Link
                  href="/programs/japan"
                  className="px-8 py-4 bg-white text-orange-700 font-semibold rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-all"
                >
                  Kembali ke Program Jepang
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
