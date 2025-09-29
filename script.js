// Rolagem suave
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Envio de formulário
const form = document.getElementById("formContato");
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato.");
    form.reset();
});

// Menu hamburguer
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // transforma o botão em X
    menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});
