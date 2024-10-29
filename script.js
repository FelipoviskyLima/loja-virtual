let total = 0;
const carrinhoItens = document.getElementById("carrinho-itens");
const totalPreco = document.getElementById("total-preco");


function adicionarAoCarrinho(nome, preco) {
    const item = document.createElement("div");
    item.className = "carrinho-item";
    item.innerHTML = `
        <h4>${nome}</h4>
        <div class="carrinho-item-preco">R$ ${preco.toFixed(2)}</div>
    `;
    carrinhoItens.appendChild(item);
    total += preco;
    totalPreco.innerText = `R$ ${total.toFixed(2)}`;
}
