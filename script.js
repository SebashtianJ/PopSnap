document.getElementById("title").textContent = "PopSnap Challenge - Sebashtian Jerles";


function checkNumber() {
    const number = parseInt(document.getElementById("popSnap").value);
    let message = "";
    if (number % 4 === 0 && number % 6 === 0) {
        message = `PopSnap!`;
    } else if (number % 4 === 0) {
        message = `Pop!`;
    } else if (number % 6 === 0) {
        message = `Snap!`;
    } else {
        message = `${number}`;
    }
    document.getElementById("popSnapNumber").textContent = message;
}