import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program - PPBJ Aceh',
  description: 'Program pelatihan bahasa Jepang dari level N5 hingga N3 di PPBJ Aceh',
};

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Program Pelatihan</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program pelatihan bahasa Jepang dari level N5 hingga N3 dengan metode pembelajaran terbaik dan fasilitas memadai
            </p>
          </div>
        </div>
      </div>

      {/* Pelatihan Bahasa Jepang (Level N5–N3) Section */}
      <section id="pelatihan" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pelatihan Bahasa Jepang (Level N5–N3)</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Program kami dirancang untuk membawa peserta dari tingkat pemula hingga siap bekerja di Jepang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Level N5 */}
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-6">
                N5
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Level N5</h3>
              <p className="text-gray-600 mb-6 text-center">
                Awal belajar bahasa Jepang, mempelajari huruf hiragana/katakana dan kosakata dasar
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Pengenalan huruf hiragana dan katakana</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Kosakata dasar (100+ kata)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Tata bahasa dasar</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Kalimat sederhana</span>
                </li>
              </ul>
            </div>

            {/* Level N4 */}
            <div className="bg-green-50 p-8 rounded-xl border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-6">
                N4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Level N4</h3>
              <p className="text-gray-600 mb-6 text-center">
                Kemampuan dasar untuk berkomunikasi dalam situasi sederhana
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Pola kalimat kompleks</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Kosakata menengah (300+ kata)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Latihan percakapan harian</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Membaca dan menulis kanji dasar</span>
                </li>
              </ul>
            </div>

            {/* Level N3 */}
            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xl mx-auto mb-6">
                N3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Level N3</h3>
              <p className="text-gray-600 mb-6 text-center">
                Kemampuan menengah lanjut untuk lingkungan profesional
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Tata bahasa kompleks</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Kosakata luas (600+ kata)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Simulasi kerja & budaya Jepang</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Kemampuan berkomunikasi profesional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metode Pembelajaran Section */}
      <section id="metode" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Metode Pembelajaran</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pendekatan pembelajaran yang efektif dan menyesuaikan dengan kebutuhan dunia kerja di Jepang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
                💼
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simulasi Kerja</h3>
              <p className="text-gray-600 mb-4">
                Pembelajaran tidak hanya seputar bahasa, tetapi juga simulasi situasi kerja nyata di Jepang. 
                Peserta dilatih untuk berkomunikasi secara profesional dalam lingkungan kerja.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Latihan wawancara kerja</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Simulasi komunikasi di tempat kerja</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Praktik situasi kerja nyata</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
                🌏
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pendekatan Budaya</h3>
              <p className="text-gray-600 mb-4">
                Pemahaman terhadap budaya Jepang merupakan bagian penting dari program kami. 
                Ini mempersiapkan peserta untuk beradaptasi dengan lingkungan sosial dan kerja di Jepang.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Pemahaman nilai-nilai sosial Jepang</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Etika kerja dan sopan santun</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Kebiasaan dan norma sosial di Jepang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section id="fasilitas" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fasilitas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan fasilitas terbaik untuk mendukung proses pembelajaran peserta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
                🏫
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kelas Ber-AC</h3>
              <p className="text-gray-600">
                Ruang kelas yang nyaman dan ber-AC dengan fasilitas multimedia untuk mendukung proses pembelajaran.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
                📚
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perpustakaan</h3>
              <p className="text-gray-600">
                Koleksi buku dan media pembelajaran bahasa Jepang yang lengkap dan terbaru untuk referensi belajar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
                💻
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Laboratorium Bahasa</h3>
              <p className="text-gray-600">
                Laboratorium bahasa digital dengan peralatan terkini untuk latihan mendengarkan dan berbicara.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
                📞
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ruangan Konsultasi</h3>
              <p className="text-gray-600">
                Ruang khusus untuk konsultasi dengan pengajar mengenai kendala belajar dan perkembangan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
                🛋️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Area Istirahat</h3>
              <p className="text-gray-600">
                Area yang nyaman untuk peserta beristirahat dan bersosialisasi antar sesama peserta.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">
                📶
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Akses Internet</h3>
              <p className="text-gray-600">
                Akses internet WiFi gratis untuk mendukung pembelajaran digital dan penelitian mandiri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Program Pelatihan Anda?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Bergabunglah bersama ribuan peserta yang telah sukses melalui program kami
          </p>
          <a 
            href="/kontak"
            className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform inline-block"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}