// Dados dos jogos
const gamesData = {
    'Watch Dogs 2': {
        description: 'Em Watch Dogs 2, entre no mundo da hacking como Marcus Holloway, um jovem hacker brilhante. A cidade de São Francisco se torna o seu playground enquanto você luta contra o sistema corrupto.',
        rating: 'Empty',
        genre: 'Ação/Aventura',
        platform: 'PC',
        year: '2016',
        playtime2025: 'Empty'
    },
    'Granny Remake': {
        description: 'Um jogo de terror e sobrevivência onde você deve escapar da casa de uma avó assustadora enquanto ela procura por você.',
        rating: 'Empty',
        genre: 'Terror/Sobrevivência',
        platform: 'PC',
        year: '2017',
        playtime2025: 'Empty'
    },
};

// Elementos do modal
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalGameDescription = document.getElementById('modalGameDescription');
const modalRating = document.getElementById('modalRating');
const modalGenre = document.getElementById('modalGenre');
const modalPlatform = document.getElementById('modalPlatform');
const modalYear = document.getElementById('modalYear');
const modalPlayTime2025 = document.getElementById('modalPlayTime2025')
const modalClose = document.getElementById('modalClose');

// Função para abrir o modal
function openModal(gameName) {
    const gameData = gamesData[gameName];
    
    if (gameData) {
        modalTitle.textContent = gameName;
        modalGameDescription.textContent = gameData.description;
        modalRating.textContent = gameData.rating;
        modalGenre.textContent = gameData.genre;
        modalPlatform.textContent = gameData.platform;
        modalYear.textContent = gameData.year;
        modalPlayTime2025.textContent = gameData.playtime2025
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Função para fechar o modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora do conteúdo
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Fechar modal com botão X
modalClose.addEventListener('click', closeModal);

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Adicionar eventos aos botões "eye"
document.addEventListener('DOMContentLoaded', () => {
    const eyeButtons = document.querySelectorAll('.btn-eye');
    
    eyeButtons.forEach(button => {
        const card = button.closest('.card');
        const gameTitle = card.querySelector('h2')?.textContent;
        
        if (gameTitle && gamesData[gameTitle]) {
            button.addEventListener('click', () => openModal(gameTitle));
            button.style.cursor = 'pointer';
        } else {
            button.disabled = true;
            button.style.opacity = '0.5';
            button.style.cursor = 'not-allowed';
        }
    });
});