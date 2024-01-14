console.log("Hello boss");
console.log("Kotchakorn Saikham 32");
let FirstName = "Kotchakorn";
console.log(FirstName);
let Shopname = "Panew";
console.log(Shopname);
let OpenTime = "07.00";
console.log(OpenTime);
let CloseTime = "20.00";
console.log(CloseTime);

let Shopname = "Panew";
let OpenTime = "07.00";
let CloseTime = "20.00";
let Nickname = "Airmee"
let message = "Welcome to ";
let ReOrdermessage = "Thai Tea k." + Nickname + " already";
console.log(message + Shopname);
console.log(ReOrdermessage);
// ตรงนี้เป็นคอมเม้นทืไม่อ่าน
/*
นี่คอมเม้นท์แบบยาว ไว้ให้คนทำมาอ่าน ใช้เมื่อจำเป็น
*/
Shopname = "Bim Cafe";
console.log(message + Shopname);

function saywelcome(Nickname) {
  console.log("welcome to Panew Cafe k." + Nickname);  
}
saywelcome("PLE");
saywelcome("Jarp");
saywelcome("Airmee");
saywelcome("Da");

let drink = " Hot Latte "
let shopName = "Pannew Cafe"

function autoWelcome(Nickname) {
console.log("welcome to Panew Cafe k." + Nickname);  
}
autoWelcome("PLE");
autoWelcome("Jarp");
autoWelcome("Airmee");
autoWelcome("Da");

function orderDone(Nickname, drink) {
  console.log("k." + Nickname + drink + " ได้แล้วค่ะ"); 
  }
orderDone("PLE", drink);
orderDone("Jarp", drink);
orderDone("Airmee", drink);
orderDone("Da", drink);