function changeColor(buttonPushed, circleChanged, initialColor, finalColor) {
  const circleChangedStyle = circleChanged.style;
  const buttonPushedStyle = buttonPushed.style;
  if (circleChangedStyle.backgroundColor === finalColor) {
    circleChangedStyle.backgroundColor = initialColor;
    circleChangedStyle.width = STATE.CIRCLE_RADIUS.INITIAL;
    circleChangedStyle.height = STATE.CIRCLE_RADIUS.INITIAL;
    buttonPushedStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.INITIAL;
  } else {
    circleChangedStyle.backgroundColor = finalColor;
    circleChangedStyle.width = STATE.CIRCLE_RADIUS.FINAL;
    circleChangedStyle.height = STATE.CIRCLE_RADIUS.FINAL;
    buttonPushedStyle.backgroundColor = STATE.COLORS.BUTTON_CHANGE.BACKGROUNDCOLOR.FINAL;
  }
}

function changeRedColor() {
  changeColor(buttonRed, circleRed, STATE.COLORS.RED.INITIAL, STATE.COLORS.RED.FINAL);
}

function changeYellowColor() {
  changeColor(buttonYellow, circleYellow, STATE.COLORS.YELLOW.INITIAL, STATE.COLORS.YELLOW.FINAL);
}

function changeGreenColor() {
  changeColor(buttonGreen, circleGreen, STATE.COLORS.GREEN.INITIAL, STATE.COLORS.GREEN.FINAL);
}