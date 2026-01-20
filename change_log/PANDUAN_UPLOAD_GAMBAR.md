# Panduan Upload Gambar

## Lokasi Gambar yang Diperlukan

### 1. Gambar untuk Cards di `/programs/japan`

Buat folder: `public/images/programs/`

Upload 3 gambar berikut:

1. **pekerja-migran-aceh.jpg**
   - Ukuran: 800x600px (rasio 4:3)
   - Konten: Foto terkait program Pekerja Migran Aceh
   
2. **ppbj.jpg**
   - Ukuran: 800x600px (rasio 4:3)
   - Konten: Foto terkait Program Pelatihan Bahasa Jepang
   
3. **chuo.jpg**
   - Ukuran: 800x600px (rasio 4:3)
   - Konten: Foto terkait program Joint Degree dengan Chuo Joho Institute

### 2. Gambar untuk Halaman `/programs/japan/chuo`

Buat folder: `public/images/chuo/`

Upload 4 gambar berikut:

1. **hero-placeholder.jpg**
   - Ukuran: 1920x1080px (rasio 16:9)
   - Konten: Gambar hero untuk halaman Chuo (bisa kampus Chuo atau mahasiswa)
   
2. **student-activities.jpg**
   - Ukuran: 1200x900px (rasio 4:3)
   - Konten: Dokumentasi aktivitas mahasiswa di Chuo Joho Institute
   
3. **batch1-departure.jpg**
   - Ukuran: 1200x900px (rasio 4:3)
   - Konten: Foto keberangkatan Angga (Batch 1)
   
4. **batch2-departure.jpg**
   - Ukuran: 1200x900px (rasio 4:3)
   - Konten: Foto keberangkatan Ernesto dan Hauzan (Batch 2)

## Cara Upload Gambar

### Menggunakan File Explorer:

1. Buka folder project: `d:\Project\magang\KomisiKerjaSamaSVIPB`
2. Navigasi ke `public\images\`
3. Buat folder `programs` (jika belum ada)
4. Buat folder `chuo` (jika belum ada)
5. Copy gambar ke folder yang sesuai

### Menggunakan Command Line:

```powershell
# Buat folder jika belum ada
New-Item -ItemType Directory -Path "public\images\programs" -Force
New-Item -ItemType Directory -Path "public\images\chuo" -Force

# Copy gambar (sesuaikan path sumber gambar Anda)
Copy-Item "path\to\your\image.jpg" "public\images\programs\pekerja-migran-aceh.jpg"
Copy-Item "path\to\your\image.jpg" "public\images\programs\ppbj.jpg"
Copy-Item "path\to\your\image.jpg" "public\images\programs\chuo.jpg"

Copy-Item "path\to\your\image.jpg" "public\images\chuo\hero-placeholder.jpg"
Copy-Item "path\to\your\image.jpg" "public\images\chuo\student-activities.jpg"
Copy-Item "path\to\your\image.jpg" "public\images\chuo\batch1-departure.jpg"
Copy-Item "path\to\your\image.jpg" "public\images\chuo\batch2-departure.jpg"
```

## Tips Optimasi Gambar

1. **Kompres gambar** sebelum upload untuk performa website yang lebih baik
2. **Gunakan format WebP** jika memungkinkan (lebih efisien dari JPG)
3. **Target ukuran file**: < 500KB per gambar
4. **Gunakan tools online** seperti:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (untuk Mac)

## Verifikasi

Setelah upload gambar, buka browser dan cek:

1. http://localhost:3000/programs/japan - Pastikan semua card menampilkan gambar
2. http://localhost:3000/programs/japan/chuo - Pastikan hero dan gallery menampilkan gambar

Jika gambar tidak muncul:
- Refresh browser (Ctrl+F5)
- Cek console browser untuk error
- Pastikan nama file dan path sesuai
- Restart dev server jika perlu

## Struktur Folder Final

```
public/
└── images/
    ├── programs/
    │   ├── pekerja-migran-aceh.jpg
    │   ├── ppbj.jpg
    │   └── chuo.jpg
    └── chuo/
        ├── hero-placeholder.jpg
        ├── student-activities.jpg
        ├── batch1-departure.jpg
        └── batch2-departure.jpg
```
