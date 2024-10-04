input.onButtonPressed(Button.A, function () {
    Year = Year * Days
    basic.pause(100)
    Year = Year / 365
    basic.pause(100)
    basic.showNumber(Year)
})
input.onButtonPressed(Button.AB, function () {
    Days += 1
    basic.showNumber(Days)
})
input.onButtonPressed(Button.B, function () {
    Days += 10
    basic.showNumber(Days)
})
let Days = 0
let Year = 0
Year = 365
basic.forever(function () {
	
})
