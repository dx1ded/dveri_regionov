export const createLoader = (container, isAbsolute) => {
  const loader = document.createElement("div")
  
  loader.classList.add("loader")

  if (isAbsolute) {
    loader.style.position = "absolute"
  }

  container.appendChild(loader)
}

export const removeLoader = () => {
  document.querySelector(".loader").remove()
}
