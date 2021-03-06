const divVisualizacao = document.getElementById('visualizacao');
const divIndicadores = document.getElementById('indicadores');
const selectTipoBusca = document.getElementById('tipoBusca');
const inputBusca = document.getElementById('inputBusca');
const alunos = [];
let proximoId = 1;

const busca = (event) => {
    const valor = event.target.value;
    const listaAlunosFiltrada = alunos.filter(
        selectTipoBusca.value === 'nome' ?
        buscaPorNome(valor) :
        selectTipoBusca.value === 'professor' ?
        buscaPorProfessor(valor) :
        selectTipoBusca.value === 'idade' ?
        buscaPorIdade(parseInt(valor)) :
        buscaPorId(parseInt(valor))
    );
    if (valor && listaAlunosFiltrada.length === 0) {
        divVisualizacao.innerHTML = '<h3>Item não encontrado<h3>';
        // alert('Item não encontrado');
    } else {
        atualizaListaAlunos(listaAlunosFiltrada);
    }
}

inputBusca.addEventListener('keyup', busca);

const adicionaAluno = (nomeAluno,
    idade,
    valorMensalidade,
    professorResponsavel,
    temAcesso) => {

    const aluno = {
        id: proximoId,
        nome: nomeAluno,
        idade,
        exerciciosAdpatados: idade > 60 ? true : false,
        valorMensalidade,
        professorResponsavel,
        temAcesso,
    };

    alunos.push(aluno);
    proximoId++;
    atualizaListaAlunos();
}

const atualizaListaAlunos = (listaAlunosFiltrada) => {
    let cards = '';
    const listaAlunos = listaAlunosFiltrada && listaAlunosFiltrada.length > 0 
    ? listaAlunosFiltrada : alunos;
    for (aluno of listaAlunos) {
        cards += `
        <div class="card">
            <div class="descricao-card">
                <p>Nome: <b>${aluno.nome}</b></p>
                <p>Idade: <b>${aluno.idade}</b></p>
                <p>Exercícios Adaptados: <b>${aluno.exerciciosAdpatados ? 'Sim' : 'Não'}</b></p>
                <p>Professor Responsável: <b>${aluno.professorResponsavel}</b></p>
                <p>Tem acesso: <span class="${aluno.temAcesso ? 'sim' : 'nao'}" style="cursor:pointer" onclick="atualizaStatusAcesso(${aluno.id})"><b>${aluno.temAcesso ? 'Sim' : 'Não'}</b></span></p>
                <p>Valor mensalidade: <b>R$${aluno.valorMensalidade}</b></p>
            </div>
            <div class="acoes">
                <span class="material-icons acao" onclick="removeAluno(${aluno.id})">
                    delete
                </span>
            </div>
        </div>
        `;
    }

    divVisualizacao.innerHTML = cards;
    atualizaIndicadores();
}

const atualizaIndicadores = () => {
    let h3Indicadores = '';
    let somaIdades = 0;
    let somaMensalidades = 0;
    const retornaH3Formatado = (titulo, valor) => {
        return `<h3>${titulo}: ${valor}</h3>`;
    }

    alunos.forEach((aluno) => {
        somaIdades += aluno.idade;
        somaMensalidades += aluno.valorMensalidade;
    });
    // for (aluno of alunos) {
        // somaIdades += aluno.idade;
        // somaMensalidades += aluno.valorMensalidade;
    // }

    h3Indicadores += retornaH3Formatado('Total de Alunos', alunos.length);
    h3Indicadores += retornaH3Formatado('Média idades',
    calcular(dividir, somaIdades, alunos.length));
    h3Indicadores += retornaH3Formatado('Total mensalidades', somaMensalidades);
    h3Indicadores += retornaH3Formatado('Média mensalidades',
    calcular(dividir, somaMensalidades, alunos.length));

    divIndicadores.innerHTML = h3Indicadores;
}

// const buscaPorId = (id) => {
//     return function (aluno) {
//         return aluno.id === id;
//     }
// }
const buscaPorId = id => aluno => aluno.id === id;
const buscaPorNome = nome => 
    aluno => aluno.nome.toUpperCase().search(nome.toUpperCase()) > -1;
const buscaPorProfessor = nomeProfessor => 
    aluno => aluno.professorResponsavel.toUpperCase().search(nomeProfessor.toUpperCase()) > -1;
const buscaPorIdade = idade =>
    aluno => aluno.idade === idade;

const removeAluno = (id) => {
    const alunoIndice = alunos.findIndex(buscaPorId(id));
    alunos.splice(alunoIndice, 1);
    atualizaListaAlunos();
}

const atualizaStatusAcesso = (id) => {
    
    const alunoIndice = alunos.findIndex(buscaPorId(id));
    if (alunoIndice > -1) {
        const alunoTemAcesso = alunos[alunoIndice].temAcesso;
        alunos[alunoIndice].temAcesso = !alunoTemAcesso;
    }

    atualizaListaAlunos();
}

const limpaCampos = (nomeAluno,
    idade,
    valorMensalidade,
    professorResponsavel,
    temAcesso) => {
    nomeAluno.value = '';
    idade.value = '';
    valorMensalidade.value = '';
    professorResponsavel.value = '';
    temAcesso.value = '';
}
