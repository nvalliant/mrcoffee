let corkboard = document.getElementById("rewards-corkboard");
let rewards = corkboard.querySelectorAll("img");
let body = document.getElementById("rewards-div");
let popup = document.getElementById("rewards-popup");
let close = document.getElementById("rewards-close");

rewards.forEach((e) => {
    e.addEventListener("click", function() {
        body.classList.add("darker");
        popup.classList.remove("hidden");
    })
})

close.addEventListener("click", function() {
    body.classList.remove("darker");
    popup.classList.add("hidden");
})