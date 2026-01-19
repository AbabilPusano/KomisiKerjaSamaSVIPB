# Struktur Komponen Header dan Footer

## Lokasi Komponen

### 1. Komponen Shared (Umum)
**Lokasi:** `app/components/`

- **Header.tsx** - Header umum untuk halaman-halaman yang tidak menggunakan multi-bahasa
- **Footer.tsx** - Footer umum untuk halaman-halaman yang tidak menggunakan multi-bahasa
- **index.ts** - Export file untuk kemudahan import

**Cara Menggunakan:**
```tsx
import { Header, Footer } from "@/app/components";

export default function MyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Konten halaman Anda */}
      </div>
      <Footer />
    </>
  );
}
```

### 2. Komponen VCC (Multi-bahasa)
**Lokasi:** `app/vcc/components/`

- **Navbar.tsx** - Navbar dengan fitur multi-bahasa (ID/EN)
- **Footer.tsx** - Footer dengan fitur multi-bahasa (ID/EN)
- **LanguageProvider.tsx** - Provider untuk context bahasa

**Cara Menggunakan:**
```tsx
import { LanguageProvider } from "@/app/vcc/components/LanguageProvider";
import Navbar from "@/app/vcc/components/Navbar";
import Footer from "@/app/vcc/components/Footer";

export default function MyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        {/* Konten halaman Anda */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
```

## Penggunaan di Halaman

### Halaman yang Menggunakan Komponen Shared (`app/components/`)
- ✅ `/ppbj` - Program Pelatihan Bahasa Jepang
- Halaman lain yang tidak memerlukan multi-bahasa

### Halaman yang Menggunakan Komponen VCC (`app/vcc/components/`)
- ✅ `/` (Homepage) - Menggunakan multi-bahasa
- ✅ `/about` - Menggunakan multi-bahasa
- `/programs` - Menggunakan multi-bahasa
- `/contacts` - Menggunakan multi-bahasa

### Halaman dengan Header/Footer Custom
- ✅ `/pekerjamigranaceh` - Memiliki navbar dan footer custom dengan branding khusus

## Fitur Komponen

### Header/Navbar Shared
- Logo IPB University
- Navigasi: Beranda, Tentang Kami, Program, PPBJ, Pekerja Migran Aceh, Kontak
- Mobile responsive dengan hamburger menu
- Sticky navigation

### Footer Shared
- Informasi Komisi Kerja Sama Sekolah Vokasi IPB
- Quick links
- Program links
- Informasi kontak

### Navbar VCC (Multi-bahasa)
- Toggle bahasa Indonesia/English
- Logo IPB University
- Navigasi dengan terjemahan
- Mobile responsive

### Footer VCC (Multi-bahasa)
- Konten dengan terjemahan
- Quick links
- Program links
- Informasi kontak

## Catatan
- Gunakan komponen shared (`app/components/`) untuk halaman baru yang tidak memerlukan multi-bahasa
- Gunakan komponen VCC (`app/vcc/components/`) untuk halaman yang memerlukan fitur multi-bahasa
- Untuk halaman dengan branding khusus, buat header/footer custom sesuai kebutuhan
