let usuario = ''; //Nome do usuário do chat
let mensagens = [];

/*------------------------------------------------------------------
    Carrega as mensagens do servidor para o código HTML
/*------------------------------------------------------------------*/
const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
promessa.then(respostaChegou);

function respostaChegou(resposta){
    mensagens = resposta.data;
    console.log(mensagens);
    rederizarMensagens();
}

function rederizarMensagens(){
    const listaMensagens = document.querySelector('.caixa_mensagens');
    listaMensagens.innerHTML = '';
    for(let i = 0; i < 10; i++){
        let mensagem = mensagens[i];
        listaMensagens.innerHTML += `
            <li>
                <p class = "time" >Testanto aquiiii</p>
                <p class = "time" > nome : (${mensagem.from})</p>
            </li>`;
         console.log('Deu certo');
    }
    
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
