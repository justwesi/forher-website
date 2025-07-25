
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
            cancel(); // Close dropdown on click
        }
    });
});

const typewriterText = document.querySelector(".typewriter-text");
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    let index = 0;
    function type() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    type();
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile dropdown if it's open
                const dropdown = document.querySelector(".dropdown");
                dropdown.style.transform = "translateY(-500px)";
                document.querySelector(".hamburg").style.opacity = 1;
                document.querySelector(".hamburg").style.pointerEvents = "auto";
                document.querySelector(".cancel").style.opacity = 0;
                document.querySelector(".cancel").style.pointerEvents = "none";
            }
        }
    });
});

// === TELEGRAM NOTIFICATION ===
function sendTelegramMessage(question, answer) {
  const chatId = "1455237060"; // Replace with your real Telegram ID
  const botToken = "8221753189:AAGgZGxu8AYqoOZR_MgdxMhyHXEBxYVM4aY"; // Replace with your Telegram bot token

  const message = `📩 New Answer\n\n❓ Question: ${question}\n✅ Answer: ${answer}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(res => res.json())
  .then(data => console.log("Telegram message sent:", data))
  .catch(err => console.error("Telegram error:", err));
}

// === QUESTION 1 ===
let selectedAnswer1 = "";

function selectAnswer1(choice) {
  selectedAnswer1 = choice;
  document.getElementById("confirm-wrapper1").style.display = "block";
}

function confirmAnswer1() {
  const text = document.getElementById("response-text1");
  const gif = document.getElementById("response-gif1");
  const response = document.getElementById("response1");

  response.style.display = "flex";
  gif.style.display = "block";

  if (selectedAnswer1 === "yes") {
    text.innerText = `
Pros:
• Loyal and loving  
• Good listener  
• Will romanticize the tiniest things with you

Cons:
• Might overthink  
• Will write you poetry at 2am  
• Gets emotionally attached 😅`;

    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDN2aTI5NmczOGR2NnhqZWppcndubDNzcXNhMzI0dm0xdnh1ZmtsdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DTXugNB5Jt6Ra/giphy.gif";
  } else {
    text.innerText = `I understand 💛  
Even asking was a leap of courage for me. Thank you for your honesty.`;
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWdiZ2MxM2ltZnVtYmpjZjA2bTkzcndzdWF0ZmxiNGZ1cXB6eWt3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dmZ8yrrTE6ypQjEHAO/giphy.gif";
  }

  document.getElementById("confirm-wrapper1").style.display = "none";

  // 💌 SEND TELEGRAM MESSAGE
  sendTelegramMessage("Do I have a chance with you?", selectedAnswer1);
}

// === QUESTION 2 ===
let selectedAnswer2 = "";

function selectAnswer2(choice) {
  selectedAnswer2 = choice;
  document.getElementById("confirm-wrapper2").style.display = "block";
}

function confirmAnswer2() {
  const text = document.getElementById("response-text2");
  const gif = document.getElementById("response-gif2");
  const response = document.getElementById("response2");

  response.style.display = "flex";
  gif.style.display = "block";

  if (selectedAnswer2 === "yes") {
    text.innerText = `Really? 😭  
A walk, some coffee, deep convos —  
I'd love that, honestly. No pressure. Just vibes and laughter.`;

    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWFnY2c0NTZvNGd4aGZrcDB4enc5bjZwc2duM3g0NTExMXJ2aDk1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7aMr0to2ehlK2UE/giphy.gif";
  } else {
    text.innerText = `That’s okay 💛  
Maybe another time, in another mood, with the same moon.`;

    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3l0cnBudmEyOXBxeWM0ZmtyMWQxOW5qb2V0bnRka3c4ZXg3bGZ3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aJPCUIbuEPAPK/giphy.gif";
  }

  document.getElementById("confirm-wrapper2").style.display = "none";

  // 💌 SEND TELEGRAM MESSAGE
  sendTelegramMessage("Would you like to hang out or talk in person sometime?", selectedAnswer2);
}