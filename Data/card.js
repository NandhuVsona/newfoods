import { qnty } from "/script.js";


export let card = JSON.parse(localStorage.getItem("savedItems"));
if (!card) {
  card = [];
}

export function saveToStorage() {
  localStorage.setItem("savedItems", JSON.stringify(card));
}

export function removeItem(proName) {
  let foodName = proName;
  let newCard = [];
  card.forEach((food) => {
    if (food.productName !== foodName) {
      newCard.push(food);
    }
  });
  card = newCard;
  document.querySelector(`.remove-container-${foodName}`).remove();
  saveToStorage();
}
let checkout = document.querySelector(".checkout");
let lsCardQunty = 0;
card.forEach((crdqnty) => {
  lsCardQunty += crdqnty.quantity;
});
localStorage.setItem("crdqnty", JSON.stringify(lsCardQunty));
let res = localStorage.getItem("crdqnty");
if (res < 10 && res != 0) {
  qnty.innerHTML = `0${res}`;
  checkout.innerHTML=res;
} else {
  qnty.innerHTML = res;
  checkout.innerHTML=res;
}

// let billDetails = document.querySelector(".bill-details");
// card.forEach((item) => {
//   prices.forEach(food =>{
//     console.log(food);
//   })
//   let billProduct = `
//                 <ul class="bill">
//                   <li class="bill-product-name">${item.productName}</li>
//                   <li>150 x ${item.quantity} =</li>
//                   <li><h3>&#8377 ${item.quantity * 150}</h3></li>
//                 </ul>`;
//   billDetails.innerHTML+=billProduct;
// });
