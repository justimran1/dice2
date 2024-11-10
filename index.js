var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 *6)+1;

var randomImg = "dice" + randomNumber1 + ".png";
var dicepick = "images/" + randomImg;

document.querySelectorAll("img")[0].setAttribute("src", dicepick );

var randomnumber2 = Math.floor(Math.random()*6 )+1;
var randomImg2 = "images/dice" + randomnumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImg2 );


if (dicepick > randomImg2) {
    document.querySelector("h1").innerHTML = "Player 1 WINS❤🚩"
}
else if ( dicepick === randomImg2){
    document.querySelector("h1").innerHTML= "DRAW😏"
}
else{
    document.querySelector("h1").innerHTML= "Player 2 WINS❤🚩"
}