/* =========================
   MENU MOBILE
========================= */
function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.querySelector(".menu-overlay");

    if (!menuToggle || !navLinks || !overlay) return;

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    overlay.addEventListener("click", closeMenu);

    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    function closeMenu() {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        menuToggle.classList.remove("active");
    }
}

/* =========================
   BOTÃO FLUTUANTE WHATSAPP
========================= */
function initWhatsappButton() {
    const whatsappBtn = document.getElementById("whatsapp-float");
    if (!whatsappBtn) return;

    window.addEventListener("scroll", () => {
        // mostra o botão quando scroll passa de 100px
        whatsappBtn.classList.toggle("show", window.scrollY > 100);
    });
}

/* =========================
   INICIALIZAÇÃO AO CARREGAR
========================= */
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initWhatsappButton();
});