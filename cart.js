
let LSData = JSON.parse(localStorage.getItem("cart")) || [];

let LSwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let container = document.querySelector(".container");


Display(LSData);

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
        price.innerText = `₹${ele.price}/Month`;
        inc.innerText = "+";
        dec.innerText = "-";
        quantity.innerText = ele.quantity;
        
        removeToCart.innerText = "Remove";
        addToWishlist.innerText = "Wishlist"
        // addToWishlist.setAttribute = ("src",ele."addToWishlist".img)

        removeToCart.addEventListener("click",function(){

            LSData = LSData.filter(function(el){
                return ele.productID !== el.productID
            })
            Display(LSData);

            localStorage.setItem("cart",JSON.stringify(LSData));
        })

        addToWishlist.addEventListener("click",function(){
            
            LSwishlist.push(ele);
            localStorage.setItem("wishlist",JSON.stringify(LSwishlist));
                    
            LSData = LSData.filter((el)=>{
                return el.productID !== ele.productID;
            })
            Display(LSData);
            localStorage.setItem("cart",JSON.stringify(LSData));
            
        });

        inc.addEventListener("click",function(){

            ele.quantity++;
            localStorage.setItem("cart",JSON.stringify(LSData));
            // console.log(LSData)
            Display(LSData);
        });

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
    totalSum.innerText = "₹"+sum;

}

Display(LSData);