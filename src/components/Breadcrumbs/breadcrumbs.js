const breadcrumbsList = document.querySelector(".breadcrumbs__list")

export const setBreadcrumbs = (items) => {
  breadcrumbsList.innerHTML = ""

  items.forEach(({ name, path }) => {
    breadcrumbsList.insertAdjacentHTML(
      "beforeend",
      `
        <li class="breadcrumbs__item">
          <a href="${path}" class="link-reset text text--sm text--gray">${name}</a>
        </li>
      `
    )
  })
}
