const btnMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("categorias-navbar");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Carregar tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
    atualizarIcone(savedTheme);
}

// Clique no botão
themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    atualizarIcone(newTheme);
});

// Trocar ícone
function atualizarIcone(theme) {
    themeToggle.innerHTML =
        theme === "dark"
            ? '<i class="bi bi-sun-fill"></i>'
            : '<i class="bi bi-moon-fill"></i>';
}

const carousel = document.querySelector(".carousel");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

const scrollAmount = 270; // largura do card + gap

btnNext.addEventListener("click", () => {
    carousel.scrollLeft += scrollAmount;
});

btnPrev.addEventListener("click", () => {
    carousel.scrollLeft -= scrollAmount;
});

