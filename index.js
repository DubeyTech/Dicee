
const button = document.querySelector('button');

button.addEventListener('click', event => {
    rollTheDice();
});

function rollTheDice() {
    //--------------------     Dice 1
    var randomNumber1 = Math.round((Math.random() * 5) + 1);
    var randomImg1 = "dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomImg1);

    //-------------------     Dice 2
    var randomNumber2 =  Math.round((Math.random() * 5) + 1);
    var randomImg2 = "dice" + randomNumber2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomImg2);

    // --------------------    Result
    var title = document.querySelector("h1");

    if (randomNumber1 < randomNumber2) {
        title.innerText = "Player 2 Wins ! 🏆";
    }
    else if (randomNumber1 > randomNumber2) {
        title.innerText = "🏆 Player 1 Wins ! ";
    }
    else {
        title.innerHTML = " !!! &nbsp&nbsp DRAW &nbsp&nbsp !!!";
    }
}
