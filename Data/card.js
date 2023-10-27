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
let lsCardQunty = 0;
card.forEach((crdqnty) => {
  lsCardQunty += crdqnty.quantity;
});
localStorage.setItem("crdqnty", JSON.stringify(lsCardQunty));
let res = localStorage.getItem("crdqnty");
if (res < 10 && res!=0) {
  qnty.innerHTML =`0${ res}`;
} else {
  qnty.innerHTML =res;
}


