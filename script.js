const colorInput = document.querySelectorAll(".colors input");
const gradiantBox = document.querySelector(".gradiantDisplay");
const selectDirection = document.querySelector(".angles");
const textArea = document.querySelector(".displayColorCode");
const refreshBtn = document.querySelector(".refreshColors");
const  copyCode = document.querySelector(".copyColor");


const getRandomColor = () => {
    //getting a random color in Hexadecimal formate {toString(16) : converts a number to a hexidecimal value}
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradiant = (isRandom) => {
    if(isRandom){
        //If random is true , update the color inout value with random color .
        colorInput[0].value = getRandomColor();
        colorInput[1].value = getRandomColor();
    }
    //Creating a gradiant string using select direction value the color input values .
    const gradiant = `linear-gradient( ${selectDirection.value} ,${colorInput[0].value} , ${colorInput[1].value})`;
    gradiantBox.style.background = gradiant;
    textArea.value = `background: ${gradiant};`;

}

const copyColorCode = () => {
    //copying the text area text and updatint the button text .
    navigator.clipboard.writeText(textArea.value);
    copyCode.innerText  = "Copied";
    setTimeout(() => copyCode.innerText = "Copy Code",800);
}

//callint generateGradiant function for each color input click .
colorInput.forEach(input => {
    // input.addEventListener("input" , generateGradiant);  =>
    input.addEventListener("input" , () => generateGradiant(false));
});

// selectDirection.addEventListener("change" , generateGradiant);  =>
selectDirection.addEventListener("change" , () => generateGradiant(false));

//sending the true value as an argument and by passing israndom to determine whether to generate a random color or not on the function call .

refreshBtn.addEventListener("click" , () => generateGradiant(true));

//for copying the code .

copyCode.addEventListener("click" , () => copyColorCode());