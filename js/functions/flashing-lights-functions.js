let lightsFlashingInterval;

function lightsFlashing() {
  buttonlightsFlashing.disabled = true;
  buttonlightsFlashingStop.disabled = false;
  buttonlightsSequence.disabled = true;
  colorsChange();

  return lightsFlashingInterval = setInterval(colorsChange, STATE.TIMER / 3);
}

function colorsChange() {
  const buttonlightsFlashingStopStyle = buttonlightsFlashingStop.style;
  buttonlightsFlashing.style.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.FINAL;
  buttonlightsFlashingStopStyle.backgroundColor = STATE.COLORS.RED.FINAL;
  buttonlightsFlashingStopStyle.color = STATE.COLORS.BUTTON_CHANGE.COLOR.FINAL;
  changeRedColor();
  changeYellowColor();
  changeGreenColor();
}

function lightsFlashingStop() {
  const buttonlightsFlashingStopStyle = buttonlightsFlashingStop.style;
  buttonlightsFlashing.style.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
  buttonlightsFlashingStopStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
  buttonlightsFlashingStopStyle.color = STATE.COLORS.BUTTON_CHANGE.COLOR.INITIAL;
  buttonlightsFlashing.disabled = false;
  buttonlightsFlashingStop.disabled = true;
  buttonlightsSequence.disabled = false;

  clearInterval(lightsFlashingInterval);
}