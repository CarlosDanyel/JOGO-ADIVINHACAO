const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.round(Math.random() * 10);

let xTent = 1;

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", resetClick);

document.addEventListener("keydown", keyEnter);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    document.querySelector(
      ".screen2 h2"
    ).innerText = ` Você acertou em ${xTent}`;
  }

  inputNumber.value = "";
  xTent++;
}

function resetClick() {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
  xTent = 1;
}

function keyEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  }
}

console.log(randomNumber);
