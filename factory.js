let Words = ()=>{

    let getLongWords = () => {
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
    }

    let hideWords = () => {
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
        }
    }

    let longest = {
        length: 0
    };
    
    let theLongest = ()=> arr.forEach(words => {
        if(words.length > longest.length){
            longest = words

        }
        else {
            longest
        }
    });
    words += `<mark style="background-color:pink;">
            ${longest}
        </mark> `
    console.log(words);
        
            // let highlight = []
            // for (let i = 0; i < highlight.length; i++){
            //     if (highlight[i].length > arr){
            //         highlight += `mark style="background-color:red;> ${arr}`
            //     }
            // }
        
        // }

    return {
        getLongWords,
        theLongest,
        hideWords
    }
}