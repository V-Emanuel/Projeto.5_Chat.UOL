/*let participantes = {horario, name, texto};*/
let msn


/*function recebe_mensagens(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants');
    promessa.then(processarResposta);
}

function processarResposta(participantes) {
    alert("Deu certo");
	console.log(participantesn.name.data);
}
recebe_mensagens();*/

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

mandar_mensagens();