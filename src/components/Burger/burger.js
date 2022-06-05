const burger = document.querySelector(".burger")
const toggleButton = document.querySelector("#burger-toggle")

const burgerActiveClassName = "burger--active"

toggleButton.addEventListener("click", burgerToggle)

function burgerToggle() {
  burger.classList.toggle(burgerActiveClassName)
}
