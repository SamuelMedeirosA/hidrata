// script.js

// Função para criar uma bolha
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Tamanho da bolha aleatório
    const size = Math.random() * 60 + 20; // Tamanho entre 20px e 80px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Posição horizontal aleatória
    bubble.style.left = `${Math.random() * 100}vw`;

    // Tempo de animação aleatório
    const duration = Math.random() * 5 + 5; // Duração entre 5s e 10s
    bubble.style.animationDuration = `${duration}s`;

    // Adiciona a função de clique para todas as bolhas
    bubble.addEventListener('click', handleBubbleClick);

    // Adiciona a bolha ao body
    document.body.appendChild(bubble);

    // Remove a bolha após a animação
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Função para tratar o clique em qualquer bolha
function handleBubbleClick() {
    // Adiciona um efeito ao clicar na bolha
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.3s ease-in-out';

    // Remove a bolha após a animação
    setTimeout(() => {
        window.location.href = 'home.html'; // Redireciona para a próxima página
    }, 300); // Atraso para mostrar o efeito
}

// Criar bolhas a cada intervalo
setInterval(createBubble, 500);

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
