const PRODUCT_DATA = [
    {
        category: "Bed",
        name: "Hiber Wooden Queen Storage Bed (6x5)",
        price: "2000",
        size: "X,XX,XXL",
        productID: "1",
        img: "https://p.rmjo.in/moodShot/bsx1rpvs-1024x512.jpg",
    },
    {
        category: "Bed",
        name: "Kipper Wooden Queen Bed (6x5)",
        price: "1347",
        size: "X,M,L,XX,XXL",
        productID: "2",
        img: "https://p.rmjo.in/moodShot/ro00fxro-1024x512.jpg",
    },
    {
        category: "Bed",
        name: "Napster Metal Single Bed (6x3)",
        price: "799",
        size: "M,L,XX,XXS",
        productID: "3",
        img: "https://p.rmjo.in/moodShot/kgk2znv0-1024x512.jpg",
    },
    {
        category: "Chair",
        name: "Morris Office Chair",
        price: "2000",
        size: "X,M,L,XXS,XXL",
        productID: "4",
        img: "https://p.rmjo.in/moodShot/8lm1gbal-1024x512.jpg",
    },
    {
        category: "Sofa",
        name: "Rex 3-Seater Leather Sofa (Black)",
        price: "1347",
        size: "X,M,L",
        productID: "5",
        img: "https://p.rmjo.in/moodShot/jmu78j03-1024x512.jpg",
    },
    {
        category: "Chair",
        name: "Miller Office Chair",
        price: "979",
        size: "XXS,M,L",
        productID: "6",
        img: "https://p.rmjo.in/moodShot/1mue9p4x-1024x512.jpg",
    },
    {
        category: "Table",
        name: "Stuart Study Table",
        price: "2000",
        size: "XXL,M,L",
        productID: "7",
        img: "https://p.rmjo.in/moodShot/xsoym05h-1024x512.jpg",
    },
    {
        category: "Wardrobe",
        name: "Stowy 2-Door Wardrobe",
        price: "1347",
        size: "X,M,L,XX",
        productID: "8",
        img: "https://p.rmjo.in/moodShot/sdnbpn48-1024x512.jpg",
    },
    {
        category: "TV Unit",
        name: "Pixar TV Unit",
        price: "976",
        size: "XS,M,L,XX",
        productID: "9",
        img: "https://p.rmjo.in/moodShot/gwvyn0nh-1024x512.jpg",
    },
    {
        category: "Sofa",
        name: "Barney Leather Recliner (Brown)",
        price: "456",
        size: "X,L,XX",
        productID: "10",
        img: "https://p.rmjo.in/moodShot/z3vtekv3-1024x512.jpg"
    },
    {
        category: "Wardrobe",
        name: "Magnum 1-Door Wardrobe",
        price: "986",
        size: "M,L,XXS",
        productID: "11",
        img: "https://p.rmjo.in/moodShot/4z6cn3yp-1024x512.jpg",
    },
    {
        category: "Wardrobe",
        name: "Magnum 2-Door Wardrobe",
        price: "567",
        size: "S,M,L,XXl",
        productID: "12",
        img: "https://p.rmjo.in/moodShot/0z0c8w3x-1024x512.jpg",
    },
    {
        category: "Wardrobe",
        name: "Magnum 3-Door Wardrobe",
        price: "765",
        size: "S,X,L,XXl",
        productID: "13",
        img: "https://p.rmjo.in/moodShot/vvwn7p50-1024x512.jpg",
    },
    {
        category: "Bed",
        name: "Poise Wooden King Bed (6x6)",
        price: "9999",
        size: "S,M,X,XXL",
        productID: "14",
        img: "https://p.rmjo.in/moodShot/8c0m7i0y-1024x512.jpg",
    },
    {
        category: "Bed",
        name: "Poise Wooden King Bed (6x6)",
        price: "1347",
        size: "S,M,X,XXL",
        productID: "15",
        img: "https://p.rmjo.in/moodShot/8c0m7i0y-1024x512.jpg",
    },
    {
        category: "Table",
        name: "Poise Study Table",
        price: "799",
        size: "S,M,L,XXL",
        productID: "16",
        img: "https://p.rmjo.in/moodShot/hoopqj5t-1024x512.jpg",
    },
    {
        category: "Bed",
        name: "Napster Metal Queen Bed (6x5)",
        price: "2000",
        size: "S,XX",
        productID: "17",
        img: "https://p.rmjo.in/moodShot/b5ohrnvw-1024x512.jpg",
    },
    {
        category: "Bed",
        name: "Aurora Wooden Queen Bed (6x5)",
        price: "1347",
        size: "S,M,XX,XXL",
        productID: "18",
        img: "https://p.rmjo.in/moodShot/ruijs8it-1024x512.jpg",
    },
    {
        category: "Wardrobe",
        name: "Hutch 2-Door Wardrobe",
        price: "979",
        size: "M,XXL,XX",
        productID: "19",
        img: "https://p.rmjo.in/moodShot/e0a71d0v-1024x512.jpg",
    },
    {
        category: "Mattress",
        name: "Queen Foam Mattress (6x5)",
        price: "2000",
        size: "M,X,L,XXL",
        productID: "20",
        img: "https://p.rmjo.in/moodShot/25s0hqv0-1024x512.jpg",
    },
    {
        category: "Dressing Table",
        name: "Brook Dressing Table",
        price: "1347",
        size: "M,L,XXL",
        productID: "21",
        img: "https://p.rmjo.in/moodShot/y0hv1z09-1024x512.jpg",
    },
    {
        category: "Table",
        name: "Caramel 4-Seater Coffee Table (Blue)",
        price: "976",
        size: "S,XX",
        productID: "22",
        img: "https://p.rmjo.in/moodShot/d09x32ec-1024x512.jpg",
    },
    {
        category: "Bed",
        name: "Napster Metal Queen Bed (White 6x5)",
        price: "456",
        size: "XXL",
        productID: "23",
        img: "https://p.rmjo.in/moodShot/yhykhfe8-1024x512.jpg"
    },
    {
        name: "Marvel TV Unit",
        price: "976",
        size: "XS,M,L,XX",
        productID: "24",
        img: "https://p.rmjo.in/moodShot/voswtapg-1024x512.jpg",
    },
    {
        category: "TV Unit",
        name: "Lack TV Bench",
        price: "976",
        size: "XS,M,L,XX",
        productID: "25",
        img: "https://p.rmjo.in/moodShot/yajv3ort-1024x512.jpg",
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
            if (element.category === filter.value) {
                return true;
            } else {
                return false;
            }
        })
        Display(filtered);
    }
})



Display(PRODUCT_DATA);

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

        const addToCart = document.createElement("button");
        addToCart.innerText = "Add TO Cart";

        addToCart.addEventListener("click", function () {
            LSData.push(data[i]);
            localStorage.setItem("cart", JSON.stringify(LSData));
        })

        product.append(image,name,price,addToCart);
        container.append(product);
    }

}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });