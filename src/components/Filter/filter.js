import { paginationInitialize } from "@cmps/Pagination/pagination"

import { request } from "@/utils/request"
import { renderProducts } from "@/utils/renderProducts"
import { getLastSegment } from "@/utils/getLastSegment"

const filterItemMarkup = (type) => (`
  <h3 class="title title--xs title--primary filter__title">${type.title}</h3>
  ${type.list ? type.list.map(({ name, key, value }) => `
    <div
      class="filter-item"
      data-key="${key}"
      data-value="${value}"
    >
      <span class="filter-item__display">${name}</span>
      <div class="list-reset filter-item__brands"></div>
    </div>
  `).join("") : ""}
`)

const types = {
  "/accessories": { title: "Погонаж" },
  "/doors": {
    title: "Межкомнатные двери",
    list: [
      {
        name: "Двери шпонированные",
        key: "coverage_type",
        value: "Шпон"
      },
      {
        name: "Двери эмаль",
        key: "coverage_type",
        value: "Эмаль"
      },
      {
        name: "Двери Экошпон, ПВХ",
        key: "coverage_type",
        value: "Экошпон"
      },
      {
        name: "Двери глянцевые",
        key: "coverage_type",
        value: "Глянцевое покрытие"
      },
      {
        name: "Двери INVISIBLE",
        key: "collection",
        value: "Серия INVISIBLE"
      }
    ]
  },
  "/iron-doors": {
    title: "Входные двери",
    list: [
      {
        name: "PROTECTOR готовые двери",
        key: "group",
        value: "Готовые вх. двери"
      },
      {
        name: "PROTECTOR с панелями",
        key: "group",
        value: "Вх. двери со сменными панелями"
      }
    ]
  },
  "/furniture": {
    title: "Фурнитура",
    list: [
      {
        name: "Ручки дверные",
        key: "group",
        value: "Ручки дверные"
      },
      {
        name: "Фиксаторы",
        key: "parent_group",
        value: "Сантехнические фиксаторы"
      },
      {
        name: "Накладки под цилиндр",
        key: "parent_group",
        value: "Накладки под цилиндр"
      },
      {
        name: "Замки, защелки",
        key: "parent_group",
        value: "Замки, защелки"
      },
      {
        name: "Петли",
        key: "parent_group",
        value: "Петли"
      },
    ]
  }
}

const filter = document.querySelector(".filter")
const productsContainer = document.querySelector(".list__wrapper")

const filterActiveItemClassName = "filter-item--active"
const filterActiveBrandClassName = "filter-item__brand--active"

const url = new URL(location.href)
const queryParams = url.searchParams

const type = getLastSegment()

export async function initializeFilter() {
  // Render filter types

  filter.insertAdjacentHTML(
    "beforeend",
    filterItemMarkup(types[type])
  )

  // Add brands load on item click

  const filterItems = document.querySelectorAll(".filter-item__display")

  filterItems.forEach((filterItem) => filterItem.addEventListener(
    "click",
    (event) => filterItemHandler(event.target.parentElement)
  ))

  // Check, is there already an active item (by query params)

  const currentKey = queryParams.get("key")
  const currentValue = queryParams.get("value")

  const currentItem = filter
    .querySelector(`[data-key="${currentKey}"][data-value="${currentValue}"]`)

  if (currentItem) {
    await filterItemHandler(currentItem, true)
  }

  // Check, is there already an active brand (by query params)

  const currentBrandName = queryParams.get("brand")
  const currentBrand = filter.querySelector(`[data-brand="${currentBrandName}"]`)

  if (currentBrand) currentBrand.classList.add(filterActiveBrandClassName)
}

// Handlers

async function filterItemHandler(item, isInitial) {
  const filterBrandsWrapper = item.querySelector(".filter-item__brands")

  const key = item.dataset.key
  const value = item.dataset.value

  const url = new URL(location.href)

  if (!isInitial) {
    url.searchParams.delete("brand")
    url.searchParams.set("page", 1)
  }

  url.searchParams.set("type", type.replace("/", ""))
  url.searchParams.set("key", key)
  url.searchParams.set("value", value)

  // Replace url to current filter

  history.pushState(null, "", url.toString())

  // Check, is there any active items

  const filterActiveItem = filter.querySelector(`.${filterActiveItemClassName}`)

  if (filterActiveItem) {
    // Delete current active item

    filterActiveItem.querySelector(".filter-item__brands").innerHTML = ""
    filterActiveItem.classList.remove(filterActiveItemClassName)
  }

  // Set active item

  item.classList.add(filterActiveItemClassName)

  // Get data (products / brands)

  const query = await request(`/filter/getBrands?${url.searchParams.toString()}`)
  const { brands } = await query.json()

  // Render brands and add their handlers

  brands.forEach((brand) => {
    const node = document.createElement("button")

    node.classList.add("btn-reset", "filter-item__brand")
    node.textContent = brand.name
    node.setAttribute("data-brand", brand.name)
    node.addEventListener("click", (event) => brandClickHandler(event.target))

    filterBrandsWrapper.appendChild(node)
  })

  if (!isInitial) {
    const query = await request(`/catalog${type}?${url.searchParams.toString()}`)
    const { products, more } = await query.json()

    // Render products

    renderProducts(products, productsContainer, type)

    // Render pagination

    paginationInitialize(more)
  }
}

async function brandClickHandler(item) {
  const brand = item.textContent

  const url = new URL(location.href)
  const searchParams = url.searchParams
  
  searchParams.set("brand", brand)

  // Check, is there any active items

  const activeBrand = document.querySelector(`.${filterActiveBrandClassName}`)
  const activeBrandValue = activeBrand?.textContent

  if (activeBrand && activeBrandValue === brand) return
  else if (activeBrand) {
    // Delete styles of active element

    activeBrand.classList.remove(filterActiveBrandClassName)
  }

  // Set active item

  item.classList.add(filterActiveBrandClassName)

  // Replace url to current filter

  history.pushState(null, "", url.toString())

  // Get data (products)

  const query = await request(`/catalog${type}?${searchParams.toString()}`)
  const { products, more } = await query.json()

  // Render products

  renderProducts(products, productsContainer, type)

  // Render pagination

  paginationInitialize(more)
}
