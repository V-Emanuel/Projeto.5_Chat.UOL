let usuario = ''; //Nome do usuário do chat
let msn;

function mandar_mensagens(){
    const mensagens = document.querySelector('.caixa_mensagens');
    for(i = 0; i < 30; i++){
        msn = `<li class="mensagem">
                    <p class="hora">(23:11:54)</p>
                    <p class="nome">Jorge:</p>
                    <p class ="msn"></p>
                </li>`
        mensagens.innerHTML = mensagens.innerHTML + msn;
    }
}
/*------------------------------------------------------------------
     Muda a página inicial quando o nome de usuário é inserido e o botão "entrar" é clicado.
/*------------------------------------------------------------------*/

function close_initialPage(){
    const page_1 = document.querySelector('.pag_1');
    const page_2 = document.querySelector('.pag_2');
    page_1.classList.remove('aparece');
    page_1.classList.add('some');
    page_2.classList.remove('some');
    page_2.classList.add('aparece');

}
function open_loading(){
    usuario = document.querySelector('.nome_usuario').value;
    const box_usuario = document.querySelector('.caixa_usuario');
    const box_button = document.querySelector('.botao');
    const loading = document.querySelector('.carregando');
    if(usuario != ''){
        box_usuario.classList.add("some");
        box_button.classList.add("some");
        loading.classList.remove("some");
        console.log(usuario);
        setTimeout(close_initialPage, 1500); //execulta a função 'close_initialPage()' após 1,5seg.
        mandar_mensagens();
    }
    
}



/*function recebe_mensagens(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants');
    promessa.then(processarResposta);
}

function processarResposta(participantes) {
    alert("Deu certo");
	console.log(participantesn.name.data);
}
recebe_mensagens();*/