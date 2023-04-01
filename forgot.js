let LSData = JSON.parse(localStorage.getItem("signup"))

let formInp = document.querySelector("#form");
let emailInp = document.querySelector("#email");
let passInp = document.querySelector("#pass");


formInp.addEventListener("submit",function(e){
    e.preventDefault();

    let objforgot = {
        customerEmail: emailInp.value,
        customerPass: passInp.value,
    }

    if(checkSignIN(objforgot.customerEmail)==false){
        alert("This Email is not Registered");
        
    }
    // else if(checkSignIN(objforgot.customerEmail=="") || (objforgot.customerPass=="")){

    //     alert("Wrong Credential")
    // }
    else{
        
        LSData = [];
        LSData.push(objforgot);
        localStorage.setItem("signup",JSON.stringify(LSData));
        alert("Password Reset Successful");

        window.location.href="./login.html";

    }
    formInp.reset();
})

function checkSignIN(customerEmail,customerPass){

    let filtered = LSData.filter((el)=>{
        return el.customerEmail === customerEmail;
    })

    if(filtered.length > 0){

        return true;
    }
    else{
        return false;
    }
}

