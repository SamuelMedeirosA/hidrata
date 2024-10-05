// script.js

// Função para criar uma bolha
const photos = ['/hidrata/img/G.jpg', '/hidrata/img/NI.jpg', '/hidrata/img/S.jpg', '/hidrata/img/T.jpg', '/hidrata/img/J.jpg', '/hidrata/img/N.jpg', '/hidrata/img/JP.jpg'];
let photoIndex = 0;

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Define se a bolha vai ter uma foto (50% das bolhas)
    const hasPhoto = Math.random() > 0.6;

    if (hasPhoto) {
        bubble.classList.add('photo');
        bubble.style.backgroundImage = `url(${photos[photoIndex]})`;
        bubble.style.backgroundSize = 'cover';
        bubble.style.backgroundPosition = 'center';
        photoIndex = (photoIndex + 1) % photos.length; // Intercalar entre as fotos
    } else {
        bubble.style.background = 'rgba(255, 255, 255, 0.5)'; // Transparência para bolhas sem fotos
    }

    // Tamanho da bolha aleatório
    const size = Math.random() * 60 + 20; // Tamanho entre 20px e 80px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Posição horizontal aleatória
    bubble.style.left = `${Math.random() * 100}vw`;

    // Tempo de animação aleatório
    const duration = Math.random() * 5 + 5; // Duração entre 5s e 10s
    bubble.style.animationDuration = `${duration}s`;

    // Adiciona a função de estouro ao passar o mouse
    bubble.addEventListener('mouseover', () => {
        bubble.classList.add('burst');
        setTimeout(() => {
            bubble.remove();
        }, 100); // Tempo para o estouro ocorrer
    });

    // Adiciona a bolha ao body
    document.body.appendChild(bubble);

    // Remove a bolha automaticamente após a animação, caso não seja estourada
    setTimeout(() => {
        if (!bubble.classList.contains('burst')) {
            bubble.remove();
        }
    }, duration * 700);
}



// Criar bolhas a cada intervalo
setInterval(createBubble, 300);

// Função para tratar o clique nas bolhas e aplicar a transição suave
function handleBubbleClick() {
    // Adiciona a classe fade-out para iniciar o efeito de desaparecimento
    document.body.classList.add('fade-out');

    // Atraso para esperar o fade-out completar antes de redirecionar
    setTimeout(() => {
        window.location.href = 'home.html'; // Redireciona para a próxima página
    }, 600); // Corresponde ao tempo da transição no CSS (0.6s)
}

// Adiciona a animação de fade-in na próxima página
window.onload = function() {
    document.body.classList.add('fade-in');
    setTimeout(() => {
        document.body.classList.add('visible');
    }, 50); // Um pequeno atraso para garantir que o CSS seja aplicado corretamente
};

/********************************/
