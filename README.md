# Nyusur - Aplikasi Pelaporan Kerusakan Jalan

Nyusur adalah sebuah aplikasi web yang dirancang untuk memudahkan masyarakat melaporkan kerusakan jalan. Pengguna dapat mendaftar, login, dan mengirimkan laporan lengkap dengan foto kerusakan secara *real-time*.

Proyek ini menggunakan **Firebase** sebagai backend untuk menangani autentikasi pengguna, penyimpanan data laporan (di Firestore), dan penyimpanan gambar (di Firebase Storage).

---

## 📸 Tampilan

<img src="Frontend\public\Gambar\jalanberlubang1.jpg" alt="Tampilan Halaman Utama Nyusur" width="100%">

---

## 🚀 Fitur Utama

* **Autentikasi Pengguna:** Sistem pendaftaran (Register) dan masuk (Login) yang aman menggunakan **Firebase Authentication**.
* **Buat Laporan:** Formulir intuitif untuk mengirim laporan baru, termasuk kemampuan untuk mengunggah foto kerusakan jalan langsung dari perangkat pengguna.
* **Penyimpanan Cloud:** Laporan dan foto yang diunggah disimpan dengan aman di **Firebase Storage** dan data laporannya dicatat di **Firestore Database**.
* **Galeri Laporan:** Halaman publik di mana semua pengguna dapat melihat laporan kerusakan yang telah dikirim.
* **Dasbor Pengguna:** Halaman khusus (`Pantau Laporan Kamu`) di mana pengguna dapat melihat riwayat dan status dari laporan yang telah mereka buat.
* **Desain Responsif:** Dibangun dengan **Tailwind CSS** agar dapat diakses dengan baik di perangkat desktop maupun mobile.

---

## 🛠️ Teknologi yang Digunakan

* **Frontend:**
    * HTML5
    * CSS3 / Tailwind CSS
    * JavaScript (ES6+)
* **Backend (BaaS - Backend as a Service):**
    * **Firebase Authentication:** Untuk mengelola login dan registrasi pengguna.
    * **Firestore Database:** Untuk menyimpan data laporan (detail, lokasi, timestamp, dll.).
    * **Firebase Storage:** Untuk meng-host file gambar yang diunggah pengguna.
* **Development Tools:**
    * **Vite:** Sebagai build tool dan development server yang cepat.
    * **npm:** Untuk manajemen dependensi.

---

## ⚙️ Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan salinan proyek ini di komputer lokal Anda:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/](https://github.com/)[NAMA_PENGGUNA_ANDA]/[NAMA_REPOSITORI_ANDA].git
    cd [NAMA_REPOSITORI_ANDA]
    ```

2.  **Install semua dependensi:**
    ```bash
    npm install
    ```

3.  **Siapkan Konfigurasi Firebase:**
    * Buat proyek baru di [Firebase Console](https://console.firebase.google.com/).
    * Aktifkan **Authentication** (pilih metode Email/Password).
    * Buat **Firestore Database**.
    * Buat **Firebase Storage**.
    * Salin objek `firebaseConfig` dari pengaturan proyek Anda.
    * Buat file konfigurasi Firebase di proyek Anda (misalnya: `firebase-config.js`) dan tempelkan konfigurasi Anda di sana. *Pastikan file ini tidak di-upload ke GitHub dengan menambahkannya ke `.gitignore`.*

4.  **Jalankan development server (Vite):**
    ```bash
    npm run dev
    ```

5.  Buka `http://localhost:5173` (atau port yang ditampilkan di terminal) di browser Anda.
