const displayElem = document.querySelector(".display");
const textElem = document.querySelector(".text");
const btnElem = document.querySelector(".btn");
const countElem = document.querySelector(".counter");
const checkElem = document.querySelector(".check")

let words = "";

let myString = () => {
    let theString = textElem.value;
    let arr = theString.split(/\s/)
    let sent = ""
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const array = arr[i];
        if (array.length >= 5) {

            sent += `<mark style="color: black;">
                 ${array}
             </mark> `
        }
        else {
            sent += array + ' '
            counter++
        }

    }


    console.log(sent);


    displayElem.innerHTML = sent;
    countElem.innerHTML = "Words in the sentence = " + arr.length;
}

btnElem.addEventListener('click', myString)

let hide = () => {
    let theString = textElem.value;
    let arr = theString.split(/\s/);
    let sent = ""
    if (checkElem.checked == true) {
        for (let i = 0; i < arr.length; i++) {
            const array = arr[i]
            // displayElem.style.display = "block"
            if (array.length <= 5) {
                sent += `<span style="display: none">${array} </span> `
            } else {
                // displayElem.style.display = "none"
                sent += array + ' '
            }

        }
        console.log(sent);
        displayElem.innerHTML = sent;

    }
    else {
        myString()
     }
}
checkElem.addEventListener('click', hide)

// if (checkElem.checked == false){
//     displayElem.style.display = "block";
// }else{
//     displayElem.style.display = "none";
// }