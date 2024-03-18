window.onload = function () {
  const screen1 = document.querySelector(".screen1");
  const screen2 = document.querySelector(".screen2");
  const btn = document.querySelector("#btn");
  const btnA = document.querySelector("#btnA");
  const phrases = document.querySelector(".phrasesOfCoockie");
  const phrasesOfCookie = [
    "Quando estiver triste... Cante uma canção e faça a pessoa mais perto de você sorrir!",
    "Sou feliz por ser como sou, por ter o que tenho, mas amanhã quero ser ainda mais e para isso luto diariamente",
    "ABRA SUA MENTE E SE REINVENTE!",
    "Você percebe que encontrou a pessoa certa, quando olha em seus olhos...",
    "Felicidade, entra sem bater",
  ];
  let xAttempts = 1;

  btn.addEventListener("click", () => {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");
    phrases.innerText = phrasesOfCookie[Math.round(Math.random() * 5)];
  });

  btnA.addEventListener("click", function () {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
  });

  console.log(btn);
};
