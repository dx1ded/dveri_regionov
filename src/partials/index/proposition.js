import { request } from "@/utils/request"

import { productMarkup } from "@cmps/Product/product"
import { createLoader, removeLoader } from "@cmps/Loader/loader"

const filter = document.querySelector(".proposition-filter")
const items = filter.querySelectorAll(".proposition-filter__item")
const container = document.querySelector(".proposition__items")
const itemActiveClassName = "proposition-filter__item--active"
const activeItem = document.querySelector(`.${itemActiveClassName}`)

if (activeItem) {
  createLoader(container)
  
  const observer = new IntersectionObserver(() => {
    if (container.querySelector(".product")) return

    loadProducts(activeItem.dataset.type)
  })

  observer.observe(container)
}

items.forEach((item) => item.addEventListener(
  "click",
  clickHandler
))

function clickHandler(event) {
  const type = event.target.dataset.type
  
  const currentActiveItem = document.querySelector(`.${itemActiveClassName}`)

  currentActiveItem.classList.remove(itemActiveClassName)
  event.target.classList.add(itemActiveClassName)

  createLoader(container, true)
  loadProducts(type)
}

function loadProducts(type) {
  request(`/proposition/${type}`)
    .then((res) => res.json())
    .then(({ products }) => {
      removeLoader()
      renderProducts(products)
    })
}

function renderProducts(products) {
  container.innerHTML = ""
  products.forEach((product) => {
    container.insertAdjacentHTML(
      "beforeend",
      productMarkup({
        id: product._id,
        type: "/doors",
        name: product.name,
        price: product.price_opt,
        image: `https://dver.com/xml/images/${product.articul}.jpeg`
      })
    )
  })
}
