let lightsSequenceInterval;
let redLightSequenceTimeout;
let yellowLightSequenceTimeout;
let greenLightSequenceTimeout;

function lightsSequence() {
  const buttonlightsSequenceStopStyle = buttonlightsSequenceStop.style;
  buttonlightsSequence.style.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.FINAL;
  buttonlightsSequenceStopStyle.backgroundColor = STATE.COLORS.RED.FINAL;
  buttonlightsSequenceStopStyle.color = STATE.COLORS.BUTTON_CHANGE.COLOR.FINAL;

  buttonlightsSequence.disabled = true;
  buttonlightsSequenceStop.disabled = false;
  buttonlightsFlashing.disabled = true;

  colorsSequence();

  return lightsSequenceInterval = setInterval(colorsSequence, STATE.TIMER);
}

function colorsSequence() {
  const circleRedStyle = circleRed.style;
  const circleYellowStyle = circleYellow.style;
  const circleGreenStyle = circleGreen.style;
  const buttonRedStyle = buttonRed.style;
  const buttonYellowStyle = buttonYellow.style;
  const buttonGreenStyle = buttonGreen.style;

  redLightSequenceTimeout = setTimeout(function () {
    circleRedStyle.backgroundColor = STATE.COLORS.RED.FINAL;
    buttonRedStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.FINAL;
    buttonYellowStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
    buttonGreenStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
    makeCircleBigger(circleRedStyle);
    circleYellowStyle.backgroundColor = STATE.COLORS.YELLOW.INITIAL;
    circleGreenStyle.backgroundColor = STATE.COLORS.GREEN.INITIAL;
    makeCircleSmaller(circleGreenStyle);
  }, 0);

  yellowLightSequenceTimeout = setTimeout(function () {
    circleRedStyle.backgroundColor = STATE.COLORS.RED.INITIAL;
    buttonRedStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
    buttonYellowStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.FINAL;
    buttonGreenStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
    makeCircleSmaller(circleRedStyle);
    circleYellowStyle.backgroundColor = STATE.COLORS.YELLOW.FINAL;
    makeCircleBigger(circleYellowStyle);
    circleGreenStyle.backgroundColor = STATE.COLORS.GREEN.INITIAL;
  }, STATE.TIMER / 3);

  greenLightSequenceTimeout = setTimeout(function () {
    circleRedStyle.backgroundColor = STATE.COLORS.RED.INITIAL;
    buttonRedStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
    buttonYellowStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
    buttonGreenStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.FINAL;
    circleYellowStyle.backgroundColor = STATE.COLORS.YELLOW.INITIAL;
    makeCircleSmaller(circleYellowStyle);
    circleGreenStyle.backgroundColor = STATE.COLORS.GREEN.FINAL;
    makeCircleBigger(circleGreenStyle);
  }, 2 * STATE.TIMER / 3)
}

function makeCircleBigger(circleElementStyle) {
  circleElementStyle.width = STATE.CIRCLE_RADIUS.FINAL;
  circleElementStyle.height = STATE.CIRCLE_RADIUS.FINAL;
}

function makeCircleSmaller(circleElementStyle) {
  circleElementStyle.width = STATE.CIRCLE_RADIUS.INITIAL;
  circleElementStyle.height = STATE.CIRCLE_RADIUS.INITIAL;
}

function lightsSequenceStop() {
  const buttonlightsSequenceStopStyle = buttonlightsSequenceStop.style;
  buttonlightsSequence.style.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
  buttonlightsSequenceStopStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
  buttonlightsSequenceStopStyle.color = STATE.COLORS.BUTTON_CHANGE.COLOR.INITIAL;

  buttonlightsSequence.disabled = false;
  buttonlightsSequenceStop.disabled = true;
  buttonlightsFlashing.disabled = false;

  clearTimeout(redLightSequenceTimeout);
  clearTimeout(yellowLightSequenceTimeout);
  clearTimeout(greenLightSequenceTimeout);

  clearInterval(lightsSequenceInterval);
}