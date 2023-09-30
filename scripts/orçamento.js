document.addEventListener("DOMContentLoaded", function () {
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");
    var sidebar = document.getElementById("mySidebar");
    var content = document.querySelector(".content");

    openBtn.addEventListener("click", function () {
        if (sidebar.style.width === "250px") {
            sidebar.style.width = "60px";
            openBtn.innerHTML = "";
            content.style.marginLeft = "60px"; // Redefine a margem quando a barra é fechada
        } else {
            sidebar.style.width = "250px";
            openBtn.innerHTML = "";
            content.style.marginLeft = "250px"; // Define a margem quando a barra é aberta
        }
    });

    closeBtn.addEventListener("click", function () {
        sidebar.style.width = "60px";
        openBtn.innerHTML = "Abrir";
        content.style.marginLeft = "60px"; // Redefine a margem quando a barra é fechada
    });
});
