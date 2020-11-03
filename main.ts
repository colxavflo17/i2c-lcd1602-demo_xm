basic.showIcon(IconNames.Happy)
makerbit.clearLcd2004()
makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.On)
basic.forever(function () {
    basic.pause(100)
    makerbit.showStringOnLcd2004("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P1,
    PingUnit.Centimeters
    )), makerbit.position2004(LcdPosition2004.Pos24), 20, TextOption.PadWithZeros)
    basic.pause(100)
    makerbit.clearLcd2004()
})
