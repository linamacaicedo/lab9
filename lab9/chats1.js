document.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.getElementById("messageContainer");
    const messageForm = document.getElementById("messageForm");
    const messageInput = document.getElementById("messageInput");
    const chatHeader = document.getElementById("chatHeader");
    const clearButton = document.getElementById("clearButton");
    
    let currentUser = "Lina";

    document.getElementById("linaButton").addEventListener("click", () => switchUser("Lina"));
    document.getElementById("nicolButton").addEventListener("click", () => switchUser("Nicol"));

    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (messageInput.value.trim() === "") return;
        addMessage(messageInput.value, currentUser);
        messageInput.value = "";
    });

    clearButton.addEventListener("click", () => {
        messageContainer.innerHTML = "";
    });

    function switchUser(user) {
        currentUser = user;
        chatHeader.textContent = `Chat de ${user}...`;
        messageInput.placeholder = `Escribe aquí, ${user}...`;

        document.getElementById("linaButton").classList.toggle("active", user === "Lina");
        document.getElementById("nicolButton").classList.toggle("active", user === "Nicol");
    }

    function addMessage(text, user) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add(user === "Lina" ? "lina-message" : "nicol-message");
        messageElement.textContent = text;
        messageContainer.appendChild(messageElement);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
});
