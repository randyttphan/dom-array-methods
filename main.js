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

  addData(newUser);
}

//Add new object to data array
function addData(object) {
  data.push(object);
  updateDOM();
}

//Update DOM
function updateDOM(providedData = data) {
  //clear main div
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";

  providedData.forEach(item => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//Event Listeners
addUserButton.addEventListener("click", getRandomUser);
