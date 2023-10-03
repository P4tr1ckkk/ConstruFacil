document.addEventListener("DOMContentLoaded", function () {
    var openBtn = document.getElementById("openBtn");
    var sidebar = document.getElementById("mySidebar");
    var content = document.querySelector(".content");

    openBtn.addEventListener("click", function () {
        if (sidebar.style.width === "250px") {
            sidebar.style.width = "60px";
           // openBtn.innerHTML = "";
            content.style.marginLeft = "60px"; // Redefine a margem quando a barra é fechada
            openBtn.style.marginLeft = "0px";
            openBtn.style.backgroundColor = "#2855e7";


        } else {
            sidebar.style.width = "250px";
           // openBtn.innerHTML = "";
            content.style.marginLeft = "250px"; // Define a margem quando a barra é aberta
            openBtn.style.marginLeft = "180px";
            openBtn.style.backgroundColor = "#1a3591";
        }
    });
});


 
// Função para adicionar um item à aba lateral direita
function adicionarItem(item) {
    const itensAdicionados = document.getElementById("itensAdicionados");
    const listItem = document.createElement("li");
    listItem.textContent = item;
    itensAdicionados.appendChild(listItem);
}

// Função para adicionar um item ao orçamento
function adicionarAoOrcamento(botao) {
    var item = botao.parentNode.parentNode.querySelector(".card_centro").textContent;
    var medidas = botao.parentNode.querySelector("#numeroMedidas").value;
    var quantidade = parseInt(botao.parentNode.querySelector("input").value);

    if (quantidade > 0) {
        // Criar um novo elemento li para representar o item no orçamento
        var novoItem = document.createElement("li");
        novoItem.textContent = item + " - Medidas: " + medidas + ", Quantidade: " + quantidade;

        // Adicionar o novo item à lista de itens do orçamento
        var itensAdicionados = document.getElementById("itensAdicionados");
        itensAdicionados.appendChild(novoItem);

        // Limpar os campos de medidas e quantidade
        botao.parentNode.querySelector("#numeroMedidas").value = "";
        botao.parentNode.querySelector("input").value = "";
    }
}