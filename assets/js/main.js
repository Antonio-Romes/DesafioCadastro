 

let listaCadastro = [
    {id: 0, nome:"ola",email:"Maria@gmail.com",profissao:"Analista de testes de softwares"},
    {id: 1, nome:"crescente",email:"João@gmail.com",profissao:"Especialista de cibersegurança"},
    {id: 2, nome:"função",email:"Ana@gmail.com",profissao:"Programação web"},
    {id: 3, nome:"comparação",email:"Pedro@gmail.com",profissao:"Desenvolvedor mobile"},
    {id: 4, nome:"informações",email:"Carlaa@gmail.com",profissao:"Desenvolvimento de games"},
    {id: 5, nome:"idade",email:"Antônioa@gmail.com",profissao:"Engenharia de hardware"},
    {id: 6, nome:"Helena",email:"Helena@gmail.com",profissao:"Arquitetura de redes"},
    {id: 7, nome:"Maria Luísa",email:"MariaLuisa@gmail.com",profissao:"Arquitetura de redes"},
    {id: 8, nome:"Antonella",email:"Antonella@gmail.com",profissao:"Arquitetura de redes"},
    {id: 9, nome:"Aurora",email:"Auroraa@gmail.com",profissao:"Arquitetura de redes"},
    {id: 10, nome:"Francisco",email:"Sofia@gmail.com",profissao:"Arquitetura de redes"},
    {id: 11, nome:"Nicolas",email:"Nicolas@gmail.com",profissao:"Arquitetura de redes"},
    {id: 12, nome:"Rodrigo",email:"Sofia@gmail.com",profissao:"Arquitetura de redes"},
    {id: 13, nome:"Elisa",email:"Elisa@gmail.com",profissao:"Arquitetura de redes"},
    {id: 14, nome:"Valentina",email:"Valentina@gmail.com",profissao:"Arquitetura de redes"},
    {id: 15, nome:"Gabriela",email:"Gabriela@gmail.com",profissao:"Arquitetura de redes"},
    {id: 16, nome:"Henrique",email:"Henrique@gmail.com",profissao:"Arquitetura de redes"},
    {id: 17, nome:"Leonardo",email:"Leonardo@gmail.com",profissao:"Arquitetura de redes"},
    {id: 18, nome:"Luis",email:"Luis@gmail.com",profissao:"Arquitetura de redes"},
    {id: 19, nome:"Isabelly",email:"Isabelly@gmail.com",profissao:"Arquitetura de redes"},
    {id: 20, nome:"Pablo",email:"Pablo@gmail.com",profissao:"Arquitetura de redes"},
];
let tipoDeOrdenacao = "ASC"
let inicioDoIndex = 0;
let finalDoIndex = 5;
 
$( document ).ready(function() {
    montarCorpoDaTabela(listaCadastro);
    montarLinkDePaginacao(listaCadastro);
    document.getElementById("nome").focus();
});

const form = document.getElementById('formCadastro')
form.addEventListener('submit', e => {
    e.preventDefault();
    
    let id = listaCadastro.length;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let selectProfissao = document.getElementById("profissao");
    let profissao = selectProfissao.options[selectProfissao.selectedIndex].text;

    esconderMensagemDeAlerta();
    let spanValidarNome = document.getElementById('validarNome');
    let spanValidarEmail = document.getElementById('validarEmail');
    let nomeFoiSalvo = verificarSeNomeFoiSalvo(nome, spanValidarNome)
    let emailFoiSalvo = verificarSeNomeFoiEmail(email, spanValidarEmail);

    if(!nomeFoiSalvo && !emailFoiSalvo ){ 
        adicionaCadastroNaLista(id,nome,email,profissao);
        limparCorpoDaTabela();
        limparValoresDosInputs();
        document.getElementById("nome").focus();
        montarCorpoDaTabela(listaCadastro);
        montarLinkDePaginacao(listaCadastro);
    } 
})

const formEditar = document.getElementById('formEditar')
formEditar.addEventListener('submit', e => {
    e.preventDefault();
    let id = document.getElementById("idEditar").value;
    let nome = document.getElementById("nomeEditar").value;
    let email = document.getElementById("emailEditar").value;
    let selectProfissao = document.getElementById("profissaoEditar");
    let profissao = selectProfissao.options[selectProfissao.selectedIndex].text;

    
    esconderMensagemDeAlerta();
    let spanValidarNome = document.getElementById('formEditarValidarNome');
    let spanValidarEmail = document.getElementById('formEditarValidarEmail');
    let nomeFoiSalvo = verificarSeNomeFoiSalvo(nome, spanValidarNome)
    let emailFoiSalvo = verificarSeNomeFoiEmail(email, spanValidarEmail);

    if(!nomeFoiSalvo && !emailFoiSalvo ){  
        listaCadastro.forEach(item => {
            if (item.id == id) {
                item.nome = nome;
                item.email = email;
                item.profissao = profissao;
            }
        })
        limparCorpoDaTabela();
        limparValoresDosInputs();
        document.getElementById("nome").focus();
        montarCorpoDaTabela(listaCadastro); 
        fechaModal();
    } 
   
})

const limparValoresDosInputs = () => { 
    let selectProfissao  = '';
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("profissao").value = "0" 
     

    document.getElementById("nomeEditar").value;
    document.getElementById("emailEditar").value;
    document.getElementById("profissaoEditar").value = "0" 
}

const verificarSeNomeFoiSalvo = (nome, elemento) =>{
    let nomeFoiSalvo = listaCadastro.find((item) => item.nome === nome);

    if(!!nomeFoiSalvo){ 
        mostrarMensagemDeAlerta(elemento);
    }
    return !!nomeFoiSalvo;
}

const verificarSeNomeFoiEmail = (email, elemento) =>{
    let emailFoiSalvo = listaCadastro.find((item) => item.email === email);
    if(!!emailFoiSalvo){ 
        mostrarMensagemDeAlerta(elemento);
    }
    return !!emailFoiSalvo;
}
 

const mostrarMensagemDeAlerta = (elemento) => {
    elemento.classList.remove("d-none");
}

const esconderMensagemDeAlerta = () => { 
    document.getElementById('validarNome').classList.add('d-none'); 
    document.getElementById('validarEmail').classList.add('d-none'); 
    document.getElementById('formEditarValidarNome').classList.add('d-none');  
    document.getElementById('formEditarValidarEmail').classList.add('d-none'); 
}
 

const adicionaCadastroNaLista = (id,nome,email, profissao) => { 

    listaCadastro.unshift({id:id ,
        nome:nome,
    email:email,
    profissao:profissao});
    
}

 const montarCorpoDaTabela = (listaDeDados) => {  
      
      let htmlTabelaCorpo = "";
      for (index = inicioDoIndex; index < finalDoIndex; index++) {
        if(listaDeDados[index] === undefined){
            break;
        }
        else{
            htmlTabelaCorpo += `<tr> 
            <td hidden>${listaDeDados[index].id}</td>
            <td>${listaDeDados[index].nome}</td>
            <td>${listaDeDados[index].email}</td>
            <td>${listaDeDados[index].profissao}</td>
            <td> 
                <button type="button" class="btn" onclick="editarLinhaDaTabela(this)">
                     <svg xmlns="http://www.w3.org/2000/svg" class="text-primary" width="38" height="38" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11M8 10h8M8 6h4m-4 8h3m6.954 2.94l1-1a1.121 1.121 0 0 1 1.586 0v0a1.121 1.121 0 0 1 0 1.585l-1 1m-1.586-1.586l-2.991 2.991a1 1 0 0 0-.28.553l-.244 1.557l1.557-.243a1 1 0 0 0 .553-.28l2.99-2.992m-1.585-1.586l1.586 1.586"/><path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"/></g></svg></button> 
                <button type="button" class="btn" onclick="excluir(this)">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-danger" width="38" height="38" viewBox="0 0 16 16"><path fill="currentColor" d="M9 3a1 1 0 0 0-2 0zM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-.233 1.71A5.5 5.5 0 0 0 7.337 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm4.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 13 12.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75H8.707l.897.896a.5.5 0 0 1-.708.708L7.144 10.35a.498.498 0 0 1 .002-.705l1.75-1.75a.5.5 0 1 1 .708.708"/></svg></button>
            </td>
        </tr>`
        }
       
      }

      let corpoTabela = document.getElementById('corpoTabela');
      corpoTabela.innerHTML += htmlTabelaCorpo;
    
 }

 const montarLinkDePaginacao = (listaDeDados) => { 
    let totalDePagina = retornarTotalDePagina(listaDeDados);
    let oi = `
    <li class="page-item">
        <a class="page-link" href="#" aria-label="Anterior">
        <span aria-hidden="true">&laquo;</span> 
        </a>
    </li>
    ${montarLi(totalDePagina)}
    <li class="page-item">
        <a class="page-link" href="#" aria-label="Próximo">
        <span aria-hidden="true">&raquo;</span> 
        </a>
    </li>
    <li class="page-item row flex-row align-items-center">
        <p class="ps-4 m-0">Total de dados - ${retornaTotalDeDadosDaLista(listaDeDados)}</p>
    </li>
  `
  let ulDaPaginacao = document.querySelector(".pagination");
  ulDaPaginacao.innerHTML = oi;

 }

 const retornarTotalDePagina = (listaDeDados) =>{
    let totalDeDadosDaLista = listaDeDados.length; 
    let totalDeDadoExibidosPorPagina = retornaTotalDeDadoExibidoPorPagina();

    if((totalDeDadosDaLista % totalDeDadoExibidosPorPagina) == 0){
        return totalDeDadosDaLista/totalDeDadoExibidosPorPagina;
    }
    else{
        return Math.trunc(totalDeDadosDaLista/totalDeDadoExibidosPorPagina) + 1;
    }
 }

 const retornaTotalDeDadoExibidoPorPagina = () =>{
    let totalDePagina = document.getElementById('totalDePagina'); 
    return totalDePagina != 1 ? totalDePagina.options[totalDePagina.selectedIndex].value : 1;
 }

 const montarLi = (totalDePagina) => {
    let exibiTotalDePagina = retornaTotalDeDadoExibidoPorPagina();

    totalDePagina = exibiTotalDePagina == 1 ? 1 : totalDePagina;
    let htmlLi = "";
    for(let index = 1; index <= totalDePagina; index++) {
        htmlLi += `<li class="page-item"><span class="page-link cursor" valorDaPaginacao="${index}" onclick="linkDeNavegacao(this)">${index}</span></li>`; 
    }

    return htmlLi;
 }

 const retornaTotalDeDadosDaLista = (listaDeDados) => {
    return listaDeDados.length;
 }

 const linkDeNavegacao = (elemento) => {

    let numeroDaPagina = elemento.attributes.valorDaPaginacao.value; 
    let totalDeDadoExibidoPorPagina = retornaTotalDeDadoExibidoPorPagina();

    finalDoIndex = numeroDaPagina * totalDeDadoExibidoPorPagina;
    inicioDoIndex = finalDoIndex - totalDeDadoExibidoPorPagina 

    limparCorpoDaTabela();
    montarCorpoDaTabela(listaCadastro);
    montarLinkDePaginacao(listaCadastro);
 }

 const limparCorpoDaTabela = () => {
    document.getElementById('corpoTabela').innerHTML='';
 }


 const  editarLinhaDaTabela = (dadosDaLinnhaDaTabela) => {
    
    let linha = dadosDaLinnhaDaTabela.parentNode.parentNode;
    let id = linha.cells[0].innerHTML;
    let nome = linha.cells[1].innerHTML;
    let email = linha.cells[2].innerHTML;
    let profissao = linha.cells[3].innerHTML;

    const acentos = [ "ç", "Ç", "á", "é", "í", "ó", "ú", "ý", "Á", "É", "Í", "Ó", "Ú", "Ý", "à", "è", "ì", "ò", "ù", "À", "È", "Ì", "Ò", "Ù", "ã", "õ", "ñ", "ä", "ë", "ï", "ö", "ü", "ÿ", "Ä", "Ë", "Ï", "Ö", "Ü", "Ã", "Õ", "Ñ", "â", "ê", "î", "ô", "û", "Â", "Ê", "Î", "Ô", "Û" ];
    const semAcento =  [ "c", "C", "a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "a", "o", "n", "a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "A", "O", "N", "a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];
 
   for (let i = 0; i < acentos.length; i++)
   {
    profissao = profissao.replace(acentos[i], semAcento[i]);
   }

     document.getElementById('idEditar').value = id;
     document.getElementById('nomeEditar').value = nome;
     document.getElementById('emailEditar').value = email;
     document.getElementById('profissaoEditar').value = profissao.replace(/\s+/g, '');
    
     abrirModal();
}


const excluir = (dadosDaLinnhaDaTabela) => {
    let linha = dadosDaLinnhaDaTabela.parentNode.parentNode;
    let id = linha.cells[0].innerHTML;

    listaCadastro = listaCadastro.filter(item => {
       return item.id != id 
    })
 
    limparCorpoDaTabela();
    montarCorpoDaTabela(listaCadastro); 
    montarLinkDePaginacao(listaCadastro);
}


const abrirModal = () => $("#exampleModal").modal("show");
const fechaModal = () => $("#exampleModal").modal("hide");
 

document.getElementById('tabelaDeDadosCadastrados').addEventListener('click', function(e) {
    var cabecalhoDaTabelaClicado = e.target.tagName == 'TH' ? e.target : e.target.parentElement;
    if (cabecalhoDaTabelaClicado.tagName == 'TH') {
        ordenaDadoNaColunaDaTabela(cabecalhoDaTabelaClicado.textContent.toLowerCase().replace('ã','a').replace(/^\s+|\s+$/gm,''));
    }

    limparCorpoDaTabela();
    montarCorpoDaTabela(listaCadastro);
});


const ordenaDadoNaColunaDaTabela = (nomeDaColunaClicada) => {

    if(tipoDeOrdenacao === "ASC"){
        ordenacaoCrescente(nomeDaColunaClicada);
        tipoDeOrdenacao = "DESC";
    }
    else{
        ordenacaoDecrescente(nomeDaColunaClicada);
        tipoDeOrdenacao = "ASC";
    }
   
}

const ordenacaoCrescente = (nomeDoCabecalho) => {
    return listaCadastro.sort((a, b) => {
        if (a[nomeDoCabecalho] < b[nomeDoCabecalho]) {
            return -1;
        }
        if (a[nomeDoCabecalho] > b[nomeDoCabecalho]) {
            return 1;
        }
        return 0;
    });
};

const ordenacaoDecrescente = (nomeDoCabecalho) => {
    return listaCadastro.sort((a, b) => {
        if (a[nomeDoCabecalho] > b[nomeDoCabecalho]) {
            return -1;
        }
        if (a[nomeDoCabecalho] < b[nomeDoCabecalho]) {
            return 1;
        }
        return 0;
    });
};

const alterarValorDaPaginacao = () => {
     
    let totalDePagina = retornaTotalDeDadoExibidoPorPagina() 

     inicioDoIndex = 0 ;
     finalDoIndex = totalDePagina != 1 ? totalDePagina : listaCadastro.length;

     montarLinkDePaginacao(listaCadastro);
}


const filtraDadosDaTabela = () =>{

    let textoDoFiltro = document.getElementById("inputFiltro").value;

    let listaCadastroFiltrada = listaCadastro.filter(item => {
        if(item.nome.includes(textoDoFiltro) || item.email.includes(textoDoFiltro) || item.profissao.includes(textoDoFiltro)){
            return item;
        }
    })
    
    limparCorpoDaTabela();

    if(listaCadastroFiltrada.length > 0)
    {
        let listaDeDados =  textoDoFiltro != "" ? listaCadastroFiltrada : listaCadastro ;
        inicioDoIndex = 0;
        finalDoIndex = retornaTotalDeDadoExibidoPorPagina(); 
        montarCorpoDaTabela(listaDeDados);
        montarLinkDePaginacao(listaDeDados);
    }
    else{
        mostrarMsgNaoTemDadosNaTabela();
        montarLinkDePaginacao(listaCadastroFiltrada);
    } 
}

const mostrarMsgNaoTemDadosNaTabela = () => {
 
    let htmlMensagem = `<tr id="msgNaoTemDados">
                            <td colspan="4"><h5 class="text-center text-danger">Não tem dados</h5></td>
                        </tr>`
    
    let corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML += htmlMensagem;
} 

 

const gerarPDF = () => { 
    const element = document.getElementById('tabelaListaDeCadastro'); 
     var opt = {
        margin:       [0,0.2,0.5,0.2],
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: 'avoid-all', before: '#page2el' }
      };
       
      html2pdf().set(opt).from(element).save();
       
      html2pdf(element, opt);
    
}

const gerarExcel = (type, fn, dl) => {
    var elt = document.getElementById('tabelaListaDeCadastro');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || ('excel.' + (type || 'xlsx')));
}


