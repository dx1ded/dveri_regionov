import { counterMarkup, initializeCounters } from "@cmps/Counter/counter"

import { normalizePrice } from "@/utils/normalizePrice"
import {
  getItemsFromCart,
  removeItemFromCart,
  getItemsCountFromCart
} from "@/utils/localStorage"

const card = document.querySelector(".list .card")
const summary = document.querySelector(".submit-form__price")
const storage = getItemsFromCart()

card.insertAdjacentHTML(
  "beforeend",
  storage && storage.length
    ? `
      <h2 class="card__title title title--md">${storage.length} товаров в корзине</h2>
      <div class="card__wrapper">
        ${storage.map((item) => `
          <div class="cart-item">
            <div class="cart-item__content">
              <img src="https://dver.com/xml/images/${item.articul}.jpeg" alt="${item.name}">
              <h3 class="cart-item__name text text--sm">${item.name}</h3>
            </div>
            <p class="cart-item__sku">${item.articul}</p>
            ${counterMarkup(item.count, 1, 1)}
            <h4 class="cart-item__price" data-price="${item.price}">${normalizePrice(item.price * item.count)} &#8381;</h4>
            <button class="cart-item__delete btn-reset" aria-label="Удалить товар из корзины" data-index="${item.index}"></button>
          </div>
        `).join("")}
      </div>
      `
    : '<h2 class="card__title title title--md">Корзина пустая</h2>'
)

// Initiliaze summary price

updateSummary()

// Initialize counters 

initializeCounters(updateCount, updateSummary)

// Delete product from cart

const deleteButtons = card.querySelectorAll(".cart-item__delete")

deleteButtons.forEach((button) => button.addEventListener(
  "click",
  () => {
    removeItemFromCart(+button.dataset.index)
    
    // Remove element from DOM

    button.closest(".cart-item").remove()

    // Update items count

    updateItemsCount()
  }
))

function updateCount(event) {
  const item = event.target.closest(".cart-item")
  const priceDisplay = item.querySelector(".cart-item__price")

  const multiplier = +item.querySelector(".counter__display").value
  const price = priceDisplay.dataset.price

  priceDisplay.textContent = `${normalizePrice(price * multiplier)} ₽`

  // Update count in Local Storage

  const storage = getItemsFromCart()
  const dataIndex = +item.querySelector(".cart-item__delete").dataset.index

  const storageItem = storage.find(({ index }) => index === dataIndex)
  
  storageItem.count = multiplier

  localStorage.setItem("cart", JSON.stringify(storage))
}

function updateItemsCount() {
  const title = card.querySelector(".card__title")
  const count = getItemsCountFromCart()

  if (!count) {
    return title.textContent = "Корзина пустая"
  }

  title.textContent = `${count} товаров в корзине`
}

function updateSummary() {
  const storage = getItemsFromCart()
  const sum = storage.reduce((sum, { price, count }) => {
    return sum += price * count
  }, 0)

  summary.textContent = `${normalizePrice(sum)} руб`
}
