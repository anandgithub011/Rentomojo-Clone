let LSData = JSON.parse(localStorage.getItem("signup")) || [];

let formInp = document.querySelector("#form");
let emailInp = document.querySelector("#email");
let passInp = document.querySelector("#pass");


formInp.addEventListener("submit",(e)=>{
    e.preventDefault();

    let objlogin = {
        customerEmail: emailInp.value,
        customerPassword: passInp.value,
    }

    if(checkSignIN(objlogin.customerEmail,objlogin.customerPassword)==false){
        alert("WRONG CREDENTIAL");
    }
    else{
        localStorage.setItem("login",JSON.stringify(LSData));
        alert("Login Successful");
        window.location.href="./index.html";

    }

    formInp.reset();
    
})

function checkSignIN(customerEmail,customerpassword){

    let filtered = LSData.filter((el)=>{
        return el.customerEmail == customerEmail && el.customerpassword == customerpassword;
    })
    
    if(filtered.length > 0){
        return true;
    }
    else{
        return false;
    }
}

