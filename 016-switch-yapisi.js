/* JavaScript'te if-else koşul yapısındaki koşulların arttığı durumlarda kod okunabilirliğini artırmak 
ve daha performanslı sayılabilecek bir yapı olan SWITCH yapısı tercih edilebilir. */

let trafik;
trafik = "sikisik";
switch(trafik){
    case("sikisik"): console.log(" Disari Cikma")
    break;
    
    case("hafif") : console.log( "Dikkatli ol")
    
    default: console.log ("Otur evinde")
    
}/*
let hava = "Gunesli";
switch(hava) {
  case "Yagmurlu":
      console.log("Semsiyeni yanina almayi unutma");
      break;
  case "Gunesli":
      console.log("Hafif giyin");
  case "Bulutlu":
      console.log("Disari cik");
      break;
  case "Karlı":
      console.log("Kalin giyin");
      break;
  case "Firtinali":
      console.log("Bir süre disari cikma");
      break;
  default:
      console.log("Bilinmeyen hava durumu:" , hava);
}
*/

// COK ONEMLIIIII !!!
/* Koşulu sağlayan bir case etiketinin deyimleri çalıştıktan sonra program akışında break 
ifadesiyle karşılaşana kadar diğer case etiketlerinin deyimleri de çalışacaktır.

Yukarıdaki örnekte Gunesli case etiketi için önce konsola "Hafif giyin" yazdırıldı. Ardından break
ifadesi ile karşılaşılmadığı için sonraki Bulutlu etiketine geçildi ve konsola "Disari cik" yazdırıldı. */

let hava = "Gunesli";
switch(hava) {
  case "Yagmurlu":
      console.log("Semsiyeni yanina almayi unutma");
      break;
  case "Gunesli":
      console.log("Hafif giyin");
  case "Bulutlu":
      console.log("Disari cik");
      break;
  case "Karlı":
      console.log("Kalin giyin");
      break;
  case "Firtinali":
      console.log("Bir süre disari cikma");
      break;
  default:
      console.log("Bilinmeyen hava durumu:" , hava);
}

/*
let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(23, 14, 'topla'));  // 37
console.log(islem(10, 3, 'mod'));     // Tanimlanmamis islem
*/