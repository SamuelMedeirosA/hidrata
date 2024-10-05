// Adiciona a animação de fade-in na próxima página
window.onload = function() {
    document.body.classList.add('fade-in');
    setTimeout(() => {
        document.body.classList.add('visible');
    }, 50); // Um pequeno atraso para garantir que o CSS seja aplicado corretamente
};

function mudaCor(n){
    if(n == 1){
        document.querySelector("#ONE").style.backgroundColor = "#dddddd";
        document.querySelector("#TWO").style.backgroundColor = "#FFF";
        document.querySelector("#THREE").style.backgroundColor = "#FFF";
    };
    
    if(n == 2){
        document.querySelector("#TWO").style.backgroundColor = "#dddddd";
        document.querySelector("#THREE").style.backgroundColor = "#FFF";
        document.querySelector("ONE").style.backgroundColor = "#FFF";
    };
    
    if(n == 3){
        document.querySelector("#THREE").style.backgroundColor = "#dddddd";
        document.querySelector("#TWO").style.backgroundColor = "#FFF";
        document.querySelector("ONE").style.backgroundColor = "#FFF";
    };
}

function updateValues() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activity = parseFloat(document.querySelector('input[name="activity"]:checked').value);

    document.getElementById('age-value').textContent = `${age} anos`;
    document.getElementById('weight-value').textContent = `${weight} kg`;
    

    let waterIntakePerKg;
    if (age <= 17) {
        waterIntakePerKg = 40;
    } else if (age <= 55) {
        waterIntakePerKg = 35;
    } else if (age <= 65) {
        waterIntakePerKg = 30;
    } else {
        waterIntakePerKg = 25;
    }

    const waterIntake = ((weight * waterIntakePerKg) / 1000 * activity).toFixed(1);
    document.getElementById('water-amount').textContent = `Recomendação de água: ${waterIntake}L`;

    // Alterando a altura da água no copo
    const waterHeight = Math.min(10, waterIntake); // Máximo de 10L representado
    const cupWater = document.getElementById('water');
    //console.log(waterHeight);
    cupWater.style.height = `${(waterHeight / 10) * 200}px`; // Ajusta a altura da água no copo
}

let currentWrap = 1; // Começar na primeira div
let startX, endX;
let pag = 1;

// Função para mostrar a div ativa
function showWrap(wrapNumber) {
    const wrap1 = document.getElementById('wrap1');
    const wrap2 = document.getElementById('wrap2');
    
    // Oculta ambas
    wrap1.classList.remove('active');
    wrap2.classList.remove('active');
    
    // Mostra a div correta
    if (wrapNumber === 1) {
        wrap1.classList.add('active');
    } else {
        wrap2.classList.add('active');
    }
}

// Exibir a primeira div ao carregar a página
showWrap(currentWrap);

// Adicionar eventos de toque
document.querySelector('.full').addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

document.querySelector('.full').addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
});

// Função para detectar swipe
function handleSwipe() {
    const swipeDistance = endX - startX;
    const minSwipeDistance = 50; // Distância mínima para considerar como um swipe

    if (swipeDistance > minSwipeDistance) {
        if(pag==1){
        // Redirecionar para a página inicial quando o usuário desliza para a esquerda
        window.location.href = 'index.html'; // Altere para o caminho da sua página inicial
        }if(pag==2){currentWrap = 1; pag=1}
    } else {
        if(pag==1){
        pag=2;
        // Swipe para a direita
            currentWrap = currentWrap === 1 ? 2 : 1;
        }
    }

    // Mostrar a div correta
    showWrap(currentWrap);
}

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

    // Adiciona a bolha ao body
    document.body.appendChild(bubble);

    // Remove a bolha após a animação
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}


// Criar bolhas a cada intervalo
setInterval(createBubble, 500);
