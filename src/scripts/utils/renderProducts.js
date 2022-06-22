import { productMarkup } from "@cmps/Product/product"

export function renderProducts(products, container, type) {
  container.innerHTML = ""

  products.forEach((product) => {
    container.insertAdjacentHTML(
      "beforeend",
      productMarkup({
        id: product._id,
        type,
        name: product.name,
        price: product.price_opt,
        image: `https://dver.com/xml/images/${product.articul}.jpeg`
      })
    )
  })
}
