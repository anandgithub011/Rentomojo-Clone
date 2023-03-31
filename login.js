let LSData = JSON.parse(localStorage.getItem("signup")) || [];

let formInp = document.querySelector("#form");
let emailInp = document.querySelector("#email");
let passInp = document.querySelector("#pass");


formInp.addEventListener("submit",function(e){
    e.preventDefault();

    let objlogin = {
        customerEmail: emailInp.value,
        customerPass: passInp.value,
    }

    if(checkSignIN(objlogin.customerEmail,objlogin.customerPass)==false){
        alert("WRONG CREDENTIAL");
        
    }
    else if((checkSignIN(objlogin.customerEmail=="")||(objlogin.customerPass==""))){
        
        alert("WRONG CREDENTIAL");

    }
    else{
        
        localStorage.setItem("login",JSON.stringify(LSData));
        alert("Login Successful");
        window.location.href="./index.html";
    }
    formInp.reset();
})

function checkSignIN(customerEmail,customerPass){

    let filtered = LSData.filter((el)=>{
        return el.customerEmail === customerEmail && el.customerPass === customerPass;
    })
    console.log(filtered);
    if(filtered.length > 0){

        return true;
    }
    else{
        return false;
    }
}

