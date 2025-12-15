import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PPBJ Aceh</h3>
            <p className="text-gray-400 mb-4">
              Pusat pelatihan bahasa Jepang untuk persiapan kerja di Jepang.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">📘</a>
              <a href="#" className="text-gray-400 hover:text-white">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white">📷</a>
              <a href="#" className="text-gray-400 hover:text-white">💼</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Program</h4>
            <ul className="space-y-2">
              <li><Link href="/program" className="text-gray-400 hover:text-white">Level N5-N3</Link></li>
              <li><Link href="/program#metode" className="text-gray-400 hover:text-white">Metode Pembelajaran</Link></li>
              <li><Link href="/program#fasilitas" className="text-gray-400 hover:text-white">Fasilitas</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Informasi</h4>
            <ul className="space-y-2">
              <li><Link href="/tentang-kami" className="text-gray-400 hover:text-white">Tentang Kami</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Alur ke Jepang</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Testimoni</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Alamat: Jl. Contoh Alamat PPBJ</li>
              <li>Telp: +62 651 123 4567</li>
              <li>Email: info@ppbj-aceh.ac.id</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} PPBJ Aceh - Pusat Pelatihan Bahasa Jepang. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}