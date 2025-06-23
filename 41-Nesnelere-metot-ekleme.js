//Object icinde metot nasil ekleriz ?

let user1 = {
    firstname : "Halit",
    lastname : "Cam",
    score : [85,92,73],
    isActive : true,
    //simdi ise shortName() diye bir metotu Object icine ekliyelim 
    shortname : function() { 
        return ` ${this.firstname[0].toUpperCase()} . ${this.lastname}` } 

}

console.log(user1.shortname())