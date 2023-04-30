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

// const result = document.getElementById("result");
// let size = prompt("size?")
// result.innerHTML = `
// <img id="picsum-img" src="https://picsum.photos/900" alt="random image">
// `

// ---loops---

const loopResult = document.getElementById("loop-result");

// for (let count = 0; count < 100; count++) {
//     // console.log({ count });
//     loopResult.innerHTML +=
//         `
//         <div class="product">
//         <img src="https://picsum.photos/seed/${count * 1512}/300" alt="random image"> 
//         <h3>Product name</h3>
//         <p>Description goes here</p>
//         </div>
//     `
// }

// pixel art

const canvas = document.getElementById("canvas");

for (i = 0; i < 100; i++) {
    canvas.innerHTML += `
    <div class="cube"></div>
    `
}

// grab all the cubes
const allCubes = document.getElementsByClassName("cube");
// grab all the colours from the palette
const allColours = document.getElementsByClassName("colour");

// declare our base colour
let currentColour = "black";

// loop over all allColours, and check for a click
for (let i = 0; i < allColours.length; i++) {
    allColours[i].addEventListener("click", function () {
        currentColour = allColours[i].id;
    })
}

// looping over all the cubes
for (let i = 0; i < allCubes.length; i++) {
    // console logging each individual cube
    // console.log(allCubes[i]);
    // add event listener
    allCubes[i].addEventListener("click", function () {
        // console.log(`You clicked me! I am cube number ${i}`);
        allCubes[i].style.background = currentColour;
    })
}

// arrays
// const students = [
//     "Tim",
//     "Quinn",
//     "Ryan"
// ];

// console.log({ students });
// console.log(students[0]);
