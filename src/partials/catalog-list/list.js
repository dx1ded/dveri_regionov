import { request } from "@/utils/request"
import { getLastSegment } from "@/utils/getLastSegment"
import { renderProducts } from "@/utils/renderProducts"

import { setBreadcrumbs } from "@cmps/Breadcrumbs/breadcrumbs"
import { createLoader, removeLoader } from "@cmps/Loader/loader"
import { initializeFilter } from "@cmps/Filter/filter"
import { paginationInitialize } from "@cmps/Pagination/pagination"

const catalogTypes = {
  "/doors": "Каталог дверей",
  "/accessories": "Каталог погонажа",
  "/furniture": "Каталог фурнитуры",
  "/arch": "Каталог арок",
  "/iron-doors": "Каталог железных дверей"
}

const list = document.querySelector(".list")
const container = document.querySelector(".list__container")
const productsContainer = container.querySelector(".list__wrapper")

const url = new URL(document.location)
const params = url.searchParams

const type = getLastSegment()

setBreadcrumbs([
  { name: "Главная", path: "/" },
  { name: "Каталог", path: "/catalog" },
  { name: catalogTypes[type], path: `/catalog${type}` }
])

createLoader(list)

request(`/catalog${type}?${params.toString()}`)
  .then((res) => res.json())
  .then(({ products, more }) => {
    removeLoader()
    renderProducts(products, productsContainer, type)
    initializeFilter()
    paginationInitialize(more)

    document.title = `${catalogTypes[type]} - Дверной Регион`
  })
  .catch(() => {
    removeLoader()

    container.innerHTML = "<h2 class='title title--xl' style='margin: 0 0 5rem'>Страница не найдена</h2>"

    document.title = "Страница не найдена"
  })
