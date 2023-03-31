
let LSData = JSON.parse(localStorage.getItem("cart")) || [];

let LSwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let container = document.querySelector(".container");


// Display(LSData);

function Display(data){

    container.innerHTML = "";

    data.forEach(function(ele){

        const product = document.createElement("div");

        const image = document.createElement("img");
        const name = document.createElement("p");
        const price = document.createElement("p");
        const removeToCart = document.createElement("button");
        const addToWishlist = document.createElement("button");
        let inc = document.createElement("button");
        let dec = document.createElement("button");
        let quantity = document.createElement("span");
        
        image.setAttribute("src", ele.img);
        name.innerText = ele.name;
        price.innerText = `₹${ele.price}`;
        inc.innerText = "+";
        dec.innerText = "-";
        quantity.innerText = ele.quantity;
        
        removeToCart.innerText = "Remove";
        addToWishlist.innerText = "Wishlist"

        removeToCart.addEventListener("click",function(){

            LSData = LSData.filter(function(el){
                return ele.id !== el.id;
            })
            localStorage.setItem("cart",JSON.stringify(LSData));
            Display(LSData);
        })

        addToWishlist.addEventListener("click",function(){
            
            LSwishlist.push(ele);
            localStorage.setItem("wishlist",JSON.stringify(LSwishlist));
                    
            LSData = LSData.filter((el)=>{
                return el.id !== ele.id;
            })
            Display(LSData);
            localStorage.setItem("cart",JSON.stringify(LSData));
            
        })

        inc.addEventListener("click",function(){

            ele.quantity++;
            localStorage.setItem("cart",JSON.stringify(LSData));
            console.log(LSData)
            Display(LSData);
        })

        dec.addEventListener("click",function(){

            if(ele.quantity > 1){
                ele.quantity--;
                localStorage.setItem("cart",JSON.stringify(LSData));
                Display(LSData);
            }
        })
        product.append(image,name,price,dec,quantity,inc,removeToCart,addToWishlist);
        container.append(product);

    })

    let totalSum = document.getElementById("price-count");

    let sum = 0;
    for(let i = 0; i < LSData.length; i++){
        sum+=LSData[i].quantity*LSData[i].price;
    }
    totalSum.innerText = sum;

}

Display(LSData)


// function Display(data) {
//     container.innerHTML = "";
//     for (let i = 0; i < data.length; i++) {
//         const product = document.createElement("div");

//         const image = document.createElement("img");
//         image.setAttribute("src", data[i].img);

//         const name = document.createElement("p");
//         name.innerText = data[i].name;

//         const price = document.createElement("p");
//         price.innerText = `₹${data[i].price}`;

//         const deleteFromCart = document.createElement("button");
//         deleteFromCart.innerText = "Remove";

//         const addToWishlist = document.createElement("button");
//         addToWishlist.innerText = "Wishlist";

//         addToWishlist.addEventListener("click",function(){
            
//             wishlistLS.push(data[i]);
//             localStorage.setItem("wishlist",JSON.stringify(wishlistLS));

//             LSData = LSData.filter((ele)=>{
//                 return data[i].id != ele.id;
//             })
//             Display(LSData);
//             localStorage.setItem("cart",JSON.stringify(LSData));

//         })

//         deleteFromCart.addEventListener("click", function () {
//             LSData = LSData.filter(function (element, index) {

//                 if (i === index) {
//                     return false;
//                 } else {
//                     return true;
//                 }
//             })
//             localStorage.setItem("cart", JSON.stringify(LSData));
//             Display(LSData);
//         })

//         product.append(image, name, price, deleteFromCart,addToWishlist);
//         container.append(product);
//     }

// }