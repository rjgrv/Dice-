
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = "dice" + randomnumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", image1);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = "dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "💪🔺Player 1 wins!";
}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!💪🔺";
}
else{
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
