var randomNumber1 = Math.floor((Math.random() * 6) + 1)
var randomNumber2 = Math.floor((Math.random() * 6) + 1)
var images1 = document.getElementsByTagName("img")[0].setAttribute("src", `./images/dice${randomNumber1}.png`)
var images2 = document.getElementsByTagName("img")[1].setAttribute("src", `./images/dice${randomNumber2}.png`)

var geth1 = document.querySelector("h1")


if (randomNumber1 > randomNumber2) {
    geth1.innerHTML = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    geth1.innerHTML = "Player 2 Wins!"
} else {
    geth1.innerHTML = "Draw!"
}
console.log(geth1)