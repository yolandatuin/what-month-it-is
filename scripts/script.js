let month = document.querySelector(".js_month");
let itemsList = document.querySelector(".js_ul");

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthArray;
const currentMonthName = months[currentMonth];

month.innerHTML = currentDay + " of " + currentMonthName + " of " + currentYear;

fetch('months.json')
    .then(response => response.json())
    .then(data =>{
        monthArray = data;
        paintData();
    })
    .catch(error => console.log("Error al cargar el json", error))

function paintData() {
        const currentMonthInfo = monthArray[currentMonthName];
        const monthVeggies = currentMonthInfo.vegetables;
        const monthFruits = currentMonthInfo.fruits;
        const monthStyle = currentMonthInfo.style;

        document.body.style.color = monthStyle[0];
        document.querySelector(".h1_color").style.color = monthStyle[1];
        document.body.style.backgroundImage = `url('${monthStyle[2]}')`;

        for (let item in monthVeggies) { //"in" because it's an Object, not an Array. 
        itemsList.innerHTML += `<li>${monthVeggies[item]}</li>`
        }
        for (let item in monthFruits) { //"in" because it's an Object, not an Array. 
        itemsList.innerHTML += `<li>${monthFruits[item]}</li>`
        }
}