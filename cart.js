// let LSData = localStorage.getItem("cart");
// if (LSData === null) {
//     LSData = [];
// } else {
//     LSData = JSON.parse(LSData);
// }
let LSData = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.querySelector(".container");

Display(LSData);
function Display(data) {
    container.innerHTML = "";// null also fine
    for (let i = 0; i < data.length; i++) {
        const product = document.createElement("div");

        const image = document.createElement("img");
        image.setAttribute("src", data[i].img);

        const name = document.createElement("h2");
        name.innerText = data[i].name;

        const price = document.createElement("p");
        price.innerText = data[i].price;
        // if (data[i].price >= 1000) {
        //     price.style.color = "red";
        // }


        const brand = document.createElement("p");
        brand.innerText = data[i].brand;


        const category = document.createElement("p");
        category.innerText = data[i].catagory;

        const deleteFromCart = document.createElement("button");
        deleteFromCart.innerText = "Delete";
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

        product.append(image, name, price, brand, category, deleteFromCart);
        container.append(product);
    }

}