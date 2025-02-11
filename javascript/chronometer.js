class Chronometer {
  constructor() {
    //initialise properties
    this.currentTime = 0;
    this.intervalId = null;
  }

    // The start method begins the timer and increments the currentTime property every second
  start(callback) {
    // Use setInterval to call a function every 1000 milliseconds (1 second)
    this.intervalId = setInterval(() => {
      this.currentTime += 1; // Increment the current time by 1 second

      // If a callback function is provided, execute it
      if (callback) {
        callback();
      }
    }, 1000); // 1000 milliseconds = 1 second
  }


  getMinutes() {
    // Divide the current time (in seconds) by 60 to get the number of minutes,
  // and use Math.floor to round down to the nearest whole number
   return Math.floor(this.currentTime/60);
  }

  getSeconds() {
   // Use the modulo operator to get the remainder when dividing by 60
  return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // Convert the value to a string and pad with leading zero if necessary
  return `0${value}`.slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    document.getElementById('minDec').innerHTML = '0';
    document.getElementById('minUni').innerHTML = '0';
    document.getElementById('secDec').innerHTML = '0';
    document.getElementById('secUni').innerHTML = '0';
    document.getElementById('milDec').innerHTML = '0';
    document.getElementById('milUni').innerHTML = '0';
  }

  split() {
    // Compute the two-digit string for minutes using the getMinutes and computeTwoDigitNumber methods
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    
    // Compute the two-digit string for seconds using the getSeconds and computeTwoDigitNumber methods
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    
    // Return the formatted time string in "mm:ss" format
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
