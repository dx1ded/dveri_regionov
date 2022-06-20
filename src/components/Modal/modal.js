import { request } from "@/utils/request"

export const modalMarkup = () => `
  <div class="modal">
    <div class="modal__container">
      <button class="modal__close btn-reset" id="modal-close" aria-label="Закрыть модальное окно"></button>
      <form class="modal-form">
        <input type="text" name="name" placeholder="Ваше имя" required>
        <input type="tel" name="phone" placeholder="Номер телефона" required>
        <input class="btn-reset btn btn--primary" type="submit" value="Позвонить мне">
      </form>
    </div>
  </div>
`

const modalActiveClassName = "modal--active"
const bodyOverflowedClassName = "scroll-disabled"

export function initializeModal() {
  const modal = document.querySelector(".modal")
  const modalOpen = document.querySelector("[data-modal-open]")
  const modalClose = document.querySelector("#modal-close")

  ;[modalOpen, modalClose].forEach((button) => button.addEventListener(
    "click",
    modalToggle.bind(this, modal)
  ))

  // Initialize form

  initializeForm(modal)
}

function modalToggle(modal) {
  modal.classList.toggle(modalActiveClassName)
  document.body.classList.toggle(bodyOverflowedClassName)
}

function initializeForm(modal) {
  const form = modal.querySelector(".modal-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = { link: location.href }
    
    for (const [key, value] of formData) {
      data[key] = value
    }

    request("/order/measure", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(() => {
      alert("Наш менеджер перезвонит вам в ближайшее время")
      modalToggle(modal)
    })
  })
}
