//listas
const listaHospedagem = [
    {
        id: 1,
        foto: 'https://pix10.agoda.net/hotelImages/5111481/-1/8d8ecb56a73da60f71c4e50248c8f662.jpg?s=1024x768',
        nome: 'Hotel Athenas Like',
        local: 'Athenas, Grécia',
        diaria: 150,
        quantidade: 1,
    },
    {
        id: 2,
        foto: 'https://quantocustaviajar.com/blog/wp-content/uploads/2017/12/melhores-hoteis-de-luxo-do-brasil-1.jpg',
        nome: 'Guarapiranga Suite Class',
        local: 'São Paulo, Brazil',
        diaria: 400,
        quantidade: 1,
    },
    {
        id: 3,
        foto: 'https://i2.wp.com/www.eldogomes.com.br/wp-content/uploads/2020/08/palacio-tangara-sp-luxo-hotel.png?w=640&ssl=1',
        nome: 'Saquarema da Massa',
        local: 'Rio de Janeiro, Brazil',
        diaria: 320,
        quantidade: 1,
    },
    {
        id: 4,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6X0fCDI8G_Uy67P0rYUpjtvN2KxOiQ5pXgA&usqp=CAU',
        nome: 'Sub London Hotel',
        local: 'Londres, Inglaterra',
        diaria: 3300,
        quantidade: 1,
    },
    {
        id: 5,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71fwDFIHqSO-TisNGTu5OGsxubiz451cd_g&usqp=CAU',
        nome: 'Pousada Sub Zero',
        local: 'Reykjavik, Islândia',
        diaria: 3300,
        quantidade: 1,
    },
]

const listaVoo = [
    {
        foto: 'https://www.viajenaviagem.com/media/W1siZnUiLCJodHRwczovL3d3dy52aWFqZW5hdmlhZ2VtLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8xMC9ueS1hYnJlNy5qcGciXSxbInAiLCJ0aHVtYiIsIjYwMHgzMDAjIl1d/ny-abre7.jpg',
        CompanhiaAerea: 'USA Airlines',
        local: 'NY, Estados Unidos',
        passagem: 4200,
    },
    {
        foto: 'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/destinations/qatar/doha/h1-doha-city-primary.jpg',
        CompanhiaAerea: 'Qatar Airlines',
        local: 'Doha, Qatar',
        passagem: 7200,
    },
    
]

const listaCarros = [
    {   
        id:1,
        foto:'https://bocamafra.com.br/wp-content/uploads/2020/11/733001.jpg',
        carro: 'Ford Fusion',
        montadora: 'Ford',
        diaria: 300,
        quantidade:1,
    },
    {
        id:2,
        foto:'https://quatrorodas.abril.com.br/wp-content/uploads/2018/06/fiat-mobi-easy-2019.jpg?quality=70&strip=info',
        carro: 'Mobi',
        montadora: 'Fiat',
        diaria: 68,
        quantidade:1,
    },
    {
        id:3,
        foto:'https://www.pgcorretora.com.br/wp-content/uploads/2018/04/cf-onix-branco.png',
        carro: 'Onix LTZ',
        montadora: 'Chevrolet',
        diaria: 98,
        quantidade:1,
    }

];


// get elements
const liHospedagem = document.getElementById('hospedagem');
const liVoo = document.getElementById('voo');
const liAluguelCarro = document.getElementById('aluguelCarro');
const liCruzeiros = document.getElementById('cruzeiros');
const liAtracoes = document.getElementById('atracoes');
const divCabecarioTipoViagem = document.getElementById('cabecarioTipoViagem');
const iPlus = document.getElementById('plus')
const iMinus = document.getElementById('minus')

// const divListaCards = document.getElementById('listaCards')

// cores
const corNaoSelecionado = 'rgba(0,0,0,0.15)'
const corSelecao = '#DAA520'

const buscaPorId = id => aluno => aluno.id === id;


adicionaItem = (lista) => (id) => {
    const indice = lista.findIndex(buscaPorId(id))
    lista[indice].quantidade ++;
    if(lista === listaHospedagem){
        atualizaHospedagem(listaHospedagem)
    }
    else if(lista === listaCarros){
        atualizaCarros(listaCarros)
    }
}

const adicionaHospedagem = adicionaItem(listaHospedagem)
const adicionaCarro = adicionaItem(listaCarros)


const ativaHospedagem = () => {
    liHospedagem.style.backgroundColor = corSelecao;
    liVoo.style.backgroundColor = corNaoSelecionado;
    liAluguelCarro.style.backgroundColor = corNaoSelecionado;
    liCruzeiros.style.backgroundColor = corNaoSelecionado;
    liAtracoes.style.backgroundColor = corNaoSelecionado;
    atualizaCabecario('hospedagem')
    atualizaHospedagem(listaHospedagem)
}

const ativaVoo = () => {
    liHospedagem.style.backgroundColor = corNaoSelecionado;
    liVoo.style.backgroundColor = corSelecao;
    liAluguelCarro.style.backgroundColor = corNaoSelecionado;
    liCruzeiros.style.backgroundColor = corNaoSelecionado;
    liAtracoes.style.backgroundColor = corNaoSelecionado;
    atualizaCabecario('voo')
    atualizaVoo(listaVoo)
}

const ativaAluguelCarro = () => {
    liHospedagem.style.backgroundColor = corNaoSelecionado;
    liVoo.style.backgroundColor = corNaoSelecionado;
    liAluguelCarro.style.backgroundColor = corSelecao;
    liCruzeiros.style.backgroundColor = corNaoSelecionado;
    liAtracoes.style.backgroundColor = corNaoSelecionado;
    atualizaCabecario('carroAlugado')
    atualizaCarros(listaCarros)
};

const ativaCruzeiros = () => {
    liHospedagem.style.backgroundColor = corNaoSelecionado;
    liVoo.style.backgroundColor = corNaoSelecionado;
    liAluguelCarro.style.backgroundColor = corNaoSelecionado;
    liCruzeiros.style.backgroundColor = corSelecao;
    liAtracoes.style.backgroundColor = corNaoSelecionado;
    atualizaCabecario('cruzeiros')
};

const ativaAtracoes = () => {
    liHospedagem.style.backgroundColor = corNaoSelecionado;
    liVoo.style.backgroundColor = corNaoSelecionado;
    liAluguelCarro.style.backgroundColor = corNaoSelecionado;
    liCruzeiros.style.backgroundColor = corNaoSelecionado;
    liAtracoes.style.backgroundColor = corSelecao;
    atualizaCabecario('atracoes')
};

const atualizaCabecario = (selecaoMenu) => {
    switch (selecaoMenu) {
        case 'hospedagem':
            divCabecarioTipoViagem.innerHTML = `
            <h3 id="h3JavaScript">
                Encontre ofertas em hotéis, casas, apartamentos e muito mais...
            </h3>
            <p>
                De hotéis-fazenda aconchegantes a apartamentos modernos na cidade.
            </p>`;
            break;

        case 'voo':
            divCabecarioTipoViagem.innerHTML = `
            <h3 id="h3JavaScript">
                Encontre ofertas em voos nacionais e internacionais, sem sair de casa...
            </h3>
            <p>
                De voos para londrina a voos de luxo com a Qatar Airlines para Dubai.
            </p>`;
            break;

        case 'carroAlugado':
            divCabecarioTipoViagem.innerHTML = `
            <h3 id="h3JavaScript">
            Encontre ofertas em carros alugados com preços super acessíveis...
            </h3>
            <p>
                De carros populares a carros que pertenceram a rainha da Inglaterra.
            </p>`;
            break;

        case 'cruzeiros':
            divCabecarioTipoViagem.innerHTML = `
            <h3 id="h3JavaScript">
            Encontre ofertas em passeios de cruzeiros que vão modificar a sua vida...
            </h3>
            <p>
                De passeios de caiaque em itanhaém a passeis de navio para o Japão.
            </p>`;
            break;

        case 'atracoes':
            divCabecarioTipoViagem.innerHTML = `
            <h3 id="h3JavaScript">
            Encontre ofertas em atrações com preços super acessíveis...
            </h3>
            <p>
                De ingressos para o Sesc Vila Sônia a passeios de paraquedas na Torre Eiffel.
            </p>`;
            break;

        default:
          alert(`Desculpe, o sistema está fora do ar. Favor entrar em contato com um de nossos atendentes`);
      }
}

const atualizaVoo = (lista) => {
    const divListaCards = document.getElementById('listaCards')
    listaLi = ""
    for (item of lista){
        listaLi += `
        <div class="card">
            <img
              src="${item.foto}"
              alt="foto"
            />
            <p>Companhia: ${item.CompanhiaAerea}</p>
            <p>Local: ${item.local}</p>
            <p>Passagem: R$ ${item.passagem.toFixed(2)}</p>
            <div>
              <i id="plus" class="fa fa-plus"></i> <b> 1 </b> <i id="minus" class="fa fa-minus"></i>
            </div>
            <i class="fa fa-shopping-cart"></i>
        </div>
         ` 
    }
    divListaCards.innerHTML = listaLi
};


const atualizaHospedagem = (lista) => {
    const divListaCards = document.getElementById('listaCards')
    listaLi = ""
    for (item of lista){
        listaLi += `
        <div class="card">
            <img
              src="${item.foto}"
              alt="foto"
            />
            <p>Nome: ${item.nome}</p>
            <p>Local: ${item.local}</p>
            <p>Diária: R$ ${item.diaria.toFixed(2)}</p>
            <div>
              <i class="fa fa-plus" onclick="adicionaHospedagem(${item.id})"></i> <b> ${item.quantidade} </b> <i class="fa fa-minus"></i>
            </div>
            <i class="fa fa-shopping-cart"></i>
        </div>
         ` 
    }
    divListaCards.innerHTML = listaLi
}

const atualizaCarros = (lista) => {
    const divListaCards = document.getElementById('listaCards')
    listaLi = ""
    for (item of lista){
        listaLi += `
        <div class="card">
            <img
              src="${item.foto}"
              alt="foto"
            />
            <p>Nome: ${item.carro}</p>
            <p>Montadora: ${item.montadora}</p>
            <p>Diária: R$ ${item.diaria.toFixed(2)}</p>
            <div>
              <i class="fa fa-plus" onclick="adicionaCarro(${item.id})"></i> <b>  ${item.quantidade} </b> <i id = "minus" class="fa fa-minus"></i>
            </div>
            <i class="fa fa-shopping-cart"></i>
        </div>
         ` 
    }
    divListaCards.innerHTML = listaLi
}
