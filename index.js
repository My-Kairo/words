const displayElem = document.querySelector(".display");
const textElem = document.querySelector(".text");
const btnElem = document.querySelector(".btn");


let words = "";

let myString = () => {
    let theString = textElem.value;
    let arr = theString.split(" ")
    let sent = ""
    for ( let i = 0; i < arr.length; i++){
        const array = arr[i];
        if (array.length >= 5){
                 
                sent += `<mark style="color: red;">
                 ${array}
             </mark> `
            }
        else {
            sent+= array + ' '
        }

    }
    

    console.log(sent);


    displayElem.innerHTML = sent;
}
btnElem.addEventListener('click', myString)