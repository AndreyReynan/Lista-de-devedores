const devedores = [
    {nome: "Andrey", divida: 50},
    {nome: "Ailane", divida: 0},
    {nome: "Paulo", divida: 10},
    {nome: "Victor", divida: 0},
    {nome: "Marcos", divida: 200},
    {nome: "Gabriel", divida: 10},
    {nome: "Douglas", divida: 0}
]
const time = setInterval(() => {
    for (let i = 0; i < devedores.length; i++) {
        const nomeElement = document.getElementById("nome" + (i + 1));
        const dividaElement = document.getElementById("divida" + (i + 1));
        if (nomeElement && dividaElement) {
            nomeElement.textContent = devedores[i].nome;
            dividaElement.textContent = devedores[i].divida;
        } else {
            console.log("Elementos HTML não encontrados para atualização.");
        }
    }
}, 300);
//console.log(devedores)

let filtrosBtn = document.getElementById("filtros")
let filtrosContainer = document.getElementById("filtrosContainer")
filtrosBtn.addEventListener("click", ()=>{
    filtrosContainer.style.display="block"
})
let filtrarBtn = document.getElementById("filtrar")
let filterOption = document.getElementById("escolherFiltro")
const filterSelect = ()=>{
    let selecionado = filterOption.options[filterOption.selectedIndex].text
    if(selecionado == "Nome"){
        devedores.sort((a, b) =>{
            return a.nome.localeCompare(b.nome)
        })
        //console.log(devedores)
    }
    else if(selecionado == "Divida"){
        devedores.sort((a, b)=>{
            return b.divida - a.divida
        })
        //console.log(devedores)
    }
}
filtrarBtn.addEventListener("click", filterSelect)
let editarbtn = document.getElementById("editarTabela")
let editarContainer = document.getElementById("editDivida")
editarbtn.addEventListener("click", ()=>{
    editarContainer.style.display = "flex"
})

let editarPronto = document.getElementById("editar")
const editar = ()=>{
    let inserirNome = document.getElementById("inserirNome").value
    let inserirValor = document.getElementById("inserirValor").value
    let valor = parseFloat(inserirValor)
    let indice = devedores.findIndex(devedor => devedor.nome === inserirNome)
    if(indice !== -1){
        devedores[indice].divida = valor
        //console.log(devedores)
    }
    // else{
    //     console.log("não encontrado")
    // }
}
editarPronto.addEventListener("click", editar)
const adcionarbtn = document.getElementById("adicionarBtn")
const adicionarContainer = document.getElementById("adicionarContainer")
adcionarbtn.addEventListener("click", ()=>{
    adicionarContainer.style.display = "flex"
})
const inserir =()=>{
    let novoNome = document.getElementById("adcionarNome").value
    let dividaString = document.getElementById("adcionarDivida").value
    let valor = parseFloat(dividaString)
    const novoDevedor = {nome: novoNome, divida: valor};
    devedores.push(novoDevedor);
    const tabela = document.getElementById("tabela");
    const novaLinha = tabela.insertRow(-1);
    const nomeCelula = novaLinha.insertCell(0);
    const dividaCelula = novaLinha.insertCell(1);
    nomeCelula.textContent = novoDevedor.nome;
    dividaCelula.textContent = novoDevedor.divida;
    nomeCelula.id = "nome" + devedores.length;
    dividaCelula.id = "divida" + devedores.length;  
}
const inserirBtn = document.getElementById("inserir")
inserirBtn.addEventListener("click", inserir)
const excluirBtn = document.getElementById("excluirBtn")
const excluirContainer = document.getElementById("excluirContainer")
excluirBtn.addEventListener("click", ()=>{
    excluirContainer.style.display = "flex"
})
const excluir=()=>{
    let nome = document.getElementById("excluirNome").value
    const indiceExcluir = devedores.findIndex(devedor => devedor.nome === nome);
    if (indiceExcluir !== -1) {
        devedores.splice(indiceExcluir, 1);
        const tabela = document.getElementById("tabela");
        tabela.deleteRow(indiceExcluir + 1); 
        for (let i = indiceExcluir + 1; i < tabela.rows.length; i++) {
            const nomeCelula = tabela.rows[i].cells[0];
            const dividaCelula = tabela.rows[i].cells[1];
            nomeCelula.id = "nome" + i;
            dividaCelula.id = "divida" + i;
        }
    } else {
        console.log("Devedor não encontrado para exclusão.");
    }
}
const excluirPronto = document.getElementById("excluir")
excluirPronto.addEventListener("click", excluir)