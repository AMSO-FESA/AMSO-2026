// ==========================================
// 1. DATA KODE HEADER (NAVIGASI & LOGO)
// ==========================================
const headerHTML = `
    <!-- TOMBOL AUDIO KECIL & TRANSPARAN DI POJOK KANAN ATAS -->
    <button id="audioToggleBtn" class="audio-float-btn" onclick="toggleAudio()" title="Putar/Matikan Musik">
        <i id="audioIcon" class="fa-solid fa-volume-xmark"></i>
    </button>

    <div class="logo-group">
        <div class="logo-item"><img src="yasarini.png" alt="Logo Yasarini" title="Yayasan Ardhya Garini"></div>
        <div class="logo-item"><img src="fesa.png" alt="Logo FESA" title="Festival Edukasi Sekolah Angkasa"></div>
        <div class="logo-item"><img src="amso.png" alt="Logo AMSO" title="Angkasa Mathematic and Science Olympiad"></div>
    </div>

    <nav>
        <a href="index.html"><i class="fa-solid fa-house"></i> Beranda</a>
        <a href="timeline.html"><i class="fa-solid fa-calendar-days"></i> Timeline</a>
        <a href="kategori.html"><i class="fa-solid fa-layer-group"></i> Kategori</a>
        <a href="bukupanduan.html"><i class="fa-solid fa-clipboard-check"></i> Buku Panduan</a>
        
        <div class="dropdown">
            <a href="#"><i class="fa-solid fa-folder-open"></i> Data <i class="fa-solid fa-angle-down" style="font-size: 10px; margin-left: 2px;"></i></a>
            <div class="dropdown-content">
                <a href="peserta.html"><i class="fa-solid fa-users" style="margin-right: 6px;"></i> Data Peserta</a>
                <a href="administrasi.html"><i class="fa-solid fa-envelope-open-text" style="margin-right: 6px;"></i> Administrasi</a>
            </div>
        </div>

        <a href="pengumuman.html"><i class="fa-solid fa-trophy"></i> Pengumuman</a>
    </nav>
`;

// ==========================================
// 2. DATA KODE FOOTER (HAK CIPTA & KONTAK)
// ==========================================
const footerHTML = `
    <div class="container">
        <div class="footer-content">
            <div class="footer-brand">
                <h3>AMSO 2026</h3>
                <p>Angkasa Mathematic and Science Olympiad</p>
            </div>

            <div class="footer-contacts">
                <a href="https://wa.me/6287878691995" target="_blank" class="contact-btn wa" title="WhatsApp">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a href="https://www.instagram.com/yasarinipusat/" target="_blank" class="contact-btn ig" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 Angkasa Mathematic and Science Olympiad. All Rights Reserved.</p>
        </div>
    </div>
`;

// ==========================================
// 3. FUNGSI PEMUTAR MUSIK LATAR (AUDIO PLAYER)
// ==========================================
function toggleAudio() {
    const audio = document.getElementById("bgAudio");
    const btn = document.getElementById("audioToggleBtn");
    const icon = document.getElementById("audioIcon");

    if (!audio) return;

    if (audio.paused) {
        audio.play().then(() => {
            if (btn) btn.classList.add("playing");
            if (icon) icon.className = "fa-solid fa-volume-high";
        }).catch(err => {
            console.log("Audio play prevented:", err);
        });
    } else {
        audio.pause();
        if (btn) btn.classList.remove("playing");
        if (icon) icon.className = "fa-solid fa-volume-xmark";
    }
}

// Buka blokir pemutaran otomatis pada klik pertama pengunjung
document.addEventListener("click", function initAutoplayOnce() {
    const audio = document.getElementById("bgAudio");
    const btn = document.getElementById("audioToggleBtn");
    const icon = document.getElementById("audioIcon");

    if (audio && audio.paused) {
        audio.play().then(() => {
            if (btn) btn.classList.add("playing");
            if (icon) icon.className = "fa-solid fa-volume-high";
        }).catch(() => {});
    }
    document.removeEventListener("click", initAutoplayOnce);
}, { once: true });

// ==========================================
// 4. SUNTIK OTOMATIS HEADER & FOOTER KE HALAMAN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const headerEl = document.getElementById("header-placeholder");
    const footerEl = document.getElementById("footer-placeholder");

    if (headerEl) headerEl.innerHTML = headerHTML;
    if (footerEl) footerEl.innerHTML = footerHTML;
});
