
let totalGeral;
limpar();

function adicionar() {

    //recuperar valores: nume do produto, qtd e valor.
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        document.getElementById('quantidade').value = 0;
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    //calcularPreco
    let calcularPreco = valorUnitario * quantidade;


    //adicionar produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${calcularPreco}</span>
        </section>`;
        
    //atualizar valor total
    totalGeral = totalGeral + calcularPreco;
    let campoGeral = document.getElementById('valor-total');
    campoGeral.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {

    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}