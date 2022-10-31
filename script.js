let usuario = '', para = 'Todos', texto = 'A cascavel do piaui', tipo = 'message'; //Nome do usuário do chat
let mensagens = [];

/*------------------------------------------------------------------
 Sinaliza que usuário entrou na sala e saiu da sala
/*------------------------------------------------------------------*/
function enviaNome(){
    let nome = {name: usuario};
    axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nome);
    axios.post("https://mock-api.driven.com.br/api/v6/uol/status", nome);
    rederizarMensagens();
}
/*------------------------------------------------------------------
     Muda a página inicial quando o nome de usuário é inserido e o botão "entrar" é clicado.
/*------------------------------------------------------------------*/
function close_initialPage(){   //Função que fecha a tela inicial
    const page_1 = document.querySelector('.pag_1');
    const page_2 = document.querySelector('.pag_2');
    page_1.classList.remove('aparece');
    page_1.classList.add('some');
    page_2.classList.remove('some');
    page_2.classList.add('aparece');
}
function open_loading(){    //Função que habilita a tela de carregamento após o usuário inserir o nome
    usuario = document.querySelector('.nome_usuario').value;
    const box_usuario = document.querySelector('.caixa_usuario');
    const box_button = document.querySelector('.botao');
    const loading = document.querySelector('.carregando');
    if(usuario != ''){
        box_usuario.classList.add("some");
        box_button.classList.add("some");
        loading.classList.remove("some");
        setTimeout(close_initialPage, 1500); //execulta a função 'close_initialPage()' após 1,5seg.
    }  
}
/*------------------------------------------------------------------
    Carrega as mensagens do servidor para o código HTML
/*------------------------------------------------------------------*/
function busca_mensagens(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promessa.then(respostaChegou);
}
function respostaChegou(resposta){
    mensagens = resposta.data;
}
function rederizarMensagens(){
    const listaMensagens = document.querySelector('.caixa_mensagens');
    listaMensagens.innerHTML = '';
    for(let i = 0; i < mensagens.length; i++){
        let mensagem = mensagens[i];
        if(mensagem.type == "message"){
            listaMensagens.innerHTML += `
            <li class = "MSG" id = "msg_${i}">
                <p class = "txt" ><span class ="hora"> (${mensagem.time})</span> 
                <span class ="negrito"> ${mensagem.from}</span> 
                para <span class ="negrito">${mensagem.to}</span>: 
                ${mensagem.text}</p>
            </li>`;
            document.getElementById(`msg_${i}`).style.backgroundColor = "white";
        }
        if(mensagem.type == "status"){
            listaMensagens.innerHTML += `
            <li class = "MSG" id = "msg_${i}">
                <p class = "txt" ><span class ="hora"> (${mensagem.time})</span>
                <span class ="negrito"> ${mensagem.from}</span> 
                ${mensagem.text}</p>
            </li>`;
            document.getElementById(`msg_${i}`).style.backgroundColor = "#DCDCDC";
        }
    }
}
/*------------------------------------------------------------------
    Envia Mensagens para o chat
/*------------------------------------------------------------------*/
function pega_texto(){
    let text_box = document.querySelector('.caixa_texto').value;
    let messagem_digitada = {
        from: usuario,
        to: "Todos",
        text: text_box,
        type: "message" // ou "private_message" para o bônus
    }
    axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', messagem_digitada);
    rederizarMensagens();
    document.querySelector('.caixa_texto').value='';//Limpa caixa de texto


}
/*------------------------------------------------------------------
    Recarrega as funções a cada 1s
/*------------------------------------------------------------------*/
setInterval(busca_mensagens, 1000);
setInterval(enviaNome, 1000);
/*------------------------------------------------------------------
    Aparece e oculta barra lateral
/*------------------------------------------------------------------*/
function aparece_lateral(){
    const barra_lateral = document.querySelector('.pag_3');
    barra_lateral.classList.remove('some');
    barra_lateral.classList.add('aparece');
}
function some_lateral(){
    const lateral = document.querySelector('.pag_3');
    lateral.classList.add('some');
    lateral.classList.remove('aparece');
}