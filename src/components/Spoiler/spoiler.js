const spoilers = document.querySelectorAll(".spoiler")
const spoilerOpenedClassName = "spoiler--opened"

function clickHandler(spoiler) {
  spoiler.classList.toggle(spoilerOpenedClassName)
}

spoilers.forEach((spoiler) => {
  const open = spoiler.querySelector(".spoiler__open")

  open.addEventListener("click", clickHandler.bind(this, spoiler))
})
