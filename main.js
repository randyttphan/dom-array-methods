//DOM Elements
const main = document.getElementById("main");
const addUserButton = document.getElementById("add-user");
const doubleButton = document.getElementById("double");
const showMillionairesButton = document.getElementById("show-millionaires");
const sortButton = document.getElementById("sort");
const calculateWealthButton = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//Fetch random user and add money
async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  console.log(newUser);
}

//Event Listeners
