// Exibir botão ao rolar
window.addEventListener("scroll", () => {
    const botao = document.getElementById("topo");
    if (window.scrollY > 300) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
});

// Rolar para o topo
document.getElementById("topo").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const rodape = document.querySelector("footer p");
const ano = new Date().getFullYear();
rodape.innerHTML = `@LimaTech - ${ano}`;


const elementos = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

elementos.forEach((el) => observer.observe(el));


window.addEventListener('load', () => {
    const msg = document.getElementById('mensagem-bemvindo');
    msg.style.display = 'block';
  });