input.onButtonPressed(Button.A, function () {
    radio.sendString("Are you Chinese?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(99)
