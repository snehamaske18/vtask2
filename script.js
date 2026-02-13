const messages = [
  "Are you sure? 🥺",
  "Really sure??",
  "Think once more 💕",
  "I will plan everything 🥹",
  "Free food maybe? 😌",
  "Last chance...",
  "Okay I’ll stop asking..."
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  if (messageIndex < messages.length) {
    noButton.textContent = messages[messageIndex];
    messageIndex++;

    const currentSize = parseFloat(
      window.getComputedStyle(yesButton).fontSize
    );

    yesButton.style.fontSize = `${currentSize * 1.3}px`;
  } else {
    showNoReasonBox();
  }
}

function handleYesClick() {
  window.location.href = "time.html";
}

function showNoReasonBox() {
  document.querySelector('.container').innerHTML = `
    <h1>Okay 🥺</h1>
    <h3>Can you tell me why? 💭</h3>
    <textarea id="reason" placeholder="Write your reason..."></textarea>
    <br><br>
    <button onclick="submitNo()">Submit</button>
  `;
}

function submitNo() {
  let reason = document.getElementById("reason").value;

  alert("Okay 💙 No problem. We’ll go on a date another day ❤️");

  // Later we add EmailJS here
}
