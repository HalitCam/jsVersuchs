// hata yönetimi icin try-catch kullanimi
// try-catch ilebir sey oldu ise yap olmuyorsa hatayi göster diyerek kodun geri pkalan parcalarinin calismasi saglanir !!
 let items; 
try {
    items.forEach(element => { //items datasi var ise calisacak yok ise hata gösterip devam edecek !!
        console.log(element)

    });
} catch (error) {
    console.log("hata: ", error)
    items = [1,2,3,4,5,6] //hata göstermenin yaninda hata olursa istedigim bir islemi yaptirabilirim !
    items.forEach(item => console.log(item))
}


console.log("hata yönetimi düzgün calisiyor")

let info = "kodluyoruz"
console.log(info)

// try-catch yapisi ile bilmedigimiz disardan alacagimiz bilgiler var ise bunlari bu yapinin
//icerisine koyarak hata yönetimi yapariz !! 
// the end of thiese topic

/*
try {
  //Çalıştırılacak kodlar
}catch(hata) {
  //Hata yakalandığında çalışacak kodlar
}finally {
  //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}

*/