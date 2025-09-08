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
