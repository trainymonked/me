
console.log('it works!!!');

let pressedF = false;
let pressedK = false;

document.querySelector('body').onkeypress = function (event) {
    if (event.code === 'KeyF' && pressedK === false) {
        if (pressedF === true) {
            document.querySelector('.text').innerHTML = 'I said press K!!!';
            return;
        }

        document.querySelector('.text').innerHTML = 'Now press K';
        pressedF = true;
    }
    else if (event.code === 'KeyK') {
        if (pressedF === false) return;

        document.querySelector('.text').innerHTML = 'Good boi!';
        pressedK = true;
    }
}