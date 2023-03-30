const PRODUCT_DATA = [
    {
        brand: "Puma",
        name: "Hiber Wooden Queen Storage Bed (6x5)",
        price: "2000",
        size: "X,XX,XXL",
        productID: "women1",
        catagory: "Casual",
        img: "https://p.rmjo.in/moodShot/bsx1rpvs-1024x512.jpg",
    },
    {
        brand: "Gap",
        name: "Kipper Wooden Queen Bed (6x5)",
        price: "1347",
        size: "X,M,L,XX,XXL",
        productID: "women2",
        catagory: "festive",
        img: "https://p.rmjo.in/moodShot/ro00fxro-1024x512.jpg",
    },
    {
        brand: "Puma",
        name: "Napster Metal Single Bed (6x3)",
        price: "799",
        size: "M,L,XX,XXS",
        productID: "women3",
        catagory: "party",
        img: "https://p.rmjo.in/moodShot/kgk2znv0-1024x512.jpg",
    },
    {
        brand: "Gap",
        name: "Morris Office Chair",
        price: "2000",
        size: "X,M,L,XXS,XXL",
        productID: "women4",
        catagory: "formal",
        img: "https://p.rmjo.in/moodShot/8lm1gbal-1024x512.jpg",
    },
    {
        brand: "Puma",
        name: "Rex 3-Seater Leather Sofa (Black)",
        price: "1347",
        size: "X,M,L",
        productID: "women5",
        catagory: "workout",
        img: "https://p.rmjo.in/moodShot/jmu78j03-1024x512.jpg",
    },
    {
        brand: "Gap",
        name: "Miller Office Chair",
        price: "979",
        size: "XXS,M,L",
        productID: "women6",
        catagory: "travel",
        img: "https://p.rmjo.in/moodShot/1mue9p4x-1024x512.jpg",
    },
    {
        brand: "Baby Moo",
        name: "Stuart Study Table",
        price: "2000",
        size: "XXL,M,L",
        productID: "women7",
        catagory: "sports",
        img: "https://p.rmjo.in/moodShot/xsoym05h-1024x512.jpg",
    },
    {
        brand: "Gap",
        name: "Stowy 2-Door Wardrobe",
        price: "1347",
        size: "X,M,L,XX",
        productID: "women8",
        catagory: "Casual",
        img: "https://p.rmjo.in/moodShot/sdnbpn48-1024x512.jpg",
    },
    {
        brand: "Bady Moo",
        name: "Pixar TV Unit",
        price: "976",
        size: "XS,M,L,XX",
        productID: "women9",
        catagory: "festive",
        img: "https://p.rmjo.in/moodShot/gwvyn0nh-1024x512.jpg",
    },
    {
        brand: "Gap",
        name: "Barney Leather Recliner (Brown)",
        price: "456",
        size: "X,L,XX",
        productID: "women10",
        catagory: "party",
        img: "https://p.rmjo.in/moodShot/z3vtekv3-1024x512.jpg"
    },
    {
        brand: "Bee bay",
        name: "Magnum 1-Door Wardrobe",
        price: "986",
        size: "M,L,XXS",
        productID: "women11",
        catagory: "formal",
        img: "https://p.rmjo.in/moodShot/4z6cn3yp-1024x512.jpg",
    },
    {
        brand: "Kaniroot",
        name: "Magnum 2-Door Wardrobe",
        price: "567",
        size: "S,M,L,XXl",
        productID: "women12",
        catagory: "workout",
        img: "https://p.rmjo.in/moodShot/0z0c8w3x-1024x512.jpg",
    },
    {
        brand: "Bee bay",
        name: "Magnum 3-Door Wardrobe",
        price: "765",
        size: "S,X,L,XXl",
        productID: "women13",
        catagory: "travel",
        img: "https://p.rmjo.in/moodShot/vvwn7p50-1024x512.jpg",
    },
    {
        brand: "Gap",
        name: "Poise Wooden King Bed (6x6)",
        price: "9999",
        size: "S,M,X,XXL",
        productID: "women14",
        catagory: "sports",
        img: "https://p.rmjo.in/moodShot/8c0m7i0y-1024x512.jpg",
    },
    {
        brand: "Puma",
        name: "Poise Wooden King Bed (6x6)",
        price: "1347",
        size: "S,M,X,XXL",
        productID: "women15",
        catagory: "Casual",
        img: "https://p.rmjo.in/moodShot/8c0m7i0y-1024x512.jpg",
    },
    {
        brand: "Kaniroot",
        name: "Poise Study Table",
        price: "799",
        size: "S,M,L,XXL",
        productID: "women16",
        catagory: "festive",
        img: "https://p.rmjo.in/moodShot/hoopqj5t-1024x512.jpg",
    },
    {
        brand: "Puma",
        name: "Napster Metal Queen Bed (6x5)",
        price: "2000",
        size: "S,XX",
        productID: "women17",
        catagory: "party",
        img: "https://p.rmjo.in/moodShot/b5ohrnvw-1024x512.jpg",
    },
    {
        brand: "Gap",
        name: "Aurora Wooden Queen Bed (6x5)",
        price: "1347",
        size: "S,M,XX,XXL",
        productID: "women18",
        catagory: "formal",
        img: "https://p.rmjo.in/moodShot/ruijs8it-1024x512.jpg",
    },
    {
        brand: "Bee bay",
        name: "Hutch 2-Door Wardrobe",
        price: "979",
        size: "M,XXL,XX",
        productID: "women19",
        catagory: "workout",
        img: "https://p.rmjo.in/moodShot/e0a71d0v-1024x512.jpg",
    },
    {
        brand: "Puma",
        name: "Queen Foam Mattress (6x5)",
        price: "2000",
        size: "M,X,L,XXL",
        productID: "women20",
        catagory: "travel",
        img: "https://p.rmjo.in/moodShot/25s0hqv0-1024x512.jpg",
    },
    {
        brand: "Puma",
        name: "Brook Dressing Table",
        price: "1347",
        size: "M,L,XXL",
        productID: "women21",
        catagory: "sport",
        img: "https://p.rmjo.in/moodShot/y0hv1z09-1024x512.jpg",
    },
    {
        brand: "Gap",
        name: "Caramel 4-Seater Coffee Table (Blue)",
        price: "976",
        size: "S,XX",
        productID: "women22",
        catagory: "Casual",
        img: "https://p.rmjo.in/moodShot/d09x32ec-1024x512.jpg",
    },
    {
        brand: "Puma",
        name: "Napster Metal Queen Bed (White 6x5)",
        price: "456",
        size: "XXL",
        productID: "women23",
        catagory: "festive",
        img: "https://p.rmjo.in/moodShot/yhykhfe8-1024x512.jpg"
    },
];

const container = document.querySelector(".container");
const filter = document.querySelector("#filter");

let LSData = localStorage.getItem("cart");

if (LSData === null) {
    LSData = [];
} else {
    LSData = JSON.parse(LSData);
}


filter.addEventListener("change", function () {
    if (filter.value === "") {
        Display(PRODUCT_DATA);
    } else {
        let filtered = PRODUCT_DATA.filter(function (element) {
            if (element.brand === filter.value) {
                return true;
            } else {
                return false;
            }
        })
        Display(filtered);
    }
})



Display(PRODUCT_DATA);
// Data = Array of Products(Object)
function Display(data) {
    // Clear the dom before do any loop/apending
    container.innerHTML = "";// null also fine
    for (let i = 0; i < data.length; i++) {
        const product = document.createElement("div");

        const image = document.createElement("img");
        image.setAttribute("src", data[i].img);

        const name = document.createElement("p");
        name.innerText = data[i].name;

        const price = document.createElement("p");
        price.innerText = `₹${data[i].price}`;
        // if (data[i].price >= 1000) {
        //     price.style.color = "red";
        // }


        const brand = document.createElement("p");
        brand.innerText = data[i].brand;


        const category = document.createElement("p");
        category.innerText = data[i].catagory;

        const addToCart = document.createElement("button");
        addToCart.innerText = "Add TO Cart";

        addToCart.addEventListener("click", function () {
            LSData.push(data[i]);
            localStorage.setItem("cart", JSON.stringify(LSData));
        })

        product.append(image, name, price, brand, category, addToCart);
        container.append(product);
    }

}