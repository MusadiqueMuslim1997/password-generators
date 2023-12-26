

const pass = document.getElementById("password");
const length = 10;
const upperCase = "BCDEFGHIJKLMN"
const lowerCase = "bcdefghijkmnopqrSt";
const num = "0123456789";
const char = "*@+$&";

const allChars = upperCase + lowerCase + num + char;


function createPassword(){
   let password = "";
   password += upperCase[Math.floor(Math.random()*upperCase.length)]
   password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
   password += num[Math.floor(Math.random()*num.length)]
   password += char[Math.floor(Math.random()*char.length)]
   
   for(i = 0; length > password.length; i++){
    password += allChars[Math.floor(Math.random()* allChars.length)]

   }
  pass.value = password;
}
