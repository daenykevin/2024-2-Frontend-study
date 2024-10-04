const number = document.getElementById("counting-num");
const tenincButton = document.getElementById("increase10");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const tendecButton = document.getElementById("decrease10");
const resButton = document.getElementById("reset");

let count = 0;
number.textContent = count;

function increaseCount() {
    count++; // count = count +1
    number.textContent = count; //숫자 변화 반영
    showNumber();
}

function tenincreaseCount() {
    count = count + 10;
    number.textContent = count;
    showNumber();
}

function decreaseCount() {
    count--;
    number.textContent = count;
    showNumber();
}

function tendecreaseCount() {
    count = count - 10;
    number.textContent = count;
    showNumber();
}

function resetCount() {
    count = 0;
    number.textContent = count;
    showNumber();
}

function showNumber() {
    if (count >= 0){
        number.style.color = `rgba(${count},0,0)`;
    }
    else if (count <= 0) {
        number.style.color = `rgba(0,${-count},0)`;
    }
    number.textContent = count;
}

incButton.addEventListener("click",increaseCount);
decButton.addEventListener("click",decreaseCount);
tenincButton.addEventListener("click",tenincreaseCount);
tendecButton.addEventListener("click",tendecreaseCount)
resButton.addEventListener("click",resetCount);