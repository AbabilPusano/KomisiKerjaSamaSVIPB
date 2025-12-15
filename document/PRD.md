# **Product Requirements Document (PRD)**

**Proyek:** Website Company Profile PPBJ Aceh

**Versi:** 1.1 (Revisi Tech Stack)

**Status:** Draft / Perancangan

**Tanggal:** 15 Desember 2025

## **1\. Pendahuluan**

### **1.1 Latar Belakang**

Pusat Pelatihan Bahasa Jepang (PPBJ) Aceh membutuhkan media informasi digital yang terpusat untuk menjangkau calon peserta pelatihan, orang tua, dan mitra industri. Saat ini, informasi mengenai program, legalitas, dan alur kerja ke Jepang perlu disajikan secara transparan dan profesional untuk meningkatkan kredibilitas lembaga.

### **1.2 Tujuan Proyek**

Tujuan utama pengembangan website ini adalah:

1. **Informasi Terpusat:** Menyediakan sumber informasi resmi mengenai profil, visi misi, dan legalitas PPBJ Aceh.  
2. **Akuisisi Peserta:** Menarik minat calon peserta pelatihan bahasa Jepang melalui penjelasan program yang menarik.  
3. **Membangun Kepercayaan (Trust):** Meningkatkan kepercayaan orang tua dan mitra melalui transparansi alur kerja dan testimoni.  
4. **Edukasi Alur:** Menjelaskan secara visual jalur belajar mulai dari nol hingga bekerja di Jepang.  
5. **Performa Tinggi & SEO Friendly:** Membangun website yang sangat cepat dan mudah ditemukan di Google menggunakan teknologi *modern web*.

## **2\. Target Pengguna (User Personas)**

Berdasarkan analisis kebutuhan, berikut adalah segmentasi pengguna website:

### **2.1 Calon Peserta (Primary User)**

* **Profil:** Lulusan SMA/SMK atau Mahasiswa/Fresh Graduate (Usia 18-24 tahun).  
* **Motivasi:** Ingin bekerja di Jepang, mencari gaji tinggi, tertarik budaya Jepang.  
* **Kebutuhan Informasi:** Biaya pelatihan, durasi belajar, tingkatan level (N5-N3), dan kepastian penyaluran kerja.

### **2.2 Orang Tua / Wali (Secondary User)**

* **Profil:** Orang tua dari calon peserta.  
* **Motivasi:** Memastikan anak mereka aman, lembaga kredibel (tidak penipuan), dan biaya sebanding dengan hasil.  
* **Kebutuhan Informasi:** Legalitas lembaga, bukti sukses (testimoni), lokasi fisik, dan kontak resmi.

### **2.3 Mitra & Institusi (Tertiary User)**

* **Profil:** Perusahaan penerima di Jepang (Kumiai/Kaisha) atau LPK lain.  
* **Motivasi:** Mencari partner penyedia SDM yang berkualitas.  
* **Kebutuhan Informasi:** Visi misi, standar kurikulum, dan profesionalisme lembaga.

## **3\. Arsitektur Informasi (Sitemap)**

Struktur navigasi website dirancang sebagai berikut:

1. **Home (Beranda)**  
2. **Tentang Kami**  
   * Profil PPBJ Aceh  
   * Visi & Misi  
   * Legalitas & Kerja Sama  
3. **Program**  
   * Pelatihan Bahasa Jepang (Level N5–N3)  
   * Metode Pembelajaran  
   * Fasilitas  
4. **Alur ke Jepang**  
   * Pendaftaran & Seleksi  
   * Pelatihan  
   * Sertifikasi  
   * Penyaluran Kerja  
5. **Testimoni & Galeri**  
6. **Berita / Kegiatan**  
7. **FAQ (Tanya Jawab)**  
8. **Kontak**  

## **4\. Spesifikasi Fungsional & Konten**

### **4.1 Halaman Home**

* **Hero Section:** Judul utama ("Belajar Bahasa Jepang & Siap Kerja di Jepang"), sub-judul persuasif, dan tombol *Call to Action* (CTA) "Daftar Sekarang".  
* **Keunggulan:** 3-4 poin utama mengapa memilih PPBJ Aceh (misal: Kurikulum Terstandar, Koneksi Luas).  
* **Ringkasan Alur:** Infografis sederhana 4 langkah ke Jepang.

### **4.2 Halaman Tentang Kami**

* **Konten:** Sejarah singkat, afiliasi dengan SV IPB (jika ada), dan fokus cabang Aceh.  
* **Legalitas:** Menampilkan scan/icon izin operasional untuk kredibilitas.

### **4.3 Halaman Program**

* **Detail Level:** Penjelasan kompetensi yang akan dicapai pada level N5, N4, dan N3.  
* **Metode:** Penjelasan bahwa pembelajaran mencakup simulasi kerja dan budaya, bukan hanya bahasa.

### **4.4 Halaman Alur ke Jepang (Fitur Kunci)**

* **Visual Step-by-Step:** Diagram interaktif atau statis yang menjelaskan perjalanan peserta:  
  1. **Pendaftaran:** Syarat administrasi.  
  2. **Pelatihan:** Durasi dan materi.  
  3. **Ujian:** JLPT/JFT dan Skill Test.  
  4. **Penempatan:** Wawancara user dan keberangkatan.

### **4.5 Fitur Pendukung Lainnya**

* **Testimoni:** Slider atau grid berisi foto alumni, nama, tempat kerja di Jepang, dan kutipan singkat.  
* **Kontak Form:** Terhubung ke Email atau langsung ke WhatsApp Admin.  
* **Google Maps Embed:** Menampilkan lokasi fisik kantor PPBJ Aceh.  
* **LMS Placeholder:** Tombol navigasi "Login Siswa" yang mengarah ke halaman login.

### **4.6 Panel Admin (Dashboard)**

* **Teknologi:** Dibangun menyatu dengan Next.js menggunakan *protected routes*.  
* **Fitur Utama:**  
  * Manajemen Berita/Artikel (Rich Text Editor).  
  * Manajemen Testimoni Alumni.  
  * Pengaturan Informasi Dasar (Kontak, Alamat).

## **5\. Spesifikasi Teknis (Technology Stack) \- UPDATE**

Peralihan ke teknologi *Modern Javascript Stack* untuk performa, SEO, dan skalabilitas antarmuka yang lebih baik.

### **5.1 Core Framework**

* **Framework:** Next.js 14/15 (App Router).  
* **Language:** TypeScript (Untuk keamanan kode dan standar industri) atau JavaScript.  
* **Rendering:** Server Side Rendering (SSR) untuk SEO maksimal pada halaman publik.

### **5.2 Styling & UI**

* **CSS Framework:** Tailwind CSS.  
* **Icons:** Lucide React atau React Icons.  
* **Animation:** Framer Motion (untuk transisi halus antar halaman).

### **5.3 Backend & Database**

* **Backend Logic:** Next.js Server Actions / API Routes.  
* **Database:** PostgreSQL (Disarankan via Supabase/Neon) atau MySQL.  
* **ORM:** Prisma (Object-Relational Mapping) untuk interaksi database yang mudah dan aman.  
* **Auth:** NextAuth.js (Auth.js) untuk login admin.

### **5.4 Infrastruktur & Deployment**

* **Platform:** Vercel (Rekomendasi utama untuk Next.js) atau VPS dengan Docker.  
* **Image Hosting:** Cloudinary atau Vercel Blob (untuk optimasi gambar otomatis).

## **6\. Desain Antarmuka (UI/UX Guidelines)**

### **6.1 Layout Global**

* **Header:** Sticky Navbar dengan efek *blur* (glassmorphism).  
* **Footer:** Informasi Copyright, Link Cepat, Alamat Lengkap, Media Sosial.

### **6.2 Gaya Visual (Visual Identity)**

* **Warna Dominan:** Menyesuaikan branding PPBJ (misal: Merah/Putih atau Biru Navy).  
* **Tipografi:** *Inter* atau *Plus Jakarta Sans* (Modern & Clean).  
* **Imagery:** Menggunakan komponen next/image untuk *lazy loading* otomatis.

## **7\. Rencana Pengembangan (Roadmap)**

### **Fase 1: Perancangan & Setup (Minggu 1\)**

* Finalisasi PRD & UI Mockup (Figma).  
* Inisialisasi Project Next.js (npx create-next-app).  
* Setup Database & Prisma Schema.

### **Fase 2: Pengembangan Komponen (Minggu 2\)**

* Membuat komponen UI dasar (Button, Card, Navbar, Footer).  
* Slicing halaman Home dan Tentang Kami.  
* Implementasi Responsif Mobile.

### **Fase 3: Integrasi Data & Admin (Minggu 3\)**

* Setup Database (PostgreSQL/MySQL).  
* Membuat Halaman Admin Dashboard.  
* Integrasi fitur Berita & Testimoni (CRUD).

### **Fase 4: Optimasi & Deploy (Minggu 4\)**

* Audit SEO & Performance (Lighthouse Score).  
* Deployment ke Vercel.  
* Testing user experience.

## **8\. Kriteria Penerimaan (Acceptance Criteria)**

Website dinyatakan selesai jika:

1. Skor **Core Web Vitals** (Lighthouse) hijau (\>90) untuk Performance dan SEO.  
2. Navigasi antar halaman instan (tanpa reload penuh).  
3. Tampilan responsif sempurna di perangkat Mobile dan Desktop.  
4. Admin dapat mengupdate berita dan testimoni dengan mudah.  
5. Formulir kontak berfungsi baik.