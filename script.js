const snaps = document.querySelector("#snaps");
snaps.addEventListener("click", tjek);

document.querySelector("#fanta").addEventListener("click", tjek);
document.querySelector("#cola").addEventListener("click", tjek);
document.querySelector("#øl").addEventListener("click", tjek);

function tjek() {
  console.log(this.alt);
  if (this.alt == "øl" || this.alt == "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}

function hilsen() {
  const tid = new Date().getHours();
  if (tid < 5) {
    console.log("Godnat");
  } else if (tid < 10) {
    console.log("Godmorgen");
  } else if (tid < 18) {
    console.log("Goddag");
  } else {
    console.log("Godaften");
  }
}
hilsen();

document.querySelector("button").addEventListener("click", tjekTal);
let forsoeg = 0;
const ranNum = Math.floor(Math.random() * 11);

function tjekTal() {
  forsoeg++;
  const brugerTal = document.querySelector("#tal").value;

  if (ranNum > brugerTal) {
    alert("Øv! " + brugerTal + " var for lavt. Prøv igen :)");
  } else if (ranNum < brugerTal) {
    alert("Øv! " + brugerTal + " var for højt. Prøv igen :)");
  } else {
    alert(brugerTal + " er rigtigt!" + " Du brugte " + forsoeg + " forsøg. Prøv igen med et nyt tal :)");
    location.reload();
  }
}
