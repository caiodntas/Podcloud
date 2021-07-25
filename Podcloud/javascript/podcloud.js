/* CONVERSÃO ENTRE AS TELAS DE EPISÓDIO E A TELA DE SOBRE */
    /* DECLARAÇÃO DOS ELEMENTOS QUE SERÃO USADAS NA FUNÇÃO DE TROCA */
    const episodes = document.getElementById("episodes-section");
    const about = document.getElementById("about-section");
    const episodesText = document.getElementById("episodes-button");
    const aboutText = document.getElementById("about-button");

    /* FUNÇÃO QUE DEVE SER EXECUTADA QUANDO O BOTÃO DA TELA DE EPISÓDIOS FOR PRESSIONADO */
    function openepisodesscreen() {
        /* ESCONDE A TELA SOBRE E MOSTRA A TELA DE EPISÓDIOS */
        episodes.removeAttribute('hidden');
        about.setAttribute('hidden', true);

        /* MUDANÇA NO ESTILO DO BOTÃO */
        if (episodesText.classList.contains('active-text') == false) {
            aboutText.classList.remove('active-text');
            episodesText.classList.toggle('active-text');
        }
    }

    /* FUNÇÃO QUE DEVE SER EXECUTADA QUANDO O BOTÃO DA TELA SOBRE FOR PRESSIONADO */
    function openaboutscreen() {
        /* ESCONDE A TELA DE EPISÓDIOS E MOSTRA A TELA SOBRE */
        about.removeAttribute('hidden');
        episodes.setAttribute('hidden', true);

        /* MUDANÇA NO ESTILO DO BOTÃO */
        if (aboutText.classList.contains('active-text') == false) {
            episodesText.classList.remove('active-text');
            aboutText.classList.toggle('active-text');
        }
    }

/* SEGUIDORES DO CANAL */
    /* FUNÇÃO PARA QUANDO O USUÁRIO PASSAR O MOUSE SOBRE O BOTÃO DE SEGUIR MOSTRAR DESCRIÇÃO */
    const followdescription = document.getElementById('follow-description');

    function showfollowdescription(){
        followdescription.removeAttribute('hidden');
    }

    function hidefollowdescription(){
        followdescription.setAttribute('hidden', true);
    }

    /* FUNÇÃO PARA QUANDO O USUÁRIO PRESSIONAR O BOTÃO DE SEGUIR SOMAR UM NO CONTADOR E MUDAR O ÍCONE */
    const followsimbol = document.getElementById('followicon');
    const followbutton = document.getElementById('follow-div');
    var followcounter =  document.getElementById('followcounter');
    var numbercounter = parseFloat(followcounter.textContent, 1);

    function follow(){
        followsimbol.removeAttribute('name', 'heart-outline');
        followsimbol.setAttribute('name', 'heart');
        followbutton.setAttribute('onclick', "unfollow()");

        numbercounter = numbercounter + 1;
        followcounter.innerHTML = numbercounter;
    }

    function unfollow(){
        followsimbol.removeAttribute('name', 'heart');
        followsimbol.setAttribute('name', 'heart-outline');
        followbutton.setAttribute('onclick', "follow()");

        numbercounter = numbercounter - 1;
        followcounter.innerText = numbercounter;
    }

/* COMPARTILHAR CANAL */
    /* FUNÇÃO PARA QUANDO O USUÁRIO PASSAR O MOUSE SOBRE O BOTÃO DE COMPARTILHAR MOSTRAR DESCRIÇÃO */
    const sharedescription = document.getElementById('share-description');

    function showsharedescription(){
        sharedescription.removeAttribute('hidden');
    }
s
    function hidesharedescription(){
        sharedescription.setAttribute('hidden', true);
    }

    /* FUNÇÃO PARA QUANDO O USUÁRIO CLICAR NO BOTÃO COMPARTILHAR APARECER UM TEXTO COPIÁVEL */
    const shareobject = document.getElementById('share-object');
    const sharebutton = document.getElementById('share-button');

    function openshareoptions() {
        shareobject.removeAttribute('hidden');
        sharebutton.setAttribute('onclick', "closeshareoptions()");
    }

    function closeshareoptions() {
        shareobject.setAttribute('hidden', true);
        sharebutton.setAttribute('onclick', "openshareoptions()");
        copybutton.innerText = "COPIAR";
    }

    /* FUNÇÃO PARA COPIAR O TEXTO */
    function copysharetext() {
        var copiedtext = document.getElementById('copiedtext');
        var copybutton = document.getElementById('copybutton');
        
        copiedtext.select();
        document.execCommand("copy");
        copybutton.innerText = "COPIADO!";
    }

/* FUNÇÕES NOS EPISÓDIOS */

/* FUNÇÕES DOS CONTROLADORES */
const playpausebtn = document.getElementById('play-pause-btn');
var episodeslist = document.querySelectorAll('audio');
var episodechoice = 0;

function changeplaypauseicon() {
    const playpauseicon = playpausebtn.querySelector('ion-icon').getAttribute('name');

    if (playpauseicon == 'play-outline') {
        playpausebtn.querySelector('ion-icon').setAttribute('name', 'pause-outline');
        playpausebtn.querySelector('ion-icon').setAttribute('style', 'margin-left: -0.1px;');

        episodeslist[episodechoice].play();
    }

    else {
        playpausebtn.querySelector('ion-icon').setAttribute('name', 'play-outline');
        playpausebtn.querySelector('ion-icon').removeAttribute('style', 'margin-left: -1px;');

        episodeslist[episodechoice].pause();
    }
}

function playepisode() {
    if (episodechoice == 0) {
        episodeslist[episodechoice].play();
        changeplaypauseicon();
    }

    else if (episodechoice == 1) {
        episodeslist[episodechoice].play();
        changeplaypauseicon();
    }

    else if (episodechoice == 2) {
        episodeslist[episodechoice].play();
        changeplaypauseicon();
    }
}