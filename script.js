let usuario = ''; //Nome do usuário do chat
let msn

/*------------------------------------------------------------------
     Muda a página inicial quando o nome de usuário é inserido e o botão "entrar" é clicado
/*------------------------------------------------------------------*/
function close_initialPage(){
    usuario = document.querySelector('.nome_usuario').value;
    const initialPage = document.querySelector('.entrada');
    if(usuario != ''){
        initialPage.classList.remove("aparece");
        initialPage.classList.add("some");
    }
    console.log(usuario);
}

function mandar_mensagens(){
    const mensagens = document.querySelector('.caixa_mensagens');
    for(i = 0; i < 4; i++){
        msn = `<li class="mensagem">
                    <p class="hora">(23:11:54)</p>
                    <p class="nome">Jorge:</p>
                    <p class ="msn"></p>
                </li>`
        mensagens.innerHTML = mensagens.innerHTML + msn;
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