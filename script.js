const botaoPlayPause = document.getElementById("play-pause");

const botaoAvancar = document.getElementById("proximo");

const botaoVoltar = document.getElementById("anterior")

const nomeCapitulo = document.getElementById("capitulo")

const audioCapitulo = document.getElementById("audio-capitulo");

const numeroCapitulos = 10;
let taTocando = 0;

let capituloAtual = 1;


function trocarNomeFaixa() {
    nomeCapitulo.innerText = "Capítulo " + capituloAtual;
}

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar() {
    if ( taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
    
}

function voltarFaixa(){
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
    
}


botaoPlayPause.addEventListener("click", tocarOuPausar);

botaoAvancar.addEventListener("click", proximaFaixa);

botaoVoltar.addEventListener("click", voltarFaixa)





//! CÓDIGO CERTIFICADO
//* intensivojs15

//* https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazBaMi1lYWNoeVYyNGNvSm1IU2VOcWN1ZTdwZ3xBQ3Jtc0tsV2FEMjFRLWROTUwyOS1ianFCRnZHakEyel9ydkRDYXBEVV8yd01nWDZfYUJwZnVaQXNvTE4ya1RRNjVpUkhrcFRtV1RLcGk5ZENEQjJZenpnYVNzWkRuaHRjVk80VDl0S1JEQk1CNVRPN24xN3VPaw&q=https%3A%2F%2Fdlp.hashtagtreinamentos.com%2Fjavascript%2Fintensivao%2Fcertificado%2Fvalidacao&v=0OKGGpMPeyM