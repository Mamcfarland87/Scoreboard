let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0

function plus1() {
    count += 1
    homeScore.textContent = count
}

function plus2() {
    count += 2
    homeScore.textContent = count
}

function plus3() {
    count += 3
    homeScore.textContent = count
}

function guestplus1() {
    count += 1
    guestScore.textContent = count
}

function guestplus2() {
    count += 2
    guestScore.textContent = count
}

function guestplus3() {
    count += 3
    guestScore.textContent = count
}

