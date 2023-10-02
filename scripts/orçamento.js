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

// Obtém o elemento do ícone
const icon = document.getElementById("searchIcon");

// Adiciona um ouvinte de eventos para ativar a animação quando o mouse estiver sobre o ícone
icon.addEventListener("mouseenter", () => {
    icon.classList.add("fa-bounce");
});

// Remove a classe de animação quando o mouse deixar o ícone
icon.addEventListener("mouseleave", () => {
    icon.classList.remove("fa-bounce");
});
