// First Try*********


// // trying
// let numbersArray = [5,3,4,5,6,6]

// function getSecondLargest(nums) {
//     let minSorting = []
    
//     for(let index=0; index<nums.length; ){
//         for(let index2=0; index2<nums.length ; index2++){
//             let temp =nums[index]
//             if(nums[index]>nums[index2]){
//                 nums[index]=nums[index2]
//                 nums[index2]=temp
//             }
//         }
//         minSorting.push(nums.shift())
        
//     }
//     for (let k =minSorting.length-2; k>=0 ; k--){
//         if (minSorting[k]<minSorting[minSorting.length-1]){
//             return minSorting[k]
//         }
//     }
    
    
// 


// Second Try
let arrayTry = [10,9,8,1,6,8]
let stringTry = 1234

function reverseString(s) {
    let newArray
    try{
        newArray = s.split("") // New Array is made
        
    }catch(err){
       console.log(err.message)
       console.log(s)
    }finally{
        if(Array.isArray(newArray)){
            newArray.reverse()
            console.log(newArray.join(""))
        }
    }
    
}

reverseString(stringTry)





// console.log(arrayTry.sort((a,b)=> b-a)) // Büyükten kücüge bir siralama yapar
// let unrepeatTry = new Set(arrayTry) // Tekrar eden dizi elamanlarini cikarir !!
// console.log(unrepeatTry)