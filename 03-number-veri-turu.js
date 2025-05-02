// Bazen Sayilar string veri yapisinda tutulabilir. Bu verileri number verisine dönüsturme
let stringNumber="11"
console.log(stringNumber)

let newNumber=Number(stringNumber)
console.log(newNumber)

// mod (kalan) alma
console.log(3%2)

//üs alma
console.log(2 ** 4)

// asagi yuvarlama islemi -> Math.floor
console.log("Asagi yuvarlama: ", Math.floor( 3.7)) // ->3

// yukari yuvarlama islemi -> Math.ceil
console.log("yukari yuvarlama: ", Math.ceil(100.1)) // ->101

// yakina yuvarlama islemi -> Math.round :
console.log ("Yakina yuvarlama: ", Math.round(1.4)) // ->1
console.log ("Yakina yuvarlama: ", Math.round(1.8)) // ->2
// . ve , kullanimina sayilar da DIKKAT ET !!


// artirma ve azaltma islemleri
let counter=65;

counter=counter+1; //uzun yontem
console.log(counter)

counter+=1
console.log(counter)

counter ++          // En kisa yontem
console.log(counter)

counter -- ;
console.log(counter)

counter*=10 //Elimdeki bilgiyi 10 ile carpma
console.log(counter)

counter -=1
console.log(counter)

counter/=2; // elimdekini 2 e böldüm 
