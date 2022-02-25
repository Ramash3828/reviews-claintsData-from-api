// COUNTER

const value = document.getElementById("value");
const btns = document.querySelectorAll('.btn');
console.log(value)
let count = 0;
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let style = e.currentTarget.classList;

        if (style.contains('incrise')) {
            count++
        } else if (style.contains('decrise')) {
            count--
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }
        value.innerText = count;
    })
})