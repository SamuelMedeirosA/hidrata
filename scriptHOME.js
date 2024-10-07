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
        document.querySelector("#ONE").style.backgroundColor = "#FFF";
    };
    
    if(n == 3){
        document.querySelector("#THREE").style.backgroundColor = "#dddddd";
        document.querySelector("#TWO").style.backgroundColor = "#FFF";
        document.querySelector("#ONE").style.backgroundColor = "#FFF";
    };
}

mudaCor(1);

function updateValues() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    let activity = parseFloat(document.querySelector('input[name="activity"]:checked').value);
    

    document.getElementById('age-value').textContent = `${age} anos`;
    document.getElementById('weight-value').textContent = `${weight} kg`;
    

    var waterIntakePerKg;
    if (age <= 17) {
        waterIntakePerKg = 40;
    } else if (age <= 55) {
        waterIntakePerKg = 35;
    } else if (age <= 65) {
        waterIntakePerKg = 30;
    } else {
        waterIntakePerKg = 25;
    }

    
    let waterIntake = ((weight * waterIntakePerKg) / 1000 * activity).toFixed(1);

    if(waterIntake <=1.5){
        document.getElementById('waterP').style.color = `#00b4d8`;
        document.getElementById('waterP').style.marginBottom = "100px";
    }else{
        document.getElementById('waterP').style.color = `white`;
        document.getElementById('waterP').style.marginBottom = "0";
    }

    document.getElementById('waterP').textContent = `${waterIntake}L`;
    document.getElementById('msgInicial').textContent = ``;

    // Alterando a altura da água no copo
    const waterHeight = Math.min(10, waterIntake); // Máximo de 10L representado
    const cupWater = document.getElementById('water');
    //console.log(waterHeight);
    cupWater.style.height = `${(waterHeight / 6) * 200}px`; // Ajusta a altura da água no copo
}

let currentWrap = 1; // Começar na primeira div
let startX, endX;
let pag = 1;

// Função para mostrar a div ativa
function showWrap(wrapNumber) {
    const wrap1 = document.getElementById('wrap1');
    const wrap2 = document.getElementById('wrap2');
    const config = document.getElementById('config');
    const btnback = document.getElementById('btnback');
    const full = document.getElementById('full');
    
    // Oculta ambas
    // wrap1.classList.remove('active');
    // wrap2.classList.remove('active');
    wrap1.style.display = "none";
    config.style.display = "none";
    full.style.display = "block";
    wrap1.style.opacity = "0";
    wrap2.style.display = "none";
    btnback.style.display = "none";
    wrap2.style.opacity = "0";
    
    // Mostra a div correta
    if (wrapNumber === 1) {
        //wrap1.classList.add('active');
        wrap1.style.display = "flex";
        config.style.display = "block";
        setTimeout(() => {
            wrap1.style.opacity = "1";
        }, 100);
        setTimeout(() => {
            full.style.display = "none";
        }, 1000);
    } else {
        //wrap2.classList.add('active');
        wrap2.style.display = "flex";
        btnback.style.display = "block";
        setTimeout(() => {
            wrap2.style.opacity = "1";
        }, 100);
        setTimeout(() => {
            full.style.display = "none";
        }, 500);
    }
}

    if (window.innerWidth <= 1000) {
        showWrap(currentWrap);
    }


// Exibir a primeira div ao carregar a página

// Adicionar eventos de toque
// document.querySelector('.full').addEventListener('touchstart', function(event) {
//     startX = event.touches[0].clientX;
// });

// document.querySelector('.full').addEventListener('touchend', function(event) {
//     endX = event.changedTouches[0].clientX;
//     handleSwipe();
// });

// Função para detectar swipe
// function handleSwipe() {
//     const swipeDistance = endX - startX;
//     const minSwipeDistance = 50; // Distância mínima para considerar como um swipe

//     if (swipeDistance > minSwipeDistance) {
//         if(pag==1){
//         // Redirecionar para a página inicial quando o usuário desliza para a esquerda
//         window.location.href = 'index.html'; // Altere para o caminho da sua página inicial
//         }if(pag==2){currentWrap = 1; pag=1}
//     } else {
//         if(pag==1){
//         pag=2;
//         // Swipe para a direita
//             currentWrap = currentWrap === 1 ? 2 : 1;
//         }
//     }

//     // Mostrar a div correta
//     showWrap(currentWrap);
// }

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Define se a bolha vai ter uma foto (50% das bolhas)
    const hasPhoto = Math.random() > 1;

    if (hasPhoto) {
        //bubble.classList.add('photo');
        //bubble.style.backgroundImage = `url(${photos[photoIndex]})`;
        //bubble.style.backgroundSize = 'cover';
        //bubble.style.backgroundPosition = 'center';
        //photoIndex = (photoIndex + 1) % photos.length; // Intercalar entre as fotos
    } else {
        bubble.style.background = 'rgba(255, 255, 255, 0.5)'; // Transparência para bolhas sem fotos
    }

    // Tamanho da bolha aleatório
    const size = Math.random() * 60 + 20; // Tamanho entre 20px e 80px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Posição horizontal ajustada para garantir que a bolha fique dentro da tela
    const positionLeft = Math.random() * (window.innerWidth - size); // Garante que não ultrapasse as bordas
    bubble.style.left = `${positionLeft}px`;

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
    }, duration * 800);
}


// Criar bolhas a cada intervalo
setInterval(createBubble, 300);

let isWrap1Active = true;

function back(pag) {
    // Adiciona a classe fade-out para iniciar o efeito de desaparecimento
    document.body.classList.add('fade-out');

    // Atraso para esperar o fade-out completar antes de redirecionar
    if(pag == 0){
        window.location.href = 'index.html';
    }else{
        if(isWrap1Active) {
            showWrap(2);
        }else{
            showWrap(1);
        }
        isWrap1Active = !isWrap1Active;
    }
}
