document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("startBtn");
    const storySection = document.getElementById("story");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const responseMessage = document.getElementById("responseMessage");

    startBtn.addEventListener("click", function() {
        storySection.classList.remove("hidden");
        startBtn.style.display = "none";
    });

    yesBtn.addEventListener("click", function() {
        responseMessage.textContent = "¡𝚂𝚊𝚋𝚒𝚊 𝚚𝚞𝚎 𝚍𝚒𝚛𝚒𝚊𝚜 𝚚𝚞𝚎 𝚜𝚒! 💖✨";
        responseMessage.classList.remove("hidden");
        yesBtn.style.display = "none"; // Oculta el botón "Sí"
        noBtn.style.display = "none"; // Oculta el botón "No"
    });

    noBtn.addEventListener("click", function() {
        responseMessage.textContent = "𝙸𝚗𝚒𝚌𝚒𝚊𝚛𝚊𝚜 𝚞𝚗𝚊 𝚐𝚞𝚎𝚛𝚛𝚊";
        responseMessage.classList.remove("hidden");
        yesBtn.style.display = "none"; // Oculta el botón "Sí"
        noBtn.style.display = "none"; // Oculta el botón "No"
    });
});

