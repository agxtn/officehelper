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


//Convert first letter to upper case 
let convertFirstUpperBtn = document.getElementById("convertFirstUpper");

convertFirstUpperBtn.addEventListener("click", () => {

    userTextValue = userText.value;
    splittedText = userTextValue.split(" ");
    mappedText = splittedText.map(element => element[0].toUpperCase() + element.slice(1));
    joinedText = mappedText.join(" ");
    document.getElementById("resultText").textContent = `${joinedText}`;
})




/*If user text includes

let stringToFind = document.getElementById("doesContain");
let checkBtn = document.getElementById("checkText");

checkBtn.addEventListener("click", () => {

    stringToFind = stringToFind.value;
    let doesContainResult = (userText.value).includes(stringToFind);

    document.getElementById("containResult").textContent = `${doesContainResult}`;

}) */


