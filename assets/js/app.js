import players from "./players.js";
const team1 = [];
let options = "";
const vs = document.querySelector("#vs");
const addPlayerTeam1 = document.querySelector("#team1");

(function createListChoicePlayer() {
  players.forEach((player) => {
    options += `<option value=${player.name}>${player.name}</option>`;
  });
})();

vs.addEventListener("change", (data) => {
  let i = 1;
  addPlayerTeam1.innerHTML = "";

  while (i <= Number(data.target.value)) {
    addPlayerTeam1.innerHTML += `<div><select><option></option>${options}</select></div>`;
    i++;
  }
});

addPlayerTeam1.addEventListener("submit", (e) => {
  e.preventDefault();
  team1.length = 0;
  const options = document.querySelectorAll("#team1 select");
  options.forEach((player) => {
    if (player.value != "") {
      const result = players.filter((word) => word.name === player.value);
      team1.push(result);
    }
  });
  console.log("TEAM 1 : ", team1);
});
