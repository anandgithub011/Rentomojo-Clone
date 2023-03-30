let LSData = JSON.parse(localStorage.getItem("signup")) || [];

let formInp = document.querySelector("#form");

let nameInp = document.querySelector("#name")
let emailInp = document.querySelector("#email")
let createpassInp = document.querySelector("#create-pass")
let submitInp = document.querySelector("#submit")

formInp.addEventListener("submit",function(ele){
    ele.preventDefault();
    let obj = {
        customerName: nameInp.value,
        customerEmail: emailInp.value,
        customerPass: createpassInp.value,
    }

    if(checkEmail(obj.customerEmail)){

        alert("Signup Successful");
        LSData.push(obj);
        localStorage.setItem("signup",JSON.stringify(LSData));

    }
    else{

        alert("Account already exist!");

    }
    window.location.href="./login.html";
    formInp.reset();

})

function checkEmail(customerEmail){
    let filtered = LSData.filter((e)=>{
        return customerEmail == e.customerEmail;

    })
    if(filtered.length > 0){
        return false;
    }
    else{
        return true;
    }
}