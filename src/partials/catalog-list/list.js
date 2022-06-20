import { request } from "@/utils/request"

import { productMarkup } from "@cmps/Product/product"
import { setBreadcrumbs } from "@cmps/Breadcrumbs/breadcrumbs"
import { createLoader, removeLoader } from "@cmps/Loader/loader"
import { paginationInitialize } from "@cmps/Pagination/pagination"

const temp = {
  "doors": "/catalog/doors",
  "arch": "/catalog/arch",
  "furniture": "/catalog/furniture",
  "accessories": "/catalog/accessories",
  "iron-doors": "/catalog/iron-doors"
}

const catalogTypes = {
  "doors": "Каталог дверей",
  "accessories": "Каталог погонажа",
  "furniture": "Каталог фурнитуры",
  "arch": "Каталог арок",
  "iron-doors": "Каталог железных дверей"
}

const list = document.querySelector(".list")
const container = document.querySelector(".list__container")

const url = new URL(document.location)
const params = url.searchParams

// const type = url.pathname.substring(1)
const type = params.get("type")
const page = +params.get("page") || 0

setBreadcrumbs([
  { name: "Главная", path: "/" },
  { name: "Каталог", path: "/catalog" },
  { name: catalogTypes[type], path: `/catalog/${type}` }
])

createLoader(list)

request(`${temp[type]}?page=${page}`)
  .then((res) => res.json())
  .then(({ products, more }) => {
    removeLoader()
    renderProducts(products)
    paginationInitialize(+page + 1, more)
  })
  .catch(() => {
    removeLoader()

    container.innerHTML = "<h2 class='title title--xl' style='margin: 0 0 5rem'>Страница не найдена</h2>"

    document.title = "Страница не найдена"
  })

function renderProducts(products) {
  products.forEach((product) => {
    container.insertAdjacentHTML(
      "beforeend",
      productMarkup({
        id: product.index,
        type,
        name: product.name,
        price: product.price_opt,
        image: `https://dver.com/xml/images/${product.articul}.jpeg`
      })
    )
  })
}
