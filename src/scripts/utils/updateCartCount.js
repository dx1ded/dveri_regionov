import { getItemsCountFromCart } from "./localStorage"

export const updateCartCount = () => {
  const count = getItemsCountFromCart()
  const cartItem = document.querySelector("#cart-item")
  const cartItemDisplay = cartItem.querySelector("span")

  if (count) {
    cartItem.setAttribute("data-is-not-empty", "")
    cartItemDisplay.textContent = count
  } else {
    cartItem.removeAttribute("data-is-not-empty", "")
    cartItemDisplay.textContent = ""
  }
}
