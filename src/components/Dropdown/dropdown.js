const dropdowns = document.querySelectorAll(".dropdown")
const dropdownOpenedClassName = "dropdown--opened"

function clickHandler(dropdown) {
  dropdown.classList.toggle(dropdownOpenedClassName)
}

dropdowns.forEach((dropdown) => {
  const open = dropdown.querySelector(".dropdown__open")

  open.addEventListener("click", clickHandler.bind(this, dropdown))
})
