export const productMarkup = ({ id, type, name, price, image }) => `
  <article class="product">
    <div class="product__image">
      <img src="${image}" alt="Изображение товара">
    </div>
    <div class="product__info">
      <h4 class="product__name text text--md text--gray">${name}</h4>
      <div class="product__wrapper">
        <a href="/product?type=${type}&id=${id}" class="product__buy link-reset btn btn--md btn--primary">Купить</a>
        <p class="product__price">от ${price} р.</p>
      </div>
    </div>
  </article>
`
