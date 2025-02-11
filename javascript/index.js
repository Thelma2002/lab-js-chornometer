const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
 
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
}

function printSplit() {
  // Create a new list item and append it to the splits list
  const newSplit = document.createElement('li');
  newSplit.className = 'list-item';
  newSplit.innerHTML = chronometer.split(); // Get formatted split time
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // Clear all list items in the splits list
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // Updates the button text and class, then starts the chronometer
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
  chronometer.start(printTime);
}

function setSplitBtn() {
  // Print the split time
  printSplit();
}

function setStartBtn() {
  // Updates the button text and class, then stops the chronometer
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
  chronometer.stop();
}

function setResetBtn() {
  // Reset the chronometer and clear splits
  chronometer.reset();
  clearSplits();
  // Reset display values
  minDecElement.innerText = '0';
  minUniElement.innerText = '0';
  secDecElement.innerText = '0';
  secUniElement.innerText = '0';
  milDecElement.innerText = '0';
  milUniElement.innerText = '0';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});