//abrir ou fehcar barra lateral//
document.addEventListener("DOMContentLoaded", function () {
    var openBtn = document.getElementById("openBtn");
    var sidebar = document.getElementById("mySidebar");
    var content = document.querySelector(".content");

    openBtn.addEventListener("click", function () {
        if (sidebar.style.width === "250px") {
            sidebar.style.width = "60px";
           // openBtn.innerHTML = "";
            content.style.marginLeft = "0px"; // Redefine a margem quando a barra é fechada
            openBtn.style.marginLeft = "0px";
            openBtn.style.backgroundColor = "#2855e7";


        } else {
            sidebar.style.width = "250px";
           // openBtn.innerHTML = "";
            content.style.marginLeft = "200px"; // Define a margem quando a barra é aberta
            openBtn.style.marginLeft = "180px";
            openBtn.style.backgroundColor = "#1a3591";
        }
    });
});

//Adicionar itens ao estoque
function addItem() {
    var itemName = document.getElementById("itemName").value;
    var itemQuantity = parseInt(document.getElementById("itemQuantity").value);
    var itemTypeSelect = document.getElementById("itemType").value;
    var itemType = itemTypeSelect.options[itemTypeSelect.selectedIndex].value;



    if (itemName.trim() === "" || isNaN(itemQuantity) || itemQuantity <= 0 || itemType === "") {
        alert("Por favor, insira um nome e uma quantidade válida.");
        return;
    }

    var stockList = document.getElementById("stockList");
    var newRow = stockList.insertRow(stockList.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = itemName;
    cell2.innerHTML = itemQuantity;
    cell3.innerHTML = itemType;

    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
    itemTypeSelect.selectedIndex = 0; // Reinicia a caixa de seleção para a opção padrão

}

//ajustar contepudo da página ao abrir ou fechar barra lageral
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var content = document.getElementById("mainContent");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "70px";
    } else {
        sidebar.style.width = "0px";
        content.style.marginLeft = "70px";
    }
}