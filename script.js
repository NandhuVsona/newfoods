//------------JavaScript-----------

//import { card} from "./Data/card.js";
//import {saveToStorage} from "./Data/card.js"

let cardContainer = document.querySelector(".cards-container");
let trendImg = document.querySelector(".trend-img");
let nonVeg = document.querySelector(".non-veg");
let veg = document.querySelector(".veg");
let cookies = document.querySelector(".cookies");
let juices = document.querySelector(".juice");
let cardQuantity = document.querySelector(".fa-cart-shopping");
export let qnty = document.getElementById("quantity");
let hamburger = document.querySelector(".hamburger");
let leftContainer = document.querySelector(".left-container");
let darklight = document.getElementById("theme");
let cheader = document.querySelector("#cheader");
let showcarditems = document.querySelector(".carditems");
let checkout = document.querySelector(".checkout");
let showcard = document.querySelectorAll(".showcard");
let rightContainer = document.querySelector(".right-container");
//let centerContainer = document.querySelector(".center-container");


//LocalStorage for dark or light theme

document.addEventListener("DOMContentLoaded", function () {
  let dorl = localStorage.getItem("Theme");
  if (dorl === "dark") {
    theme.classList.add("active");
    darklight.classList.add("dark");
    cheader.classList.add("head");
    hamburger.classList.add("ham");
    
  }
});

// code for hamburger
hamburger.addEventListener("click", () => {
  leftContainer.classList.toggle("move");
  leftContainer.classList.toggle("dark");
  rightContainer.classList.toggle('sandh')
  
  
});

//code for theme preference
let theme = document.querySelector(".theme");
theme.addEventListener("click", () => {
  theme.classList.toggle("active");
  darklight.classList.toggle("dark");
  cheader.classList.toggle("head");
  hamburger.classList.toggle("ham");

  let dorl = theme.classList.contains("active");
  localStorage.setItem("Theme", dorl ? "dark" : "light");
});
// header section

let trends = [
  {
    img: "./Compressed Images/fishfry.jpg",
    name: "Fishfry",
  },
  {
    img: "./Compressed Images/rice-2.jpg",
    name: "Rice",
  },
  {
    img: "./Compressed Images/trend-juice.jpg",
    name: "Fruit Juice",
  },
  {
    img: "./Compressed Images/bun.jpeg",
    name: "Bun Parotta",
  },
  {
    img: "./Compressed Images/treandbadam.jpg",
    name: "Dry Fruits",
  },
  {
    img: "./Compressed Images/burger.jpg",
    name: "Burger",
  },
];

trends.forEach((trend) => {
  let item = `<div class="circle-img">
  <img loading="lazy" src="${trend.img}" alt="">
  <p>${trend.name}</p>
 </div>`;
  trendImg.innerHTML += item;
});

export let products = [
  {
    img: "./Compressed Images/venilla-1 (1).jpg",
    productName: "Vanilla",
    pDescription: "Real ice cream vanilla magic | Delicious summer's best",
    price: 100,
    mrp: 220,
    offer: 50,
  },
  {
    img: "./Compressed Images/all-flavor-2 (1).jpg",
    productName: "All-Flavors",
    pDescription: "Ice Cream cones vanilla flavours | pack of 7",
    price: 120,
    mrp: 220,
    offer: 45,
  },
  {
    img: "./Compressed Images/ice-4.jpg",
    productName: "Strawberry",
    pDescription: "Staberry Ice Cream pack of 2",
    price: 150,
    mrp: 300,
    offer: 50,
  },
  {
    img: "./Compressed Images/lastice.jpg",
    productName: "Mangos",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/ice-11.jpg",
    productName: "Mang",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/ice-10.jpg",
    productName: "Mangwo",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/ice-5.jpg",
    productName: "Maango",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/llice.jpg",
    productName: "Mangeo",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
];
products.forEach((item) => {
  let items =  `
  <div class="card">
  <div class="card-img">
    <img loading="lazy" src="${item.img}" alt="">
  </div>
  <div class="product-description">
    <p class="product-title">${item.productName}</p>
    <p>${item.pDescription}</p>
    <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
    <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
  </div>
  <button class="addtoplate" data-product-name="${item.productName}">Add To Plate</button>
</div>`;
  

  cardContainer.innerHTML += items;
});

export let nonvegitems = [
  {
    img: "./Compressed Images/chicken.jpg",
    productName: "Chicken",
    pDescription: "Tamarind marinade for deep flavor.",
    price: 120,
    mrp: 210,
    offer: 63,
  },
  {
    img: "./Compressed Images/mutton.jpg",
    productName: "Mutton",
    pDescription: "A delicious mutton curry with spices cooked.",
    price: 60,
    mrp: 120,
    offer: 45,
  },
  {
    img: "./Compressed Images/misfishfry.jpg",
    productName: "Fishfry",
    pDescription: "Fishfry marinated in oil & shallow in oil",
    price: 35,
    mrp: 80,
    offer: 52,
  },
  {
    img: "./Compressed Images/grill.jpg",
    productName: "Grill",
    pDescription: "This recipe is perfectly juicy and moist.",
    price: 150,
    mrp: 275,
    offer: 58,
  },
  {
    img: "./Compressed Images/chicken-shwaema.webp",
    productName: "Shawarma",
    pDescription: "The recipe has a burst of flavor in every bite",
    price: 100,
    mrp: 170,
    offer: 57,
  },
  {
    img: "./Compressed Images/chicken 65.jpeg",
    productName: "Chicken-65",
    pDescription: "Marinated and deep fried chicken pieces",
    price: 80,
    mrp: 170,
    offer: 68,
  },
  {
    img: "./Compressed Images/beef.jpg",
    productName: "Beef",
    pDescription: "Tender beef chunks coated with savory",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/chicken-2.jpg",
    productName: "Pork",
    pDescription: "Honey carlic glazed pork roast recipe",
    price: 130,
    mrp: 200,
    offer: 28,
  },
];
nonvegitems.forEach((item) => {
  let nonevegs = `
  <div class="card">
          <div class="card-img">
            <img loading="lazy" src="${item.img}" alt="">
          </div>
          <div class="product-description">
            <p class="product-title">${item.productName}</p>
            <p>${item.pDescription}</p>
            <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
            <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
          </div>
          <button class="addtoplate" data-product-name="${item.productName}">Add To Plate</button>
        </div>`;
  nonVeg.innerHTML += nonevegs;
});

export let vegItems = [
  {
    img: "./Compressed Images/tradition.jpeg",
    productName: "Traditional",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 200,
    mrp: 320,
    offer: 47,
  },
  {
    img: "./Compressed Images/dosai-1.jpg",
    productName: "Dosai",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/idly (1).jpg",
    productName: "Idli",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/pongal & vadai.jpeg",
    productName: "Pongal",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/images (2) (1).jpeg",
    productName: "Parotta",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/poori (1).jpeg",
    productName: "Poori",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/naaan (1).jpeg",
    productName: "Naan",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/veg-briyani.jpg",
    productName: "Veg-Briyani",
    pDescription: "Staberry Ice Cream pack of 4",
    price: 80,
    mrp: 120,
    offer: 33,
  },
];
vegItems.forEach((item) => {
  let vegs = `
  <div class="card">
          <div class="card-img">
            <img loading="lazy" src="${item.img}" alt="">
          </div>
          <div class="product-description">
            <p class="product-title">${item.productName}</p>
            <p>${item.pDescription}</p>
            <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
            <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
          </div>
          <button class="addtoplate" data-product-name="${item.productName}">Add To Plate</button>
        </div>`;
  veg.innerHTML += vegs;
});

export let biscuitItems = [
  {
    img: "./Compressed Images/biscuits.jpeg",
    productName: "Biscuits",
    pDescription: "Oats with almonds cookies biscuits 650g (Pack of 15)",
    price: 100,
    mrp: 220,
    offer:57,
  },
  {
    img: "./Compressed Images/rose-cake.jpg",
    productName: "Straberry-Cake",
    pDescription: "You will fall in love with fresh straberry cake",
    price: 45,
    mrp: 70,
    offer: 19,
  },
  {
    img: "./Compressed Images/combo-snacks.jpg",
    productName: "Crunchy-Snacks",
    pDescription: "Festival snack combo each 275g (Total pack of 10)",
    price:250,
    mrp:365,
    offer:44,
  },
  {
    img: "./Compressed Images/chips.jpg",
    productName: "Potato-Chips",
    pDescription: "Spicy potato chips-100 gms (crispy and crunchy)",
    price: 30,
    mrp: 65,
    offer: 43,
  },
  {
    img: "./Compressed Images/cup-cake.jpg",
    productName: "Cup-Cake",
    pDescription: "Decorated with the best sprinklers & best occasions",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/choco-biscuit.jpg",
    productName: "Choco-Biscuits",
    pDescription: "Relish the tasty,rich in choco bourbon biscuits",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/blackforest.jpg",
    productName: "Black-Forest",
    pDescription: "Several layers of whipped cream and cherries",
    price: 80,
    mrp: 120,
    offer: 33,
  },
  {
    img: "./Compressed Images/candies.jpeg",
    productName: "Candies",
    pDescription: "Exciting fruit flavors and multi colored bite size pieces",
    price: 80,
    mrp: 120,
    offer: 33,
  },
];
biscuitItems.forEach((item) => {
  let biscuit = `
  <div class="card">
          <div class="card-img">
            <img loading="lazy" src="${item.img}" alt="">
          </div>
          <div class="product-description">
            <p class="product-title">${item.productName}</p>
            <p>${item.pDescription}</p>
            <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
            <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
          </div>
          <button class="addtoplate" data-product-name="${item.productName}">Add To Plate</button>
        </div>`;
  cookies.innerHTML += biscuit;
});

export let juiceitems = [
  {
    img: "./Compressed Images/water.webp",
    productName: "Watermelon",
    pDescription: "A delicious,thirst quenching & refreshing juice",
    price: 15,
    mrp: 40,
    offer: 67,
  },
  {
    img: "./Compressed Images/trend-juice.jpg",
    productName: "Fruit-Mixer",
    pDescription: "Fruit juice with apple banana papaya & pineapple",
    price: 15,
    mrp: 40,
    offer: 65,
  },

  {
    img: "./Compressed Images/grape.jpg",
    productName: "Grapes-Juice",
    pDescription: "Fresh grapes & Raise a glass to grape magic",
    price: 20,
    mrp: 45,
    offer: 57,
  },
  {
    img: "./Compressed Images/lemon.jpg",
    productName: "Lemon-Juice",
    pDescription: "Promotes hydration by enhancing water flavor",
    price: 10,
    mrp: 35,
    offer: 78,
  },
  {
    img: "./Compressed Images/orange-juice.jpg",
    productName: "Orange-Juice",
    pDescription: "Rich in vitamin c | Goodness of best oranges",
    price: 20,
    mrp: 35,
    offer: 47,
  },

  {
    img: "./Compressed Images/color-juice.jpg",
    productName: "Color-Soda",
    pDescription: "Offering green yellow red and brown soda",
    price: 15,
    mrp: 45,
    offer: 29,
  },

  {
    img: "./Compressed Images/pomegranate-fruit.jpg",
    productName: "Pomegranate",
    pDescription: "100% juice with no added sugar and no preservatives",
    price: 50,
    mrp: 120,
    offer: 48,
  },
  {
    img: "./Compressed Images/mangos.jpg",
    productName: "Mango-Juice",
    pDescription: "organic alphonso mangoes for a terrifically sweet",
    price: 39,
    mrp: 75,
    offer: 36,
  },
];
juiceitems.forEach((item) => {
  let juice = `
  <div class="card">
          <div class="card-img">
            <img loading="lazy" src="${item.img}" alt="">
          </div>
          <div class="product-description">
            <p class="product-title">${item.productName}</p>
            <p>${item.pDescription}</p>
            <p class="rupees">&#8377<span class="rupees"></span>${item.price}</p>
            <span class="light">M.R.P:<strike class="light">&#8377 ${item.mrp}</strike>(${item.offer}% Off)</span>
          </div>
          <button class="addtoplate" data-product-name="${item.productName}">Add To Glass</button>
        </div>`;
  juices.innerHTML += juice;
});

let btns = document.querySelectorAll(".addtoplate");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const products = btn.dataset.productName;
    saveToStorage();
   
    let matching;
    card.forEach((pName) => {
      if (pName.productName == products) {
        matching = pName;
      }
    });

    if (matching) {
      matching.quantity += 1;
    } else {
      card.push({
        productName: products,
        quantity: 1,
      });
    }
   

    let carditems = 0;

    card.forEach((item) => {
      carditems += item.quantity;
    });

    if (carditems < 10) {
      qnty.innerHTML = `0${carditems}`;
      checkout.innerHTML = carditems;
      console.log(qnty);
    } else {
      qnty.innerHTML = carditems;
      checkout.innerHTML = carditems;
    }
  });
});

cardQuantity.addEventListener("click", () => {
  showcarditems.classList.toggle("showcarditems");
  showcard.forEach((hide) => {
    hide.classList.toggle("show-cardItems");
  });
});

let notify = document.querySelector(".notification");
let login = document.querySelector(".login-form");
let hide = document.querySelectorAll(".hide");
hide.forEach((btn) => {
  btn.addEventListener("click", () => {
    clearTimeout(".notification");
    notify.style.display = "none";
  });
});

// setTimeout(() => {
//   notify.style.display = "flex";
//   login.style.transform = "scale(1)";
// }, 29100);
