# 🌐 Website CV Adlan

Website CV pribadi yang modern dan interaktif dengan fitur dark mode.

## 📁 Struktur File

```
tgus/
├── index.html       # File HTML utama
├── style.css        # File styling CSS
├── script.js        # File JavaScript untuk interaktivitas
├── foto adlan.jpeg  # Foto profil
├── tgus.html        # File HTML lama (backup)
└── README.md        # Dokumentasi ini
```

## 🚀 Cara Menjalankan Website

### Metode 1: Buka Langsung di Browser (Paling Mudah)
1. Buka File Explorer / File Manager
2. Navigasi ke folder `/vercel/sandbox/tgus/`
3. **Klik kanan** pada file `index.html`
4. Pilih **"Open With"** → **Browser pilihan Anda** (Chrome, Firefox, Edge, dll)
5. Website akan terbuka di browser! 🎉

### Metode 2: Drag & Drop
1. Buka browser Anda (Chrome, Firefox, Edge, dll)
2. Buka File Explorer dan navigasi ke folder `/vercel/sandbox/tgus/`
3. **Drag file `index.html`** ke jendela browser
4. Website akan terbuka! 🎉

### Metode 3: Menggunakan Python HTTP Server (Untuk Development)
```bash
# Masuk ke folder tgus
cd /vercel/sandbox/tgus

# Jalankan server Python
python3 -m http.server 8000

# Buka browser dan akses:
# http://localhost:8000
```

### Metode 4: Menggunakan Node.js HTTP Server
```bash
# Install http-server (jika belum ada)
npm install -g http-server

# Masuk ke folder tgus
cd /vercel/sandbox/tgus

# Jalankan server
http-server -p 8000

# Buka browser dan akses:
# http://localhost:8000
```

## ✨ Fitur Website

### 🎨 Desain Modern
- Gradient background yang menarik
- Animasi smooth pada setiap elemen
- Responsive design (mobile-friendly)
- Border dan shadow yang elegan

### 🌓 Dark Mode
- Toggle antara mode terang dan gelap
- Preferensi tersimpan di browser (localStorage)
- Klik tombol "🌙 Mode Gelap" untuk mengaktifkan

### 🎭 Interaktivitas
- **Foto Profil**: Klik untuk animasi rotasi 360°
- **Skill Tags**: Klik untuk efek checkmark
- **Hover Effects**: Semua elemen memiliki animasi hover
- **Typing Effect**: Teks profesi muncul dengan efek mengetik

### 📱 Responsive
- Tampilan optimal di desktop, tablet, dan mobile
- Layout menyesuaikan ukuran layar

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur website
- **CSS3**: Styling dengan gradient, flexbox, dan animasi
- **JavaScript (Vanilla)**: Interaktivitas tanpa library eksternal
- **LocalStorage API**: Menyimpan preferensi dark mode

## 📝 Cara Edit Konten

### Mengubah Informasi Pribadi
Edit file `index.html`:
- **Nama**: Ubah di tag `<h1>Adlan</h1>`
- **Profesi**: Ubah di tag `<p class="profession">`
- **Pendidikan**: Ubah di section dengan class `education-list`
- **Keahlian**: Tambah/ubah di section `skills`
- **Kontak**: Ubah email dan telepon di section `contact-info`

### Mengubah Warna
Edit file `style.css`:
- **Gradient Utama**: Ubah di `body { background: linear-gradient(...) }`
- **Warna Aksen**: Ubah nilai `#667eea` dan `#764ba2`

### Menambah Fitur JavaScript
Edit file `script.js` untuk menambahkan interaktivitas baru.

## 🎯 Tips Penggunaan

1. **Ganti Foto**: Pastikan file foto bernama `foto adlan.jpeg` atau ubah nama di `index.html`
2. **Backup**: File `tgus.html` adalah backup dari versi sebelumnya
3. **Browser Modern**: Gunakan browser terbaru untuk hasil terbaik
4. **Inspect Element**: Tekan F12 di browser untuk melihat console dan debug

## 📞 Support

Jika ada pertanyaan atau masalah:
- Email: adlankh05@gmail.com
- Telepon: 0812-3499-00

## 📄 Lisensi

© 2025 Adlan. All rights reserved.

---

**Selamat menggunakan! 🎉**
Jangan lupa klik foto profil untuk animasi menarik! 😄
