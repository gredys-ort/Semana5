
// script.js
const formatButton = document.getElementById("format-button");
const likesInput = document.getElementById("likes-input");
const formattedLikes = document.getElementById("formatted-likes");

formatButton.addEventListener("click", formatLikes);

function formatLikes() {
    const likes = parseFloat(likesInput.value);
    
    if (isNaN(likes)) {
        formattedLikes.textContent = "Por favor, ingresa un número válido.";
        return;
    }
    
    let formatted = "";
    
    if (likes < 1000) {
        formatted = likes.toString();
    } else if (likes < 1000000) {
        formatted = (likes / 1000).toFixed(1) + "K";
    } else {
        formatted = (likes / 1000000).toFixed(1) + "M";
    }
    
    const heartIcon = "❤️";
    formattedLikes.innerHTML = `Número de Likes: ${formatted} ${heartIcon}`;
}
