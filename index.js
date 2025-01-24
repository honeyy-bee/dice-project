var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1 + 1;
console.log(randomNumber1);

var imageNum = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + imageNum;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
    
} else {
    document.querySelector("h1").innerHTML = "🚩It's a draw🚩";
}

