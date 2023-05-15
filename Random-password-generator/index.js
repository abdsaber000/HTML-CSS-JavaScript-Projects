const btnEl = document.querySelector(".btn");

const inputEl = document.querySelector(".input");

const copyEl = document.querySelector(".fa-copy");

const alertEl = document.querySelector(".alert-container");

const characters = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const passwordLength = 15;
btnEl.addEventListener("click", ()=>{
    var password = createPassword();

    alertEl.innerHTML = password + " Copied!"

    inputEl.value = password;

    
});

copyEl.addEventListener("click" , ()=>{
    copyPassword();

    // if now password in Element tag , don't show up
    if(!inputEl.value){
        return;
    }


    alertEl.classList.remove("active");

    setTimeout(()=>{
        alertEl.classList.add("active");
    } , 2000)

});

function createPassword(){

    var password = "";
    while(password.length < passwordLength){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    console.log(password);
    return password;

}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999); // for mobiles
    navigator.clipboard.writeText(inputEl.value); // copy the value to the clipboard

}