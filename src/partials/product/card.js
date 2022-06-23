import { productMarkup } from "@/markup/card"

import { request } from "@/utils/request"
import { normalizePrice } from "@/utils/normalizePrice"
import { updateCartCount } from "@/utils/updateCartCount"
import { getLastSegment } from "@/utils/getLastSegment"
import {
  setItemToCart,
  getItemsCountFromCart
} from "@/utils/localStorage"

import { createLoader, removeLoader } from "@cmps/Loader/loader"
import { setBreadcrumbs } from "@cmps/Breadcrumbs/breadcrumbs"
import { initializeTabs } from "@cmps/Tabs/tabs"
import { initializeCounters } from "@cmps/Counter/counter"
import { initializeModal } from "@cmps/Modal/modal"

const card = document.querySelector(".card")
const container = card.querySelector(".card__container")

const url = new URL(location.href)
const params = url.searchParams

const type = getLastSegment()
const id = params.get("id")

const catalogTypes = {
  "/doors": "Каталог дверей",
  "/accessories": "Каталог погонажа",
  "/furniture": "Каталог фурнитуры",
  "/arch": "Каталог арок",
  "/iron-doors": "Каталог железных дверей"
}

createLoader(card)
requestProduct(`${type}?id=${id}`)

function requestProduct(query) {
  request(query)
    .then((res) => res.json())
    .then(({ product }) => {
      removeLoader()
      renderCard(product)
      calculatePrice()
      initializeModal()
      initializeTabs()
      initializeCounters(calculatePrice)
      setBreadcrumbs([
        { name: "Главная", path: "/" },
        { name: catalogTypes[type], path: `/catalog${type}?page=1` },
        { name: product.model || "Карточка товара", path: `${type}?id=${id}` }
      ])

      // Change browser title

      document.title = product.name

      // Initiliaze events on product change elements

      const changeElements = document.querySelectorAll("[data-type]")

      changeElements.forEach((element) => element.addEventListener(
        "click",
        changeProduct.bind(this, product)
      ))

      // Change URL Query

      const url = new URL(location.href)
      
      url.searchParams.set("id", product._id)

      history.pushState(null, '', url.toString())

      // Initialize add to cart button

      const addToCartButton = document.querySelector("#add-to-cart")

      addToCartButton.addEventListener("click", addToCart.bind(this, product))
    })
  .catch(() => {
    removeLoader()

    container.innerHTML = "<h2 class='title title--xl' style='margin: 0 0 5rem'>Продукт не найден</h2>"

    document.title = "Продукт не найден"
  })
}

function renderCard({ product, colors, sizes, glasses, innerColors, outerColors }) {
  container.innerHTML = ""
  container.insertAdjacentHTML(
    "beforeend",
    productMarkup(
      product,
      sizes,
      colors,
      glasses,
      innerColors,
      outerColors
    )
  )
}

function calculatePrice() {
  const display = container.querySelector("[data-price-display]")
  const elements = container.querySelectorAll("[data-price]")
  const multipliers = container.querySelectorAll("[data-multiplier]")

  const sum = [...elements].reduce((sum, element, index) => {
    return sum += +element.dataset.price * multipliers[index].value
  }, 0)

  display.setAttribute("data-price-sum", sum)
  display.innerHTML = `${normalizePrice(sum)} &#8381;`
}

function changeProduct(currentProduct, element) {
  const targetType = element.target.dataset.type
  const targetValue = element.target.dataset.value

  const query = new URLSearchParams()

  ;[...new Set([...document.querySelectorAll("[data-type]")])]
    .forEach((element) => {
      const type = element.dataset.type

      targetType === type
        ? query.set(targetType, targetValue)
        : query.set(type, currentProduct[type])
    })

  query.set("id", currentProduct._id)
  query.set("model", currentProduct.model)

  createLoader(container, true)
  requestProduct(`${type}/change?${query.toString()}`)
}

function addToCart(product) {
  const count = getItemsCountFromCart()

  setItemToCart({
    index: count ? count : 0,
    count: 1,
    link: location.href,
    articul: product.articul,
    name: product.name,
    price: document.querySelector("[data-price-display]").dataset.priceSum,
    equipments: [...document.querySelectorAll(".product-equipment")].map((equipment) => {
      const name = equipment.querySelector(".product-equipment__name").textContent
      const count = equipment.querySelector(".counter__display").value

      return { name, count }
    })
  })

  updateCartCount()
}
