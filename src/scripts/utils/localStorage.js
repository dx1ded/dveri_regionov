export const getItemsFromCart = () => (
  JSON.parse(localStorage.getItem("cart"))
)

export const setItemToCart = (item) => {
  const items = getItemsFromCart()

  if (!items) {
    return localStorage.setItem("cart", JSON.stringify(item))
  }

  items.push(item)

  localStorage.setItem("cart", JSON.stringify(items))
}

export const removeItemFromCart = (itemIndex) => {
  const items = getItemsFromCart()

  const index = items.findIndex(({ index }) => index === itemIndex)

  items.splice(index, 1)

  localStorage.setItem("cart", JSON.stringify(items))
}

export const getItemsCountFromCart = () => (
  getItemsFromCart()?.length
)
