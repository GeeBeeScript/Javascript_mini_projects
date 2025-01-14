
contentContainers = document.querySelectorAll(".content-con")
backwardbtn = document.querySelector(".navigate-backward")
forwardBtn = document.querySelector(".navigate-forward")
surpriseBtn = document.querySelector(".btn-click")

itemCount = 0

forwardBtn.addEventListener("click", function () {
    if (itemCount < contentContainers.length - 1) {
        currentItem = contentContainers[itemCount]
        currentItem.classList.add("hidden")
        itemCount++
        nextItem = contentContainers[itemCount]
        nextItem.classList.remove("hidden")        
    } else {
        currentItem = contentContainers[itemCount]
        currentItem.classList.add("hidden")
        itemCount = 0
        contentContainers[itemCount].classList.remove("hidden")        
    }
})

backwardbtn.addEventListener("click", function () {
    if (itemCount > 0) {
        currentItem = contentContainers[itemCount]
        currentItem.classList.add("hidden")
        itemCount--
        nextItem = contentContainers[itemCount]
        nextItem.classList.remove("hidden")
        
    } else {
        currentItem = contentContainers[itemCount]
        currentItem.classList.add("hidden")
        itemCount = contentContainers.length - 1
        contentContainers[itemCount].classList.remove("hidden")        
    }
})

surpriseBtn.addEventListener("click", function () {
    const randomValue = Math.floor(Math.random() * 4)
    currentItem = contentContainers[itemCount]
    currentItem.classList.add("hidden")
    randomItem = contentContainers[randomValue]
    itemCount = randomValue
    randomItem.classList.remove("hidden")
})