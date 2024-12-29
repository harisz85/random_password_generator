const  input = document.getElementById("input");
const btn = document.querySelector(".btn");
const copy = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

btn.addEventListener("click",() => {
    generatePassword();
});

copy.addEventListener("click",()=> {
    writeClipboardText(input.value);
    if(input.value) {
       alertContainer.classList.remove("notActive");
       setTimeout(() => {
        alertContainer.classList.add("notActive");
       },2000);
   }
   console.log(input.value);
});

function generatePassword(){
    const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
    const passwordLength= 15;
    let password = "";
    for(let i=0;i < passwordLength;i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
      
    }
    input.value = password;
    alertContainer.innerText = password + " copied";
  
}


async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }