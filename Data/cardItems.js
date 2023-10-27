import { card, removeItem } from "./card.js";
import {
  nonvegitems,
  vegItems,
  biscuitItems,
  juiceitems,
  products
} from "../script.js";


let cardItems = document.querySelector(".product-details");


card.forEach((item) => {
  let matchedFood;
  let cardItemFoodName = item.productName;
  nonvegitems.forEach((foodName) => {
    if (cardItemFoodName == foodName.productName) {
      matchedFood = foodName;
    }
  });

  vegItems.forEach((vegFoodName) => {
    if (cardItemFoodName == vegFoodName.productName) {
      matchedFood = vegFoodName;
    }
  });

  biscuitItems.forEach((biscuitName) => {
    if (cardItemFoodName == biscuitName.productName) {
      matchedFood = biscuitName;
    }
  });

  juiceitems.forEach((juiceName) => {
    if (cardItemFoodName == juiceName.productName) {
      matchedFood = juiceName;
    }
  });

  products.forEach((cakeName) => {
    if (cardItemFoodName == cakeName.productName) {
      matchedFood = cakeName;
    }
  });

  cardItems.innerHTML += `

  <div class='selecteditems remove-container-${matchedFood.productName}'>
  <div class="card-img">
    <img loading="lazy" src="${matchedFood.img}">
  </div>
  <div class="product-d">
    <h3 class="product-title">${matchedFood.productName}</h3>
    <p>${matchedFood.pDescription}</p>
    <span class="light">M.R.P:<strike class="light">&#8377 ${matchedFood.mrp}</strike>(40% Off)</span>
    <h3 class="rupees">&#8377<span class="rupees"></span>${matchedFood.price}</h3>
    <div class="btns">
    <div data-card-quantity-${matchedFood.productName}>Qnty:${card.quantity}</div>
      <div class="update">
        <select name="" id="">
          <option value="">Update</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </div>
      <button class="remove" data-food-Name=${matchedFood.productName}>Remove</button>
    </div>
   
  </div>
  
  </div>`;
});

let remove = document.querySelectorAll(".remove");
remove.forEach((link) => {
  link.addEventListener("click", () => {
    const fname = link.dataset.foodName;
    removeItem(fname);
    console.log(link);
  });
});

