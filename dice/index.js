var randomNumber1 = Math.ceil(Math.random() * 6 );
var random_img = "./images/dice" + randomNumber1 + ".png";
$(".img1").attr("src", random_img);
var randomNumber2 = Math.ceil(Math.random() * 6 );
var random_img1 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",random_img1);
var final_result = "";
final_result = (randomNumber1 === randomNumber2)? "Draw." : (randomNumber1 > randomNumber2)? "Player 1 is the Winner." :  "Player 2 is the Winner."
document.querySelector("h1").textContent = final_result;
var button = document.querySelector("button");
button.addEventListener("click",() => {
    window.location.reload();
});





