function showAlert() {
    alert('Botão de Alerta acionado!');
}        

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

function showHeightWidth() {
    var dimensions = document.getElementById('dimensions');
    dimensions.innerHTML = 
        "Altura da tela: " + window.innerHeight + "px.<br>" +
        "Largura da tela: " + window.innerWidth + "px.";
}

function hideHeightWidth() {
    var dimensions = document.getElementById('dimensions');
    dimensions.innerHTML = "Clique nos botões para ver suas funcionalidades.";
}

function showBrowserInfo() {
    var userAgent = navigator.userAgent;
    var browserName;

    if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Mozilla Firefox';
    } else if (userAgent.indexOf('SamsungBrowser') > -1) {
        browserName = 'Samsung Internet';
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        browserName = 'Opera';
    } else if (userAgent.indexOf('Trident/') > -1) {
        browserName = 'Internet Explorer';
    } else if (userAgent.indexOf('Edge/') > -1) {
        browserName = 'Microsoft Edge';
    } else if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Apple Safari';
    } else {
        browserName = 'Desconhecido';
    }
    
    var navigatorLanguage = navigator.language || navigator.userLanguage;

    var dimensions = document.getElementById('dimensions');
    dimensions.innerHTML = "Navegador: " + browserName + "<br>" + "Idioma do navegador: " + navigatorLanguage;
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

function calcularFatorial() {
    var input = document.getElementById('number').value;
    var n = parseInt(input);
    if (isNaN(n) || n < 0) {
        document.getElementById('result').innerHTML = "Por favor, insira um número inteiro não negativo.";
        return;
    }
    
    var resultado = fatorial(n);
    var formula = Array.from({ length: n }, (_, i) => n - i).join(' × ');
    if (n > 1) {
        formula += ' × 1';
    }
    document.getElementById('result').innerHTML = `${formula} = ${resultado}`;
}

function showData() {
    var hoje = new Date();
    var hora = hoje.getHours();
    var minutos = hoje.getMinutes();
    var mensagem = "";

    if (hora >= 6 && hora < 12) {
        mensagem = "Bom dia!"
    }else if (hora >= 12 && hora < 18){
        mensagem = "Boa tarde!"
    }else if (hora >= 18 && hora < 24){
        mensagem = "Boa noite!"
    }else {
        mensagem = "Boa madrugada!"
    }

    var dimensions = document.getElementById('dimensions');
    dimensions.innerHTML = `${mensagem} Agora são ${hora}:${minutos}.`;
}

function changeColors() {
    const root = document.documentElement;
    const iconImage = document.querySelector('.change-collors img');

    const cardBackgroundColor = '#a7a7a7';
    const cardTextColor = '#000000';

    if (root.style.getPropertyValue('--background-color') === '#19191a') {
        root.style.setProperty('--background-color', '#dcdcdc');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--nav-background-color', '#515151');
        root.style.setProperty('--button-background-color', '#4caf50');
        root.style.setProperty('--button-hover-background-color', '#388e3c');
        root.style.setProperty('--link-background-color', '#2196f3');
        root.style.setProperty('--link-hover-background-color', '#1976d2');

        document.querySelectorAll('.card, .screen-dimensions').forEach(card => {
            card.style.backgroundColor = cardBackgroundColor;
            card.style.color = cardTextColor;
        });

        iconImage.src = '../Img/dayIcon.png';
    } else {
        root.style.setProperty('--background-color', '#19191a');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--nav-background-color', '#020202');
        root.style.setProperty('--button-background-color', '#37a5c8');
        root.style.setProperty('--button-hover-background-color', '#4eb1d1');
        root.style.setProperty('--link-background-color', '#3c096c');
        root.style.setProperty('--link-hover-background-color', '#5a189a');

        document.querySelectorAll('.card, .screen-dimensions').forEach(card => {
            card.style.backgroundColor = '#373739'; 
            card.style.color = '#ffffff'; 
        });

        iconImage.src = '../Img/nightIcon.png';
    }
}


function diaDaSemana() {
    var dia = document.getElementById("diaInput").value;
    var m = "";

    switch (parseInt(dia)) {
        case 1: 
            m = "Segunda-feira.";
            break;
        case 2:
            m = "Terça-feira.";
            break;
        case 3:
            m = "Quarta-feira.";
            break;
        case 4:
            m = "Quinta-feira.";
            break;
        case 5:
            m = "Sexta-feira.";
            break;
        case 6:
            m = "Sábado.";
            break;
        case 7:
            m = "Domingo.";
            break;
        default:
            m = "Dia inválido";
            break;
    }

    document.getElementById('dia').innerHTML = `Hoje é ${m}`;
}

function calculaIdade() {
    var idade = document.getElementById("idadeInput").value;
    var m = "";

    idade == 0? m = "Tu não existe. " :
    idade <= 12? m = "Você é criança." :
    idade >= 12 && idade <= 17? m = "Você é adolescente. " :
    idade >= 18 && idade <= 59? m = "Você é adulto. ":
    idade > 60 && idade < 129? m = "Você é idoso. " : 
    idade > 130? m = "Você é imortal.": m = "Erro";

    document.getElementById('idade').innerHTML = m;
}