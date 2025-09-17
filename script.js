/* ===========================
   Nepal Info Page Script
   - Handles fun fact button
   - Navigation toggle (if added)
   - Future interactive features
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  const facts = [
    "Nepal has the only non-rectangular national flag in the world.",
    "Eight of the world’s 14 highest mountains are in Nepal.",
    "Lumbini in Nepal is the birthplace of Lord Buddha.",
    "The Yeti, or Abominable Snowman, is said to inhabit the Himalayas in Nepal."
  ];

  const factBtn = document.getElementById("factBtn");
  const factText = document.getElementById("factText");

  factBtn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.textContent = randomFact;
    factText.classList.remove("hidden");
  });
});
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "1234") {
        loginMessage.textContent = "✅ Login successful! Welcome, " + username;
      } else {
        loginMessage.textContent = "❌ Invalid username or password.";
      }
      loginMessage.classList.remove("hidden");
      loginForm.reset();
    });
  }
