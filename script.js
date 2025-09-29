// Rolagem suave para seções
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
link.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
});
});


// Envio de formulário (simples)
const form = document.getElementById("formContato");
form.addEventListener("submit", e => {
e.preventDefault();
alert("Mensagem enviada com sucesso! Entraremos em contato.");
form.reset();
});