// Text tools

let userText = document.getElementById("textArea");
//Text area char counter

userText.addEventListener("input", () => {
    let charCount = (userText.value).length;
    document.getElementById("charCounter").textContent = `${charCount}`;

})


//Convert to upper case
let convertUpperBtn = document.getElementById("convertUpper");

convertUpperBtn.addEventListener("click", () => {

   let convertedUpper = (userText.value).toUpperCase();

   document.getElementById("resultText").textContent = `${convertedUpper}`;
})


//Convert to lower case
let convertLowerBtn = document.getElementById("convertLower");

convertLowerBtn.addEventListener("click", () => {

    let convertedLower = (userText.value).toLowerCase();

    document.getElementById("resultText").textContent = `${convertedLower}`;

})


//If user text includes


let stringToFind = document.getElementById("doesContain")

stringToFind.addEventListener("input", () => {

    let doesContainResult = (userText.value).includes(stringToFind);

    document.getElementById("containResult").textContent = `${doesContainResult}`;

})