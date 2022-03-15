const displayElem = document.querySelector(".display");
const textElem = document.querySelector(".text");
const btnElem = document.querySelector(".btn");


let words = "";

let myString = ()=> {
    let theString = textElem.value;
    let arr = theString.split(" ,")
    
    console.log(arr);
    
    
    displayElem.innerHTML = arr;
}
btnElem.addEventListener('click', myString)