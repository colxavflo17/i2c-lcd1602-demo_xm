basic.showIcon(IconNames.Happy)
makerbit.clearLcd2004()
makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.On)
basic.forever(function () {
    makerbit.showStringOnLcd2004("" + (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P2,
    PingUnit.Centimeters
    )), makerbit.position2004(LcdPosition2004.Pos1), 20)
    makerbit.showStringOnLcd2004("CM", makerbit.position2004(LcdPosition2004.Pos4), 2)
    makerbit.showStringOnLcd2004("" + (input.temperature()), makerbit.position2004(LcdPosition2004.Pos9), 4)
    makerbit.showStringOnLcd2004("deg", makerbit.position2004(LcdPosition2004.Pos12), 3)
    makerbit.showStringOnLcd2004("" + (input.runningTime()), makerbit.position2004(LcdPosition2004.Pos21), 4, TextOption.PadWithZeros)
    makerbit.showStringOnLcd2004("" + (input.compassHeading()), makerbit.position2004(LcdPosition2004.Pos34), 3)
    makerbit.showStringOnLcd2004("" + (input.lightLevel()), makerbit.position2004(LcdPosition2004.Pos41), 3)
    makerbit.showStringOnLcd2004("" + (input.rotation(Rotation.Pitch)), makerbit.position2004(LcdPosition2004.Pos50), 4)
    basic.pause(100)
    makerbit.clearLcd2004()
})
