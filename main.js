const startBtn = document.querySelector("#start");
const allBoxes = document.querySelectorAll(".box");
const winnerColorBtn = document.querySelector("#winnerColor");
var luckyColor = undefined;
var colorsCollection = [];



function generateRand(start, end) {
    return Math.round(Math.random() * (end - start) + start);
}

function generateColor() {
    return `rgb(${generateRand(0, 255)}, ${generateRand(0, 255)}, ${generateRand(0, 255)})`;
}

function getHardColorsList() {
    permissionArea.setAttribute("clickable", 'true');
    var tmpColors = [];
    while (tmpColors.length < 6) {
        tmpColors.push(generateColor());
    }

    return tmpColors;
}
function getEasyColorsList() {
    permissionArea.setAttribute("clickable", 'true');
    var tmpColors = [];
    while (tmpColors.length < 3) {
        tmpColors.push(generateColor());
    }

    return tmpColors;
}


function setColorsToBoxes(colorsList) {
    var resultBtn = document.querySelector('#resultBtn');
    var winnerColorBtn = document.querySelector('#winnerColor');
    var permissionArea = document.querySelector('#permissionArea');
    permissionArea.setAttribute('clickCount', '0');
    allBoxes.forEach(item => {
        item.style.backgroundColor = colorsList.pop();

        item.addEventListener('click', (event) => {
            var clickeBbtn = event.target;
            if (permissionArea.getAttribute("clickable") == "true") {

                if (clickeBbtn.style.backgroundColor == winnerColorBtn.innerText) {
                    resultBtn.style.backgroundColor = "green";
                    resultBtn.innerText = "succesfully";
                    alert("Winner")

                } else {
                    resultBtn.style.backgroundColor = "red";
                    resultBtn.innerText = "unsuccesfully";
                }

                var count = permissionArea.getAttribute('clickCount');
                console.log(count);
                if (count == '1') {
                    permissionArea.setAttribute("clickable", 'false');
                }
                permissionArea.setAttribute("clickCount", Number(count) + 1);

            }
        })
    })
}



function getLuckyColor(colorsList) {
    return colorsList[generateRand(0, colorsList.length - 1)];
}

const easyButton = document.querySelector('.easymode');
const hardButton = document.querySelector('.hardmode');
const filterButton = document.querySelector('.filterbtn');
const ebox = document.querySelectorAll('#ebox');

easyButton.addEventListener('click', () => {
    startBtn.addEventListener("click", function () {
        colorsCollection = getEasyColorsList();
        luckyColor = getLuckyColor(colorsCollection);
        setColorsToBoxes(colorsCollection);
        winnerColorBtn.textContent = luckyColor;
        resetBtns();
    })
})

hardButton.addEventListener('click', () => {
    startBtn.addEventListener("click", function () {
        colorsCollection = getHardColorsList();
        luckyColor = getLuckyColor(colorsCollection);
        setColorsToBoxes(colorsCollection);
        winnerColorBtn.textContent = luckyColor;
        resetBtns();
    })
})

function resetBtns() {
    var resultBtn = document.querySelector('#resultBtn');

    resultBtn.style.backgroundColor = "#bb2d3b";
    resultBtn.innerText = "Result";
}