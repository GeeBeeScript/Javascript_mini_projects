
// const counterVal = document.querySelector(".counter-val")
// const decreaseBtn = document.querySelector(".decrease")
// const resetBtn = document.querySelector(".reset")
// const increaseBtn = document.querySelector(".increase")

// let counterValue = 0

// increaseBtn.addEventListener("click", function () {
//     counterValue++
//     counterVal.textContent = counterValue
//     if (counterValue >= 1) {
//         counterVal.classList.remove("default")
//         counterVal.classList.remove("red")
//         counterVal.classList.add("green")
//     } else if (counterValue === 0) {
//         counterVal.classList.remove("red")
//         counterVal.classList.remove("green")
//         counterVal.classList.add("default")
//     } else {
//         return
//     }
// })

// resetBtn.addEventListener("click", function () {
//     counterVal.classList.remove("green")
//     counterVal.classList.remove("red")
//     counterValue = 0
//     counterVal.textContent = counterValue
// })

// decreaseBtn.addEventListener("click", function () {
//     counterValue--
//     counterVal.textContent = counterValue
//     if (counterValue <= -1) {
//         counterVal.classList.remove("default")
//         counterVal.classList.remove("green")
//         counterVal.classList.add("red")
//     } else if (counterValue === 0) {
//         counterVal.classList.remove("red")
//         counterVal.classList.remove("green")
//         counterVal.classList.add("default")
//     } else {
//         return
//     }
// })


// alternative method 

const counterVal = document.querySelector(".counter-val")
const btns = document.querySelectorAll("button")

let counterValue = 0

btns.forEach(function (btn) {
    btn.addEventListener("click", function (item) {
        if (item.currentTarget.classList.contains("increase")) {
            counterValue++ 
        } else if (item.currentTarget.classList.contains("decrease")) {
            counterValue--
        } else {
            counterValue = 0
        }
        if (counterValue > 0) {
            counterVal.style.color = "green"
        }
        if (counterValue < 0) {
            counterVal.style.color = "red"
        }
        if (counterValue == 0) {
            counterVal.style.color = "rgb(1, 1, 20)"
        }
        counterVal.textContent = counterValue
    })
})
