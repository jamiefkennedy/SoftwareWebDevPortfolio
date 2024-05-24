const form = document.getElementById("card-form");
const cardContainer = document.getElementById("card-grid");

// Upon submission, dynamically generate a “card” within a grid on the board that displays the entered name, message, and image/GIF
form.addEventListener("submit", (event) => {
    createCard();
    event.preventDefault();
    form.reset();
    
});
function createCard() {
    const username = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const imageGIF = document.getElementById("image-gif").value;
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    const newName = document.createElement("h3");
    newName.innerHTML = username;
    const newMessage = document.createElement("p");
    newMessage.innerHTML = message;
    const newImageGIF = document.createElement("img");
    newImageGIF.setAttribute("src", imageGIF);
    const buttonDiv = document.createElement("div");
    const featureBtn = document.createElement("button");
    featureBtn.setAttribute("class", "feature");
    featureBtn.innerHTML = "Feature";
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.innerHTML = "Delete";
    buttonDiv.append(featureBtn);
    buttonDiv.append(deleteBtn);
    newCard.append(newName);
    newCard.append(newMessage);
    newCard.append(newImageGIF);
    newCard.append(buttonDiv);
    cardContainer.append(newCard);
    // “Feature” button that, upon clicking, highlights the card by enhancing the font of the text and changing the border to a golden color to signify its importance.
    featureBtn.addEventListener("click", () => {
        newCard.classList.toggle("featured-card");
    });
    // “Delete” button on each card that allows for its removal from the board when clicked.
    deleteBtn.addEventListener("click", () => {
        newCard.remove();
    } );
}
