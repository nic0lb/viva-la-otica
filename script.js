document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    /* ======================================= */
    /* 1. MENU MOBILE                         */
    /* ======================================= */
    menuToggle.addEventListener('click', () => {
        const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
        navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', !isOpened);
        menuToggle.textContent = isOpened ? "☰" : "✕";
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = "☰";
        });
    });

    /* ======================================= */
    /* 2. ENVIO FORMULÁRIO (AJAX - FORMSPREE) */
    /* ======================================= */
    const form = document.getElementById("formContato");
    
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = "Enviando...";
            btn.disabled = true;

            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert("Obrigado! Sua mensagem foi enviada com sucesso para a Viva La Ótica.");
                    form.reset();
                } else {
                    alert("Ops! Ocorreu um erro no servidor. Tente novamente em instantes.");
                }
            } catch (error) {
                alert("Erro de conexão. Verifique sua internet.");
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }

    /* ======================================= */
    /* 3. ANIMAÇÃO DE REVELAÇÃO (REVEAL)      */
    /* ======================================= */
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100; // Distância para o elemento aparecer
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Executa uma vez ao carregar para mostrar o que já está na tela

    /* ======================================= */
    /* 4. ROLAGEM SUAVE                       */
    /* ======================================= */
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if(targetId === "#") return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
