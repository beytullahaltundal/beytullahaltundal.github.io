document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header h1");
    setInterval(() => {
        header.style.color = header.style.color === "cyan" ? "white" : "cyan";
    }, 1000);
});

