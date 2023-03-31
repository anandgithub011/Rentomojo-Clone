let LSwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let LSData  = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.querySelector(".container");

Display(LSwishlist);

function Display(data){
    container.innerHTML = "";

    data.forEach(function(ele){

        let product = document.createElement("div");
    
        let image = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let moveToCart = document.createElement("button");
        let deleteFromCart = document.createElement("button");
        
        image.setAttribute("src",ele.img);
        name.innerText = ele.name;
        price.innerText = `₹${ele.price}`;
        
        deleteFromCart.innerText = "Remove";
        moveToCart.innerText = "Move To Cart";

        moveToCart.addEventListener("click",function(){
            
            LSData.push(ele);
            localStorage.setItem("cart",JSON.stringify(LSData));
                    
            LSwishlist = LSwishlist.filter((el)=>{
                return el.id !== ele.id;
            })
            Display(LSwishlist);
            localStorage.setItem("wishlist",JSON.stringify(LSwishlist));
            
        })


        deleteFromCart.addEventListener("click", function () {

            LSwishlist = LSwishlist.filter(function(el){
                return ele.id !== el.id;
            })
            localStorage.setItem("wishlist",JSON.stringify(LSwishlist));
            Display(LSwishlist);
           
        });

        container.append(product);
        product.append(image,name,price,moveToCart,deleteFromCart);

    });
}

Display(LSwishlist);