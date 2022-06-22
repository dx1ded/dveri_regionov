const paginationList = document.querySelector(".pagination__list")

export function paginationInitialize(more) {
  paginationList.innerHTML = ""

  const searchParams = new URL(location.href).searchParams
  const page = +searchParams.get("page")

  if (page > 1) {
    addPaginationPrev((searchParams.set("page", page - 1), searchParams.toString()))
    addPaginationItem((searchParams.set("page", page - 1), searchParams.toString()), page - 1)
  }

  addPaginationItem((searchParams.set("page", page), searchParams.toString()), page, true)

  if (more) {
    addPaginationItem((searchParams.set("page", page + 1), searchParams.toString()), page + 1)
    addPaginationNext((searchParams.set("page", page + 1), searchParams.toString()))
  }
}

function addPaginationPrev(searchParams) {
  paginationList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="pagination__item">
        <a href="?${searchParams}" class="link-reset">
          <svg>
            <use xlink:href="assets/images/sprite.svg#arrow-left"></use>
          </svg>
        </a>
      </li>
    `
  )
}

function addPaginationNext(searchParams) {
  paginationList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="pagination__item">
        <a href="?${searchParams}" class="link-reset">
          <svg>
            <use xlink:href="assets/images/sprite.svg#arrow-right"></use>
          </svg>
        </a>
      </li>
    `
  )
}

function addPaginationItem(searchParams, page, isActive) {
  paginationList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="pagination__item ${isActive ? 'pagination__item--active' : ''}">
        <a href="?${searchParams}" class="link-reset text text--sm">${page}</a>
      </li>
    `
  )
}
