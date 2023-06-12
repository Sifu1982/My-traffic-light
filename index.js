// Constantes
const initialCircleRadius = '50px';
const finalCircleRadius = '58px';
const initialRedColor = 'lightcoral';
const finalRedColor = 'tomato';
const initialYellowColor = 'lightYellow';
const finalYellowColor = 'yellow';
const initialGreenColor = 'lightGreen';
const finalGreenColor = 'green';

// Captura de elementos del DOM

const circleRed = document.querySelector('#circleRed');
const circleYellow = document.querySelector('#circleYellow');
const circleGreen = document.querySelector('#circleGreen');
const buttonRed = document.querySelector('#buttonRed');
const buttonYellow = document.querySelector('#buttonYellow');
const buttonBlue = document.querySelector('#buttonGreen');
const buttonlightsSequence = document.querySelector('#lightsSequence');
const buttonlightsSequenceStop = document.querySelector('#lightsSequenceStop');
const buttonlightsFlashing = document.querySelector('#lightsFlashing');
const buttonlightsFlashingStop = document.querySelector('#lightsFlashingStop');

// Configuración inicial

circleRed.style.backgroundColor = initialRedColor;
circleYellow.style.backgroundColor = initialYellowColor;
circleGreen.style.backgroundColor = initialGreenColor;
buttonlightsFlashingStop.disabled = true;
buttonlightsSequenceStop.disabled = true;

// Eventos de los botones

buttonRed.addEventListener('click', changeRedColor);
buttonYellow.addEventListener('click', changeYellowColor);
buttonBlue.addEventListener('click', changeGreenColor);
buttonlightsSequence.addEventListener('click', lightsSequence);
buttonlightsSequenceStop.addEventListener('click', lightsSequenceStop);
buttonlightsFlashing.addEventListener('click', lightsFlashing);
buttonlightsFlashingStop.addEventListener('click', lightsFlashingStop);

// Funciones de cambio de color

function changeColor(element, initialColor, finalColor) {
  if (element.style.backgroundColor === finalColor) {
    element.style.backgroundColor = initialColor;
    element.style.width = initialCircleRadius;
    element.style.height = initialCircleRadius;
  } else {
    element.style.backgroundColor = finalColor;
    element.style.width = finalCircleRadius;
    element.style.height = finalCircleRadius;
  }
}

function changeRedColor() {
  changeColor(circleRed, initialRedColor, finalRedColor);
}

function changeYellowColor() {
  changeColor(circleYellow, initialYellowColor, finalYellowColor);
}

function changeGreenColor() {
  changeColor(circleGreen, initialGreenColor, finalGreenColor);
}

// Funciones de luces parpadeantes

let lightsFlashingInterval;

function lightsFlashing() {
  buttonlightsFlashing.disabled = true;
  buttonlightsFlashingStop.disabled = false;
  buttonlightsSequence.disabled = true;

  return lightsFlashingInterval = setInterval(colorsChange, 1000);
}

function colorsChange() {
  changeRedColor();
  changeYellowColor();
  changeGreenColor();
}

function lightsFlashingStop() {
  buttonlightsFlashing.disabled = false;
  buttonlightsFlashingStop.disabled = true;
  buttonlightsSequence.disabled = false;

  clearInterval(lightsFlashingInterval);
}

// Funciones de secuencia de luces

let lightsSequenceInterval;
let redLightSequenceTimeout;
let yellowLightSequenceTimeout;
let greenLightSequenceTimeout;

function lightsSequence() {
  buttonlightsSequence.disabled = true;
  buttonlightsSequenceStop.disabled = false;
  buttonlightsFlashing.disabled = true;

  colorsSequence();

  return lightsSequenceInterval = setInterval(colorsSequence, 3000);
}

function colorsSequence() {
  const circleRedStyle = circleRed.style;
  const circleYellowStyle = circleYellow.style;
  const circleGreenStyle = circleGreen.style;

  redLightSequenceTimeout = setTimeout(function () {
    circleRedStyle.backgroundColor = finalRedColor;
    makeCircleBigger(circleRedStyle);
    circleYellowStyle.backgroundColor = initialYellowColor;
    circleGreenStyle.backgroundColor = initialGreenColor;
    makeCircleSmaller(circleGreenStyle);
  }, 0);

  yellowLightSequenceTimeout = setTimeout(function () {
    circleRedStyle.backgroundColor = initialRedColor;
    makeCircleSmaller(circleRedStyle);
    circleYellowStyle.backgroundColor = finalYellowColor;
    makeCircleBigger(circleYellowStyle);
    circleGreenStyle.backgroundColor = initialGreenColor;
  }, 1000);

  greenLightSequenceTimeout = setTimeout(function () {
    circleRedStyle.backgroundColor = initialRedColor;
    circleYellowStyle.backgroundColor = initialYellowColor;
    makeCircleSmaller(circleYellowStyle);
    circleGreenStyle.backgroundColor = finalGreenColor;
    makeCircleBigger(circleGreenStyle);
  }, 2000)
}

function makeCircleBigger(circleElementStyle) {
  circleElementStyle.width = finalCircleRadius;
  circleElementStyle.height = finalCircleRadius;
}

function makeCircleSmaller(circleElementStyle) {
  circleElementStyle.width = initialCircleRadius;
  circleElementStyle.height = initialCircleRadius;
}

function lightsSequenceStop() {
  buttonlightsSequence.disabled = false;
  buttonlightsSequenceStop.disabled = true;
  buttonlightsFlashing.disabled = false;

  clearTimeout(redLightSequenceTimeout);
  clearTimeout(yellowLightSequenceTimeout);
  clearTimeout(greenLightSequenceTimeout);

  clearInterval(lightsSequenceInterval);
}