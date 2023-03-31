let LSData = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.querySelector(".container");

Display(LSData);

function Display(data) {
    container.innerHTML = "";// null also fine
    for (let i = 0; i < data.length; i++) {
        const product = document.createElement("div");

        const image = document.createElement("img");
        image.setAttribute("src", data[i].img);

        const name = document.createElement("p");
        name.innerText = data[i].name;

        const price = document.createElement("p");
        price.innerText = `₹${data[i].price}`;

        const deleteFromCart = document.createElement("button");
        deleteFromCart.innerText = "Remove";

        const addToWishlist = document.createElement("button");
        addToWishlist.innerText = "Wishlist";

        addToWishlist.addEventListener("click",function(){
            
            LSData.push(data[i]);
            localStorage.setItem("wishlist"),JSON.stringify(LSData);

        })

        deleteFromCart.addEventListener("click", function () {
            LSData = LSData.filter(function (element, index) {
                // i = 1
                if (i === index) {
                    return false;
                } else {
                    return true;
                }
            })
            localStorage.setItem("cart", JSON.stringify(LSData));
            Display(LSData);
        })

        product.append(image, name, price, deleteFromCart,addToWishlist);
        container.append(product);
    }

}