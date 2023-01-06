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

   document.getElementById("resultText").value= `${convertedUpper}`;
})


//Convert to lower case
let convertLowerBtn = document.getElementById("convertLower");

convertLowerBtn.addEventListener("click", () => {

    let convertedLower = (userText.value).toLowerCase();

    document.getElementById("resultText").value = `${convertedLower}`;

})


//Convert first letter to upper case 
let convertFirstUpperBtn = document.getElementById("convertFirstUpper");

convertFirstUpperBtn.addEventListener("click", () => {

   
    let userTextValue = userText.value;
    let textFirstUpper = userTextValue.split(" ").map(element => element[0].toUpperCase() + element.slice(1)).join(" ");
    document.getElementById("resultText").value = `${textFirstUpper}`;
})

//convert rest of letters to lower case while first letter upper
let convertRestLowerBtn = document.getElementById("convertRestLower");
convertRestLowerBtn.addEventListener("click", () => {

let userTextValue = userText.value;

let formattedText = userTextValue
.split(" ")
.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
.join(" ");

document.getElementById("resultText").value = `${formattedText}`;
})


//copy button
const copyButton = document.getElementById("copyBtn");

copyButton.onclick = () => {
    let resultArea = document.getElementById("resultText");
    resultArea.select();
    navigator.clipboard.writeText(resultArea.value);
    alert("copied");
}







/*If user text includes

let stringToFind = document.getElementById("doesContain");
let checkBtn = document.getElementById("checkText");

checkBtn.addEventListener("click", () => {

    stringToFind = stringToFind.value;
    let doesContainResult = (userText.value).includes(stringToFind);

    document.getElementById("containResult").textContent = `${doesContainResult}`;

}) */


