// let input = prompt ("Please enter a word ")

function getLetter  (s) {
    // charAt() method has same property with []
    switch (s.charAt(0).toLowerCase()) {
        case "a" || "e" || "i" || "o" || "u":
        return "A";

        case "a" || "c" || "d" || "f" || "g":
            return "B";

        case "h" || "j" || "k" || "l" || "m":
            return "C";
            break;
        case "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z":
            return "D";
        

    }
    return "not found";
}

console.log(getLetter("Ali"))
/*
let pageInfo = getLetter(input);
let page = document.querySelector("#greeting")*/



//let info = document.querySelector("#greeting")
//info= `Entered Word equels: ${info.innerHTML(getLetter(input))}`
// alt+shift+f otomatik düzenleme
