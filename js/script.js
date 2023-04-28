// declare elements
// var toggleDarkModeButton = document.getElementById("toggle-darkmode");
// const image = document.getElementById("picsum-img");
// var header = document.getElementById("header");

// function toggleDarkMode() {
//     document.body.classList.toggle("dark-mode");
// }

// listen for a click
// toggleDarkModeButton.addEventListener("click", toggleDarkMode)
// image.addEventListener("click", function () {
//     image.style.transform = "scale(0)";
// })

// Activity: make it so when you click on the H1,
// set the color of it to red.

// 1. Declare the H1 as a variable.
// 2. Add an eventlistener for a click on the H1.
// 3. Set the style property of the H1 to color: red.

// var pickedColor = prompt("What color do you want your H1 to be, on click?");

// header.addEventListener("click", function () {
//     console.log("test");
//     header.style.color = pickedColor;
// })

// Let, const, var

// Activity:

// 1. Remove the lorem picsum image from your HTML.
// 2. Give the user a prompt, asking them for the size of the image.
// 3. Create your image, using backticks, using JS instead, putting it into an element via innerHTML.

const result = document.getElementById("result");
let size = prompt("size?")
result.innerHTML = `
<img id="picsum-img" src="https://picsum.photos/${size}" alt="random image">
`

