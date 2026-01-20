# Perubahan Struktur Program Jepang

## Ringkasan Perubahan

Telah dilakukan restrukturisasi halaman program Jepang dengan perubahan sebagai berikut:

### 1. Pemindahan Route PPBJ
- **Dari**: `/ppbj`
- **Ke**: `/programs/japan/ppbj`
- Semua file dan folder telah dipindahkan
- Folder lama `/ppbj` telah dihapus

### 2. Halaman Baru: Joint Degree 3+2 Chuo
- **Route**: `/programs/japan/chuo`
- **File**: `app/programs/japan/chuo/page.tsx`
- Konten berdasarkan dokumen `document/Skema 3+2 Chuo.md`
- Mencakup:
  - Hero section
  - Program overview
  - Program objectives (3 tujuan)
  - Skema program 3+2 (4 tahap)
  - Informasi beasiswa (Nikkei & Yomiuri Shimbun)
  - Status implementasi (Batch 1 & 2)
  - Galeri (3 foto)
  - Informasi lebih lanjut

### 3. Update Halaman `/programs/japan`
- **Layout**: Diubah dari 2 kolom menjadi 3 kolom (1x3 grid)
- **Card baru**: Ditambahkan card untuk "Joint Degree 3+2 Chuo"
- **Gambar**: Setiap card sekarang memiliki gambar di bawah judul
- **Link update**: Link PPBJ diperbarui ke `/programs/japan/ppbj`

## Struktur Folder Baru

```
app/
├── programs/
│   └── japan/
│       ├── page.tsx (updated - 3 cards dengan gambar)
│       ├── ppbj/ (dipindahkan dari /ppbj)
│       │   ├── page.tsx
│       │   ├── layout.tsx
│       │   ├── globals.css
│       │   ├── metadata.ts
│       │   ├── components/
│       │   └── tentang-kami/
│       └── chuo/ (BARU)
│           └── page.tsx
```

## Gambar yang Diperlukan

### Untuk `/programs/japan` (3 card images):
1. `public/images/programs/pekerja-migran-aceh.jpg`
2. `public/images/programs/ppbj.jpg`
3. `public/images/programs/chuo.jpg`

### Untuk `/programs/japan/chuo` (4 images):
1. `public/images/chuo/hero-placeholder.jpg`
2. `public/images/chuo/student-activities.jpg`
3. `public/images/chuo/batch1-departure.jpg`
4. `public/images/chuo/batch2-departure.jpg`

**Catatan**: Semua path gambar saat ini menggunakan placeholder. Silakan ganti dengan gambar yang sesuai.

## Testing Checklist

- [ ] Akses `/programs/japan` - pastikan 3 card tampil dengan benar
- [ ] Klik card "Pekerja Migran Aceh" - harus mengarah ke `/pekerjamigranaceh`
- [ ] Klik card "PPBJ" - harus mengarah ke `/programs/japan/ppbj`
- [ ] Klik card "Joint Degree 3+2 Chuo" - harus mengarah ke `/programs/japan/chuo`
- [ ] Akses `/programs/japan/ppbj` - pastikan halaman PPBJ masih berfungsi
- [ ] Akses `/programs/japan/chuo` - pastikan halaman baru tampil dengan benar
- [ ] Akses `/ppbj` - harus error 404 (route lama sudah dihapus)

## Styling

Semua halaman menggunakan styling yang konsisten dengan halaman PPBJ:
- Gradient backgrounds
- Card-based layouts
- Responsive design
- Hover effects dan transitions
- Modern color schemes (orange untuk Chuo, blue untuk PPBJ, emerald untuk Pekerja Migran)

## Next Steps

1. **Upload gambar** ke folder yang sesuai
2. **Test semua route** untuk memastikan tidak ada broken links
3. **Update navigasi** jika ada link lain yang mengarah ke `/ppbj` lama
4. **SEO**: Pertimbangkan untuk menambahkan metadata untuk halaman Chuo
