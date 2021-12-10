//player de audio
let player = document.getElementById("player");

let capa = document.getElementById("thumbnail");

let nome = document.getElementById("nomeArtista");

//Evento que vai executar uma função a cada alteração no time do player
//evento timeupdate ocorre quando a posição de reprodução de um áudio / vídeo mudou.
player.addEventListener("timeupdate", progresso);

//Array das Capas
let capas = ["assets/image/cris-brown.jpg","assets/image/Erik Hecht.jpg","assets/image/Justin Bieber.jpg","assets/image/Yves Larock.jpg"]

//Array dos Nomes
let nomeArtista = ["Chris Brown", "Erik Hecht", "Justin Bieber", "Yves Larock"]


//Definindo a música inicial
let i = 0;

//Definindo a capa inicial
capa.src = capas[i];

//Definindo o nome inicial
nome.innerHTML = `Artista: ${nomeArtista[i]}`;

//array que armazena as musicas
let musicas = document.getElementsByClassName("musicas");

//atribuindo musica do array para o player
player.src = musicas[i].getAttribute("src");

//botão pause
let btnPause = document.getElementsByClassName("btnPlayer")[2];

//console.log(player.src);

function back() {

    if (i >= 1){
        i--;
        console.log(i);
        capa.src = capas[i];
        nome.innerHTML = `Artista: ${nomeArtista[i]}`;
        console.log(capa.src);
    }

    if( (i < musicas.length) && (i >= 0) ) {
        player.pause();
        
        player.src = musicas[i].getAttribute("src");
        player.load();
        player.play();     
    }else
    {
        console.log("Acabou as Músicas");
    }
}

function retroceder() {

    player.currentTime -= 10;

}

var reproduzindo = "";

function reproduzir() {

    if ( reproduzindo == true) {
        btnPause.src = "./assets/icons-player/play-circle.svg"
        player.pause();
        console.log("pausou");

        reproduzindo = false;

    }else{
        player.play();
        //console.log(i);
        
        btnPause.src = "./assets/icons-player/pause.svg"
        //let pause = false;

        console.log("reproduziu");

        reproduzindo = true;

        //progresso();

        volume();
    }

}

function parar() {

    player.pause();
    player.currentTime = 0;

    btnPause.src = "./assets/icons-player/play-circle.svg"

    //zera o pause
    reproduzindo = "";
}

function pause(){

    player.pause();
}

function avancar() {

    player.currentTime += 10;

}

function next() {

    if (i < ((musicas.length) - 1)){
        i++;
        console.log(i);
        capa.src = capas[i];
        console.log(capa.src);
        nome.innerHTML = `Artista: ${nomeArtista[i]}`;
        console.log(nome);
    }

    if(i < musicas.length){
        player.pause();
        
        player.src = musicas[i].getAttribute("src");
        player.load();
        player.play();     

    }else
    {
        console.log("Acabou as Músicas");
    }

}

function progresso() {
    
    let progresso = document.getElementById("progresso");

    //Fazendo o progresso na barra
    progresso.style.width = Math.floor((player.currentTime / player.duration) * 100) + '%'; 

    let tempoDecorrido = document.getElementById("inicio");

    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(player.currentTime));

    let duracao = document.getElementById("fim");
    duracao.textContent = segundosParaMinutos(Math.floor(player.duration))

}

function segundosParaMinutos(segundos){

    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ":" + campoSegundos;
}

//função para definir volume
function volume () {

    let inputVol = document.getElementById("volume");
    player.volume = inputVol.value / 100;
    
    //console.log(inputVol.value);
}