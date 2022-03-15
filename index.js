const displayElem = document.querySelector(".display");
const textElem = document.querySelector(".text");
const btnElem = document.querySelector(".btn");
const countElem = document.querySelector(".counter")

let words = "";

let myString = () => {
    let theString = textElem.value;
    let arr = theString.split(/\s/)
    let sent = ""
    let counter = 0;
    for ( let i = 0; i < arr.length; i++){
        const array = arr[i];
        if (array.length >= 5){
                 
                sent += `<mark style="color: red;">
                 ${array}
             </mark> `
            }
        else {
            sent+= array + ' '
            counter ++
        }

    }
    

    console.log(sent);


    displayElem.innerHTML = sent;
    countElem.innerHTML = "Words in the sentence = " + arr.length;
}

btnElem.addEventListener('click', myString)
