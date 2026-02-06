function sendMessage() {
  let input = document.getElementById("msgInput");
  let msg = input.value.trim();

  if (msg === "") return;

  let messagesDiv = document.getElementById("messages");

  // User message
  let newMsg = document.createElement("div");
  newMsg.classList.add("message", "user");
  newMsg.innerText = msg;
  messagesDiv.appendChild(newMsg);

  input.value = "";

  // Auto scroll
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Bot reply after 1 sec
  setTimeout(() => {
    let botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.innerText = "Hello! I got your message 😄";

    messagesDiv.appendChild(botMsg);

    // Auto scroll again
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 1000);
}

// Enter key send
document.getElementById("msgInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
