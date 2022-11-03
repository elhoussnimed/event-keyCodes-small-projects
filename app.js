const eventKeyContainer = document.querySelector(".container .parent:nth-child(1) .content");
const eventKeyCodeContainer = document.querySelector(".container .parent:nth-child(2) .content");
const eventCodeContainer = document.querySelector(".container .parent:nth-child(3) .content");
const container = document.querySelector(".container");
const firstMsg = document.querySelector(".firstMsg");


document.addEventListener("keydown", (e) => {
    firstMsg.style.display = "none";
    container.style.display = "flex";

    
    if(e.key === " ") {
        eventKeyContainer.innerHTML = "Space";
    } else {
        eventKeyContainer.innerHTML = e.key;
    }
    
    eventKeyCodeContainer.innerHTML = e.keyCode;
    eventCodeContainer.innerHTML = e.code;
    
})
