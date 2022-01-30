let down = document.getElementById("downBtn")
let up = document.getElementById("upBtn")
let restart = document.getElementById("restartBtn")
let counter = document.getElementById("number")


let count = 0



function add () {
    counter.innerHTML = ++count
    colorOfText()
    

}

function sub () {
    counter.innerHTML = --count
    colorOfText()

    
}


function restartCounter () {
    counter.innerHTML = 0
    count = 0
    colorOfText()
    // if (count = 0) {
    //     counter.style.color = "black"
    // }
}


function colorOfText () {
    if (count <0) {
        counter.style.color = "red"
     } else {
         counter.style.color = "black"
     } 
}
down.addEventListener("click", sub)
up.addEventListener("click", add)
restart.addEventListener("click", restartCounter)
counter.innerHTML = 0




