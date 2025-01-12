
const counterVal = document.querySelector(".counter-val")
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase")

counterValue = 0

increaseBtn.addEventListener("click", function () {
    counterValue++
    counterVal.textContent = counterValue
    if (counterValue >= 1) {
        counterVal.classList.remove("red")
        counterVal.classList.add("green")
    }
})

resetBtn.addEventListener("click", function () {
    counterVal.classList.remove("green")
    counterVal.classList.remove("red")
    counterValue = 0
    counterVal.textContent = counterValue
})

decreaseBtn.addEventListener("click", function () {
    counterValue--
    counterVal.textContent = counterValue
    if (counterValue <= -1) {
        counterVal.classList.remove("green")
        counterVal.classList.add("red")
    }
})