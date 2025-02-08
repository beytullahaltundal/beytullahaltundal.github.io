document.addEventListener("DOMContentLoaded", function() {
    // Başlık animasyonu
    let header = document.querySelector("header h1");
    header.style.opacity = "0";
    header.style.transform = "translateY(-20px)";

    setTimeout(() => {
        header.style.transition = "opacity 1.5s, transform 1.5s";
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
    }, 500);

    // Resimlere hover efekti ekleme
    let images = document.querySelectorAll(".content img");

    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.5s";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});

