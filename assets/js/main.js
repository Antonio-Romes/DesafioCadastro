 

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
});

const form = document.getElementById('formCadastro')
form.addEventListener('submit', e => {
    e.preventDefault();
    let id = listaCadastro.length;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let selectProfissao = document.getElementById("profissao");
    let profissao = selectProfissao.options[selectProfissao.selectedIndex].text;


    adicionaCadastroNaLista(id,nome,email,profissao);
    limparCorpoDaTabela();
    montarCorpoDaTabela(listaCadastro);
   
})

formEditar.addEventListener('submit', e => {
    e.preventDefault();
    let id = document.getElementById("idEditar").value;
    let nome = document.getElementById("nomeEditar").value;
    let email = document.getElementById("emailEditar").value;
    let selectProfissao = document.getElementById("profissaoEditar");
    let profissao = selectProfissao.options[selectProfissao.selectedIndex].text;

    listaCadastro.forEach(item => {
        if (item.id == id) {
            item.nome = nome;
            item.email = email;
            item.profissao = profissao;
        }
    })
 
    limparCorpoDaTabela();
    montarCorpoDaTabela(listaCadastro);
    fechaModal();
})
 

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
                <button type="button" class="btn btn-primary" onclick="editarLinhaDaTabela(this)">Editar</button> 
                <button type="button" class="btn btn-danger" onclick="excluir(this)">Excluir</button>
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
        <p class="ps-4 m-0">Total de dados - ${retornaTotalDeDadosDaLista()}</p>
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

 const retornaTotalDeDadosDaLista = () => {
    return listaCadastro.length;
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

function gerarExcel(type, fn, dl) {
    var elt = document.getElementById('tabelaListaDeCadastro');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || ('excel.' + (type || 'xlsx')));
}
