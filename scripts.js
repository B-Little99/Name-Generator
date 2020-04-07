const firstNameList = ["Logan", "Launa", "Katherine", "Daniel", "Moses", "Tayna", "Tyrion", "Axe", "Tommy", "Jesse", "Clorinda", "Luke", "Jon", "Clementina", "Rene", "Bex", "Rob", "Latoya", "Walter", "Shoshana", "Ryan", "Beth", "Brandon", "Luke", "Matt", "Andy", "Greg", "Gary", "Hunter", "Jack", ];

const secondNameList = ["Lannister", "Stark", "Clegane", "Frasca", "Houston", "Ake", "Kanan", "Cantor", "Mizell", "Cleland", "Cooper", "Darby", "Venez", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Uptown", "Vader", "Vail", "Valente", "Van", "Vanderpoel", "Heinrich", "Schrader", "Wagle", "Wagner", "Valdes", "Weinstein", "Weiss"];

let button = document.getElementById("button");
let nameArea = document.getElementById("nameArea");


button.addEventListener("click", randomNameGen)


function randomNameGen(){
    let firstName = firstNameList[Math.floor(Math.random() * (firstNameList.length - 1))];
    let secondName = secondNameList[Math.floor(Math.random() * (secondNameList.length - 1))];
    let fullName = firstName + " " + secondName;
    nameArea.innerHTML = fullName;
}