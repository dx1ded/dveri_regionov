import { request } from "@/utils/request"
import { getItemsFromCart } from "@/utils/localStorage"

const form = document.querySelector(".submit-form")
const button = form.querySelector(".submit-form__submit")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const form = event.target

  const select = form.querySelector(".select")
  const selectDisplay = select.querySelector(".select__display")
  const selectItems = [...select.querySelectorAll(".select__item")]

  const isApplicable = selectItems.find((item) => item.textContent === selectDisplay.textContent)

  if (!isApplicable) {
    return alert("Укажите тип получения")
  }

  const formData = new FormData(form)
  const userData = [{
    name: "type",
    value: selectDisplay.textContent
  }]

  for (const [name, value] of formData) {
    userData.push({ name, value })
  }

  const order = getItemsFromCart()

  if (!order || !order.length) {
    return alert("Корзина не должна быть пустой")
  }

  button.setAttribute("disabled", "")

  request("/order", {
    method: "POST",
    body: JSON.stringify({ userData, order }),
    headers: {
      "Content-Type": "application/json",
    }
  }).then(() => {
    button.removeAttribute("disabled")
    alert("Ваш заказ был оформлен. Вам перезвонит наш менеджер")
  })
})
