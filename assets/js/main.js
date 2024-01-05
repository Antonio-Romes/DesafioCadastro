
let listaCadastro = [{id: 0, nome:"ola",email:"ola@gmail.com",profissao:"Programação web"}];

 
$( document ).ready(function() {
    montarCorpoDaTabela();
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
    montarCorpoDaTabela();
   
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
    montarCorpoDaTabela();
    fechaModal();
})
 

const adicionaCadastroNaLista = (id,nome,email, profissao) => { 

    listaCadastro.push({id:id ,
        nome:nome,
    email:email,
    profissao:profissao});
    
}

 const montarCorpoDaTabela = () => { 
    let htmlTabelaCorpo = listaCadastro.map((item) => {

        return `<tr> 
                    <td hidden>${item.id}</td>
                    <td>${item.nome}</td>
                    <td>${item.email}</td>
                    <td>${item.profissao}</td>
                    <td> 
                        <button type="button" class="btn btn-primary" onclick="editarLinhaDaTabela(this)">Editar</button> 
                        <button type="button" class="btn btn-danger" onclick="excluir(this)">Excluir</button>
                    </td>
                </tr>`
      }).toString();

      let corpoTabela = document.getElementById('corpoTabela');
      corpoTabela.innerHTML += htmlTabelaCorpo;
    
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
    montarCorpoDaTabela();
}

const ordenaDadoNaColunaDaTabela = (dadosDaColunaDaTabela) => {
    alert("Ola");
}
const abrirModal = () => $("#exampleModal").modal("show");
const fechaModal = () => $("#exampleModal").modal("hide");
 