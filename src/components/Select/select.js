const selectElements = document.querySelectorAll(".select")
const selectOpenedClassList = "select--opened"

function toggleSelect(select) {
  select.classList.toggle(selectOpenedClassList)
}

function changeActiveItem(display, event) {
  const item = event.target.textContent

  display.textContent = item
}

selectElements.forEach((select) => {
  const selectDisplay = select.querySelector(".select__display")
  const selectItems = select.querySelectorAll(".select__item")

  ;[selectDisplay, ...selectItems].forEach(
    (element) => element.addEventListener(
      "click",
      toggleSelect.bind(this, select)
    )
  )

  selectItems.forEach(
    (item) => item.addEventListener(
      "click",
      changeActiveItem.bind(this, selectDisplay)
    )
  )
})
