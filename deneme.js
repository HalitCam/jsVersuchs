function getLetter(s) {
    let letter;
    // Write your code here
    switch(s.toLowerCase().charAt(0)){
        case "a" || "e" || "i" || "o" || "u":
        letter = 'A'
        break
        
        case "b" || "c" || "d" || "f" || "g":
         letter = "B";
        break
        case "h" || "j" || "k" || "l" || "m":
         letter = "C";
        break
        case "z" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z":
         letter = "D";
         break
        
    }
    
    return letter;
}
console.log(getLetter("zwxya"))