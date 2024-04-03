radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Happy)
    cakLandPump.startDuration(cakLand.BoardSide.LEFT, 80, 4)
    basic.clearScreen()
    basic.pause(1000)
})
radio.setGroup(120)
