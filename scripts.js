const firstNameList = ["Logan", "Launa", "Katherine", "Daniel", "Moses", 
"Tayna", "Tyrion", "Axe", "Tommy", "Jesse", "Clorinda", "Luke", "Jon", 
"Clementina", "Rene", "Bex", "Rob", "Latoya", "Walter", "Shoshana", 
"Ryan", "Beth", "Brandon", "Luke", "Matt", "Andy", "Greg", "Gary", 
"Hunter", "Jack", ];

const secondNameList = ["Lannister", "Stark", "Clegane", "Frasca", 
"Houston", "Ake", "Kanan", "Cantor", "Mizell", "Cleland", "Cooper", 
"Darby", "Venez", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", 
"Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", 
"Ulrich", "Uptown", "Vader", "Vail", "Valente", "Van", "Vanderpoel", 
"Heinrich", "Schrader", "Wagle", "Wagner", "Valdes", "Weinstein", "Weiss"];

let button = document.getElementById("button");
let nameArea = document.getElementById("nameArea");

button.addEventListener("click", randomNameGen)

function randomNameGen(){
    let firstName = firstNameList[Math.floor(Math.random() * (firstNameList.length - 1))];
    let secondName = secondNameList[Math.floor(Math.random() * (secondNameList.length - 1))];
    let fullName = firstName + " " + secondName;
    nameArea.innerHTML = fullName;
}


const wordList = ["water", "bear", "cat", "fox", "swim", "motionless", 
"thankful", "bored", "quiet", "tough", "baby", "town", "house", "cottage", 
"man", "window", "tragedy", "Queen", "King", "friends", "family", "green", 
"clothes", "dragon", "director", "river", "flow", "explosion", "attack", 
"damage", "big", "disaster", "economic", "bank", "shop", "environment", 
"employee", "kitchen", "organisation", "opportunity", "rich", "fly", 
"paint", "production", "oil", "energy", "reflective", "research", "revealing",
"curious", "service", "spooky", "fast", "long", "loud", "disruptive", "angry",
"taxing", "demanding", "exhausting", "conventional", "handy", "intelligent",
"puzzled", "quirky", "eager", "greedy", "lazy", "joke", "prank", "hike"]

const secondWordList = ["George", "Tiger", "truck", "can", "clock",
"bedroom", "puddle", "carrot", "monitor", "sharpie", "cork", 
"flowers", "lake", "UK", "block", "brick", "team", "game", "flowers", 
"cards", "USB", "floor", "lizard", "balloon", "frame", "magnet", 
"helmet", "note", "monster", "banana", "sponge", "paper", "CD", "outlet",
"table", "pillow", "bottle", "lamp", "shirt", "spoon", "sofa", "milk",
"cow", "beef", "window", "ledge", "hotel", "world", "hallway", "keys",
"TV", "mirror", "tomato", "piano", "stage", "ring", "speakers", "drill",
"metal", "mash", "speaker", "control-room", "nuclear", "web"];

let button2 = document.getElementById("buttonYTNG");
let nameArea2 = document.getElementById("nameArea2");

button2.addEventListener("click", randomYTNameGen)

function randomYTNameGen(){
    let firstWord = wordList[Math.floor(Math.random() * (wordList.length -1))];
    let secondWord = secondWordList[Math.floor(Math.random() * (secondWordList.length -1))]
    let number = Math.floor(Math.random() * 100)
    let result = firstWord + " " + secondWord + " "  + number;
    nameArea2.innerHTML = result;

}

