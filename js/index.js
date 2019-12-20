
let pressedF = false;
let pressedK = false;

document.querySelector('body').onkeypress = function (event) {
  if(!document.querySelector('#text')) return;
  if (event.code === 'KeyF' && pressedK === false) {
    if (pressedF === true) {
      document.querySelector('#text').innerHTML = 'I said press K!!!';
      return;
    }

    document.querySelector('#text').innerHTML = 'Now press K';
    pressedF = true;
  } else if (event.code === 'KeyK') {
    if (pressedF === false) return;

    document.querySelector('#text').innerHTML = 'Good boi!';
    pressedK = true;
    document.querySelector('.hid').classList.remove('hid');
  }
}

document.querySelector('#xannyForm').onsubmit = function (event) {
  let form = document.forms.xannyForm;
  let input = form.elements.text.value;

  if (input === '') {
    writeResult('Empty string!');
    return false;
  }

  let isEncrypt = form.elements.radio.value === 'encrypt' ? true : false;

  if (isEncrypt) {
    let int = +input;

    if (isNaN(int)) {
      writeResult('Digits only!');
      return false;
    }

    result = int.toString(36);
  } else {
    result = parseInt(input, 36);

    if (isNaN(result)) {
      writeResult('Wrong input!');
      return false;
    }
  }

  writeResult(result)
  return false;
}

function writeResult(result) {
  document.querySelector('#forXannyResult').innerHTML = result;
}

console.log('it works!!!');