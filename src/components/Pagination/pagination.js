const paginationList = document.querySelector(".pagination__list")

export function paginationInitialize(page, more) {
  if (page > 1) {
    addPaginationPrev(page - 1)
    addPaginationItem(page - 1)
  }
  if (more) {
    addPaginationItem(page, true)
    addPaginationItem(page + 1)
    addPaginationNext(page)
  }
}

function addPaginationPrev(page) {
  paginationList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="pagination__item">
        <a href="?page=${page - 1}" class="link-reset">
          <svg>
            <use xlink:href="assets/images/sprite.svg#arrow-left"></use>
          </svg>
        </a>
      </li>
    `
  )
}

function addPaginationNext(page) {
  paginationList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="pagination__item">
        <a href="?page=${page}" class="link-reset">
          <svg>
            <use xlink:href="assets/images/sprite.svg#arrow-right"></use>
          </svg>
        </a>
      </li>
    `
  )
}

function addPaginationItem(page, isActive) {
  paginationList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="pagination__item ${isActive ? 'pagination__item--active' : ''}">
        <a href="?page=${page - 1}" class="link-reset text text--sm">${page}</a>
      </li>
    `
  )
}
