# PPBJ Aceh - Website Company Profile

Website company profile untuk Pusat Pelatihan Bahasa Jepang (PPBJ) Aceh yang menyediakan informasi tentang program pelatihan bahasa Jepang dan jalur karir ke Jepang.

## Deskripsi

Website ini dibangun untuk memenuhi kebutuhan informasi terpusat bagi calon peserta pelatihan, orang tua, dan mitra industri. Tujuan utama website ini adalah:

- Menyediakan sumber informasi resmi mengenai profil, visi misi, dan legalitas PPBJ Aceh
- Menarik minat calon peserta pelatihan bahasa Jepang melalui penjelasan program yang menarik
- Meningkatkan kepercayaan orang tua dan mitra melalui transparansi alur kerja dan testimoni
- Menjelaskan secara visual jalur belajar mulai dari nol hingga bekerja di Jepang
- Menjadi basis infrastruktur web yang nantinya dapat diintegrasikan dengan sistem LMS

## Teknologi yang Digunakan

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Rendering**: Server Side Rendering (SSR) untuk SEO maksimal
- **Styling**: Tailwind CSS
- **Icons**: Lucide React atau React Icons
- **Animation**: Framer Motion (untuk transisi halus antar halaman)
- **Backend Logic**: Next.js Server Actions / API Routes
- **Database**: PostgreSQL (Disarankan via Supabase/Neon) atau MySQL
- **ORM**: Prisma
- **Auth**: NextAuth.js (Auth.js) untuk login admin
- **Platform Deployment**: Vercel

## Fitur Utama

### Halaman Utama
- **Home**: Hero section dengan CTA, keunggulan PPBJ, dan ringkasan alur ke Jepang
- **Tentang Kami**: Profil PPBJ Aceh, visi & misi, serta legalitas
- **Program**: Detail pelatihan bahasa Jepang (N5-N3), metode pembelajaran, dan fasilitas
- **Alur ke Jepang**: Penjelasan visual langkah-langkah dari pendaftaran hingga penyaluran kerja
- **Testimoni & Galeri**: Ulasan alumni dan kegiatan pelatihan
- **Berita / Kegiatan**: Update terbaru tentang PPBJ
- **FAQ**: Jawaban atas pertanyaan yang sering diajukan
- **Kontak**: Formulir kontak, informasi lokasi, dan media sosial

### Dashboard Admin
- Manajemen berita/artikel (Rich Text Editor)
- Manajemen testimoni alumni
- Pengaturan informasi dasar (kontak, alamat)

## Struktur Proyek

```
app/
├── components/         # Komponen UI reusable
├── admin/             # Dashboard admin
│   ├── layout.tsx     # Layout admin
│   ├── page.tsx       # Dashboard utama
│   └── login.tsx      # Halaman login admin
├── api/               # API routes
│   └── contact/       # Route untuk form kontak
├── tentang-kami/      # Halaman tentang kami
├── program/           # Halaman program pelatihan
├── alur-ke-jepang/    # Halaman alur ke Jepang
├── testimoni-galeri/  # Halaman testimoni & galeri
├── berita/            # Halaman berita
├── faq/               # Halaman FAQ
├── kontak/            # Halaman kontak
├── layout.tsx         # Layout utama
├── page.tsx           # Halaman home
└── not-found.tsx      # Halaman 404
```

## Instalasi

1. Clone repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
cd ppbj-aceh-coba
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env.local
# Edit .env.local dan tambahkan konfigurasi database
```

4. Jalankan aplikasi dalam mode development:
```bash
npm run dev
```

Aplikasi akan berjalan di http://localhost:3000

## Kontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b fitur/AwesomeFeature`)
3. Commit perubahan (`git commit -m 'Add some AwesomeFeature'`)
4. Push ke branch (`git push origin fitur/AwesomeFeature`)
5. Buat Pull Request

## Lisensi

Distributed under the MIT License. See `LICENSE` for more information.