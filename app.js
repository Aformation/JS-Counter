let count = 0;

const btnDecrease = document.getElementsByClassName('decrease');
const btnReset = document.getElementsByClassName('reset');
const btnIncrease = document.getElementsByClassName('increase');

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        if(style.contains('decrease')) {
            count--;
        }
        else if (style.contains('reset')) {
            count = 0;
        } else {
            count++;
        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
    })
});