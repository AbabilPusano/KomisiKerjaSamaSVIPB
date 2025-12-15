import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami - PPBJ Aceh',
  description: 'Profil, visi, misi, legalitas dan kerja sama PPBJ Aceh',
};

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pusat Pelatihan Bahasa Jepang di Aceh yang siap membawa Anda bekerja di Jepang dengan program pelatihan terstandar
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Profil PPBJ Aceh</h2>
              <p className="text-lg text-gray-600 mb-6">
                Pusat Pelatihan Bahasa Jepang (PPBJ) Aceh adalah lembaga pendidikan yang berfokus pada pengembangan kompetensi bahasa Jepang serta persiapan untuk bekerja di Jepang. Berdiri dengan komitmen untuk memberikan pelatihan berkualitas tinggi dengan kurikulum terstandarisasi yang siap mengantarkan peserta menjadi tenaga kerja profesional di Jepang.
              </p>
              <p className="text-lg text-gray-600">
                Kami memiliki pengalaman bertahun-tahun dalam membentuk tenaga kerja siap kerja yang mampu bersaing di pasar global. Fokus utama kami adalah memberikan pendidikan yang tidak hanya mengutamakan aspek bahasa, tetapi juga pemahaman budaya dan etika kerja yang relevan dengan lingkungan kerja di Jepang.
              </p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
        </div>
      </div>

      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami memiliki pandangan jangka panjang dan tujuan yang jelas dalam membentuk tenaga kerja unggul
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi</h3>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-6">
                  V
                </div>
                <p className="text-lg text-gray-600">
                  Mewujudkan tenaga kerja Indonesia yang profesional dan kompetitif di pasar global, khususnya di Jepang, melalui pendidikan dan pelatihan berkualitas tinggi.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Misi</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <p className="text-lg text-gray-600">
                    Menyelenggarakan pelatihan bahasa Jepang yang berkualitas tinggi berbasis standar internasional.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <p className="text-lg text-gray-600">
                    Membangun jejaring internasional untuk penyaluran tenaga kerja yang profesional.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <p className="text-lg text-gray-600">
                    Membentuk karakter peserta yang siap bekerja di lingkungan multibudaya.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <p className="text-lg text-gray-600">
                    Memberikan pendidikan yang komprehensif mencakup aspek bahasa, budaya, dan etika kerja.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legalitas & Kerja Sama</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PPBJ Aceh beroperasi di bawah naungan institusi pendidikan resmi dengan legalitas yang sah serta memiliki kerja sama strategis dengan berbagai institusi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Legalitas Lembaga</h3>
              <p className="text-gray-600 mb-6">
                PPBJ Aceh beroperasi secara legal di bawah naungan institusi pendidikan resmi dengan dokumen legalitas yang lengkap dan terdaftar secara resmi di instansi terkait. Kami berkomitmen untuk menjalankan operasional sesuai dengan peraturan perundang-undangan yang berlaku.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border rounded-lg p-4 text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm">Izin/Ikon {item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kemitraan Strategis</h3>
              <p className="text-gray-600 mb-6">
                Kami menjalin kerja sama dengan berbagai institusi pendidikan, pemerintah, dan perusahaan di dalam dan luar negeri untuk mendukung program pelatihan dan penyaluran kerja peserta.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full mt-1 mr-4"></div>
                  <span className="text-gray-600">Kemitraan dengan lembaga pelatihan di Jepang</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full mt-1 mr-4"></div>
                  <span className="text-gray-600">Kerja sama dengan perusahaan penerima di Jepang</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full mt-1 mr-4"></div>
                  <span className="text-gray-600">Kemitraan dengan institusi pendidikan lokal</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full mt-1 mr-4"></div>
                  <span className="text-gray-600">Kolaborasi dengan lembaga pemerintah terkait</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bergabunglah dengan Komunitas Pembelajar di PPBJ Aceh
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Mewujudkan impian bekerja di Jepang bersama ribuan alumni kami
          </p>
          <a
            href="https://www.jotform.com/app/252954455231458"
                target="_blank"
            className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform inline-block"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}