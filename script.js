var xp = 0;
var health = 100;
var gold = 50;
var currentWeapon = 0;
var fighting;
var monsterHealth;
var inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const inventoryText = document.querySelector("#inventoryText");

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function xpGain(num) {
  xp += num;
  xpText.innerText = xp;
}

function healthGain(num) {
  health += num;
  healthText.innerText = health;
}

function goldGain(num) {
  gold += num;
  goldText.innerText = gold;
}

function goStore() {
  text.innerText = "You enter the store.";
  button1.innerText = "Buy health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go home";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goHome;
  button1.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "block";
  text.style.display = "block";
  inventoryText.style.display = "none";
}

function goCave() {
  text.innerText = "You enter the cave.";
  button1.innerText = "Fight dragon";
  button2.innerText = "Go back to store";
  button3.innerText = "Go home";
  button1.onclick = fightDragon;
  button2.onclick = goStore;
  button3.onclick = goHome;
  button1.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "block";
  text.style.display = "block";
  inventoryText.style.display = "none";
}
