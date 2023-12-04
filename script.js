'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

// good idea to check if any web API exists,
// older browsers could not handle this.

function unixTimestampToUTC(unixTime) {
  const date = new Date(unixTime); // timestamp already in miliseconds.
  console.log(`LOCATION RETRIVIED - UTC - ${date.toUTCString()} `);
}

if (navigator.geolocation) {
  // options
  const options = {
    timeout: 10000, // in milliseconds. -> 3sec.
  };

  const callbackSuccess = position => {
    const { latitude, longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    unixTimestampToUTC(position.timestamp); // time when location retrieved.
  };

  const callbackError = error => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(
    callbackSuccess,
    callbackError,
    options
  );
} else {
  console.log('Geolocation is not supported by this browser.');
}
