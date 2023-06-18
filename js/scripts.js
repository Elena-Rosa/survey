// User Interface Logic
console.log("helloworld")
function hideResults() {
    document.getElementById("fruitsQ").setAttribute("class", "hidden");
    document.getElementById("hotDrinkQ").setAttribute("class", "hidden");
    document.getElementById("dancingQ").setAttribute("class", "hidden");
    document.getElementById("morningPersonQ").setAttribute("class", "hidden");
    document.getElementById("freeTimeQ").setAttribute("class", "hidden");
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        hideResults();
        event.preventDefault();
        const fruitQ = document.getElementById("fruitQ").value;
        const hotDrinkQ = document.getElementById("hotDrinkQ").value;
        const dancingQ = document.getElementById("dancingQ").value;
        const morningPersonQ = document.getElementById("morningPersonQ").value;
        const freeTimeQ = document.getElementById("freeTimeQ").value;


        if (age >= 12 && height >= 60) {
            document.getElementById("swings").removeAttribute("class");
            document.getElementById("coaster").removeAttribute("class");
            document.getElementById("tower").removeAttribute("class");
        } else if (age >= 12 || height >= 48) {
            document.getElementById("swings").removeAttribute("class");
            document.getElementById("coaster").removeAttribute("class");
            // Next, we're evaluating the Swings ride.
        } else if (age >= 6) {
            document.getElementById("swings").removeAttribute("class");
            // Finally, we have our "catch-all" for when a user is less than 6 years old.
        } else {
            document.getElementById("sorry").removeAttribute("class");
        }
    };
}
