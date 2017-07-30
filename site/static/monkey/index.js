(function() {
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,. '.split('');
  var targetString = 'It was the best of times, it was the blurst of times. ';
  var inputString = '';
  var lettersLength = letters.length;
  var monkeyAdded = false;

  const DISPLAY = document.querySelector('.display');

  function addCharacter() {
    inputString += letters[~~(Math.random() * lettersLength)];
  }

  function render() {
    DISPLAY.innerText = inputString;
  }

  function checkValidity() {
    return inputString === targetString.substr(0, inputString.length);
  }

  function addMonkey() {
    monkeyAdded = true;
    letters.push('🙊');
    lettersLength = letters.length;

    targetString += '🙊';
  }

  function run() {
    addCharacter();
    render();

    if (!checkValidity()) {
      inputString = inputString.substr(0, inputString.length - 1);
    }

    if (inputString !== targetString) {
      setTimeout(run, 0);
    } else if (!monkeyAdded) {
      addMonkey();
      setTimeout(run, 0);
    }
  }

  run();
}());
