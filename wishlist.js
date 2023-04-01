let LSwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let LSData  = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.querySelector(".container");

// Display(LSwishlist);

function Display(){

    container.innerHTML = "";

    LSwishlist.forEach(function(ele){

        let product = document.createElement("div");
        
        let wishlistHeading = document.createElement("h2");
        let image = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let moveToCart = document.createElement("button");
        let deleteFromCart = document.createElement("button");

        wishlistHeading.innerText = "Here, Your Favourite Product !!!"
        image.setAttribute("src",ele.img);
        name.innerText = ele.name;
        price.innerText = `₹${ele.price}/Month`;
        
        deleteFromCart.innerText = "Remove";
        moveToCart.innerText = "Move To Cart";

        moveToCart.addEventListener("click",function(){
            
            LSData.push(ele);
            localStorage.setItem("cart",JSON.stringify(LSData));
            
            LSwishlist = LSwishlist.filter((el)=>{
                return el.productID !== ele.productID;
            })
            localStorage.setItem("wishlist",JSON.stringify(LSwishlist));
            Display();
            
        });
        
        deleteFromCart.addEventListener("click", function () {
            
            LSwishlist = LSwishlist.filter(function(el){
                return ele.productID !== el.productID;
            })
            localStorage.setItem("wishlist",JSON.stringify(LSwishlist));
            Display();
            container.append(wishlistHeading)
           
        });

        container.append(product);
        product.append(image,name,price,moveToCart,deleteFromCart);

    });
}

Display();