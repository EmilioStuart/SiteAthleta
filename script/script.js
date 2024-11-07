// Seleciona o carrossel e todos os pontinhos
var carousel = document.querySelector('.carousel');
var navDots = document.querySelectorAll('.nav-dot');

// Variáveis que controlam o carrossel
var currentIndex = 0;
var totalCards = navDots.length;
var intervalTime = 30000; // intervalo em ms

// Função para atualizar a posição do carrossel
function updateCarousel() {
    // Calcula o quanto de deslocamento será necessário para avançar um card
    var offset = -currentIndex * 100; // Deslocamento em porcentagem
    carousel.style.transform = 'translateX(' + offset + '%)'; // Aplica o deslocamento ao translateX(), fazendo com que os cards se movam para a esquerda.

    // Faz com que os pontinhos fiquem de acordo com a posição atual do carrossel
    for (var i = 0; i < navDots.length; i++) {
        if (i === currentIndex) {
            navDots[i].classList.add('active');
        } else {
            navDots[i].classList.remove('active');
        }
    }
}

// Função para ir para o próximo card
function nextCard() {
    currentIndex++;
    // Se passou do último card, volta para o primeiro card
    if (currentIndex >= totalCards) {
        currentIndex = 0;
    }
    updateCarousel(); // Atualiza o carrossel
}

// Função para voltar ao card anterior (card a esquerda)
function previous() {
    // Se o index ficar menor que 0, ele irá para o último card
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - 1;
    }
    updateCarousel();
}

// Coloca um intervalo de tempo para avançar o carrossel sozinho
setInterval(nextCard, intervalTime);

// Faz com que quando clique nos pontinhos, o carrossel vá direto ao card correspondente
for (var j = 0; j < navDots.length; j++) {
    (function(index) {
        navDots[j].addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    })(j);
}

// Inicializa o carrossel
updateCarousel();