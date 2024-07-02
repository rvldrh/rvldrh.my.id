document.addEventListener("DOMContentLoaded", function() {
    // Menggunakan Motion.js untuk animasi fade-in saat halaman dimuat pertama kali
    motion("#header .header-content").set("opacity", 0).animate({ opacity: 1 }, { duration: 800 });
    motion("#sekolah .card-wrap").set("opacity", 0).animate({ opacity: 1 }, { duration: 800 });
    motion("#gallery .blog-wrap").set("opacity", 0).animate({ opacity: 1 }, { duration: 800 });
    motion("#portofolio .blog-wrap").set("opacity", 0).animate({ opacity: 1 }, { duration: 800 });
    motion("#project .testi-content").set("opacity", 0).animate({ opacity: 1 }, { duration: 800 });
    motion(".hireme").set("opacity", 0).animate({ opacity: 1 }, { duration: 800 });
    motion(".footer .footer-about").set("opacity", 0).animate({ opacity: 1 }, { duration: 800 });
});
