
//Real time character counter below text input area
let varUserText = document.getElementById("textArea");

varUserText.addEventListener("input", () => {
    let varTextLength = (textArea.value).length;
    document.getElementById("charCount").textContent = `${varTextLength}`;
});


//Convert text input to upper case
let varUpperCase = document.getElementById("btnUpperCase");

varUpperCase.addEventListener("click", function () {
        let varResult = (varUserText.value).toUpperCase();
        document.getElementById("resultText").textContent = `${varResult}`;
    })

    //Convert text input to lower case
let varLowerCase = document.getElementById("btnLowerCase");

varLowerCase.addEventListener("click", function () {
        let varResult = (varUserText.value).toLowerCase();
        document.getElementById("resultText").textContent = `${varResult}`;
    })