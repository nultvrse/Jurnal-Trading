# Khusnul Trading Journal

Installable PWA trading journal.

## Cara pakai cepat
1. Install Node.js.
2. Buka folder ini di VS Code/terminal.
3. Jalankan:
   ```bash
   npm install
   npm run dev
   ```
4. Untuk build:
   ```bash
   npm run build
   ```

## Firebase Login
Login Google/email sudah disiapkan, tapi kamu perlu isi `firebaseConfig` di `src/main.jsx`.
Kalau belum diisi, app tetap bisa dipakai offline/local tanpa login.

## Supaya bisa di-install di HP
Deploy ke Vercel/Netlify, buka linknya di Chrome, lalu pilih **Install App** / **Add to Home Screen**.
