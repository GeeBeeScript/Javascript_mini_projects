
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
        console.log(itemCount);
        
    } else {
        return
    }
})

backwardbtn.addEventListener("click", function () {
    if (itemCount > 0) {
        currentItem = contentContainers[itemCount]
        currentItem.classList.add("hidden")
        itemCount--
        nextItem = contentContainers[itemCount]
        nextItem.classList.remove("hidden")
        console.log(itemCount);
        console.log("hi");
        
    } else {
        return
    }
})

surpriseBtn.addEventListener("click", function () {
    const randomValue = Math.floor(Math.random() * 4)
    console.log(randomValue);
    currentItem = contentContainers[itemCount]
    currentItem.classList.add("hidden")
    randomItem = contentContainers[randomValue]
    itemCount = randomValue
    randomItem.classList.remove("hidden")
})