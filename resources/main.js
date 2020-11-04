const d = document

forwardFunctions = {
    1:"https://t.me/lennardrowlands",
    2:"mailto:contact@lenrow.dev",
    3:"https://github.com/len-row",
    4:"infoBox(1)",
    5:"infobox(2)"
}

function forwardMe(i) {
    if (i === 4 || i === 5) {
        infoBox(i)
        return
    } else {
    window.location.href = forwardFunctions[i]
    }
}

function infoBox(i) {
    if (i === 4) {
    d.querySelector("form").style.display = "none"
    d.querySelector(".infoModal").style.display = "inherit"
    } else if (i === 5){
        d.querySelector("form").style.display = "inherit"
        d.querySelector(".infoModal").style.display = "none"
    }
}
