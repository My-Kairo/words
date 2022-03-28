const displayElem = document.querySelector(".display");
const textElem = document.querySelector(".text");
const btnElem = document.querySelector(".btn");
const countElem = document.querySelector(".counter");
const checkElem = document.querySelector(".check");
const longElem = document.querySelector(".long");
const longestElem = document.querySelector(".longest");

// let words = "";
// let longWord = 0;


let myString = () => {
    let theString = textElem.value;
    let arr = theString.split(/\s/)
    let sent = ""
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        const array = arr[i];
        if (array.length >= 5) {

            sent += `<mark style="background-color: blue;">
                 ${array}
             </mark> `
             
        }
        else {
            sent += array + ' ' 
             
            counter++ 

        }

    }

    let longest = {
        length: 0
    };

    arr.forEach((word) => {
        if (word.length > longest.length){
            longest = word
        }
    });
    // `<mark>${longest}</mark>`

      
    // sent += `<mark style="background-color: green">${longest}</mark>`

    console.log(longest);

    displayElem.innerHTML = sent
    longestElem.innerHTML = `<mark style="background-color: red">${longest}</mark>` + "is the longest word";

    // displayElem.innerHTML = `<mark style="background-color: green"> ${longest}</mark>`;
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
            if (array.length <= 5) {
                sent += ` <span style="display: none">${array} </span>`
                // if (array.length > 8){
                //     sent += `<span style ="background-color: green;">${array}</span>`

                // }
            
            } else {
                // displayElem.style.display = "none"
                sent += array + ' '
            }

        }
        // `<mark style="color: black;">
        //         ${array}
        //     </mark> `
        console.log(sent);
        displayElem.innerHTML = `<mark style="color: black;">${sent} </mark>`

    }
    else {
        myString()
     }
}
checkElem.addEventListener('click', hide)

// let theLongest = ()=> {
//     let theString = textElem.value;
//     let arr = theString.split(/\s/);
//     let sorted = arr.sort( (a, b) => {
//         return b.length - a.length

//     })
//         console.log(sorted);
//         displayElem.innerHTML = `<mark style="background-color:pink;">
//         ${sorted[0]}
//     </mark> `;

//     // let highlight = []
//     // for (let i = 0; i < highlight.length; i++){
//     //     if (highlight[i].length > arr){
//     //         highlight += `mark style="background-color:red;> ${arr}`
//     //     }
//     // }
//     myString()

// }

// longElem.addEventListener('click', theLongest)

// if (checkElem.checked == false){
//     displayElem.style.display = "block";
// }else{
//     displayElem.style.display = "none";
// }