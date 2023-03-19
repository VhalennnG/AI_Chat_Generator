import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat-container");

let loadInterval;

function loader(element) {
  element.textContext = "";

  loadInterval = setInterval(() => {
    element.textContext += ".";

    if (element.textContext === "....") {
      element.textContext = "";
    }
  }, 300);
}

function typeText(element, text) {
  let index = 0;

  let Interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalNumber = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalNumber}`;
}

function chatStripe(isAi, value, uniqueId) {
  return `
    <div class="wrapper ${isAi && "ai"}">
      <div class="chat>
        <div className="profile">
        <img src="${isAi ? bot : user} alt="${isAi ? "bot" : "user"}" />
        </div>
      </div>
    </div>
    `;
}
