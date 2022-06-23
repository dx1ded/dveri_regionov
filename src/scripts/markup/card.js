import { counterMarkup } from "@cmps/Counter/counter"
import { popupMarkup } from "@cmps/Popup/popup"
import { modalMarkup } from "@cmps/Modal/modal"

import { normalizePrice } from "@/utils/normalizePrice"
import { boxesCount, platbandsCount } from "@/utils/calculateEquipments"

export const productMarkup = (
  {
    articul,
    name,
    stock,
    sale,
    novinka,
    akciya,
    price_rozn,
    model,
    color,
    size,
    canvas_type,
    coverage_type,
    thickness,
    style,
    collection,
    glass,
    packing,
    features,
    box_v1,
    box_v1_price_rozn,
    box_v2,
    box_v2_price_rozn,
    box_v3,
    box_v3_price_rozn,
    box_v4,
    box_v4_price_rozn,
    platband_v1,
    platband_v1_price_rozn,
    platband_v2,
    platband_v2_price_rozn,
    platband_v3,
    platband_v3_price_rozn,
    platband_v4,
    platband_v4_price_rozn,
    feigned_strap_v1,
    feigned_strap_v1_price_rozn,
    dobor_100_v1,
    dobor_100_v1_price_rozn,
    dobor_150_v1,
    dobor_150_v1_price_rozn,
    dobor_200_v1,
    dobor_200_v1_price_rozn,
    brand,
    weight,
    group,
    parent_group,
    part_v1,
    part_v1_value,
    part_v2,
    part_v2_value,
    part_v3,
    part_v3_value,
    part_v4,
    part_v4_value,
    part_v5,
    part_v5_value,
    part_v6,
    part_v6_value,
    part_v7,
    part_v7_value,
    inner_side_color,
    outer_side_color,
    cylinder_lock,
    sealer,
    lever_lock,
    eccentric
  },
  sizes,
  colors,
  glasses,
  innerColors,
  outerColors
) => (`
  ${modalMarkup()}
  <div class="product">
    <div class="product-image">
      <div class="product-image__current">
        <img src="https://dver.com/xml/images/${articul}.jpeg" alt="${name}">
      </div>
      ${colors && colors[0]
        ? `
          <div class="product-image__list">
            ${colors.map((color) => `
              <button
                class="product-image__item btn-reset"
                data-value="${color.color}"
                data-type="color"
              >
                <img src="https://dver.com/xml/images/${color.articul}.jpeg" alt="${color.name}">
              </button>
            `).join("")
            }
          </div>
          `
        : ""
      }
    </div>
    <div class="product__column">
      <p class="product__sku">Артикул: ${articul}</p>
      <h2 class="product__name title title--xs">${name}</h2>
      <div class="product__tags">
        ${sale
          ? `<span class="product__tag product__tag--sales">Распродажа</span>`
          : ""
        }
        ${novinka
          ? `<span class="product__tag product__tag--new">Новое</span>`
          : ""
        }
        ${akciya
          ? `<span class="product__tag product__tag--discounts">Акция</span>`
          : ""
        }
      </div>
      <div class="product-price">
        <div class="product-price__column">
          <small class="product-price__type text text--sm">Розн. цена за полотно</small>
          <h3 class="product-price__count title title--sm">${normalizePrice(price_rozn)} &#8381;</h3>
          <button class="product-price__cta btn-reset btn btn--primary" id="add-to-cart">В корзину</button>
        </div>
        <div class="product-price__column">
          <small class="product-price__type text text--sm">Розн. цена за текущую комплект.</small>
          <h3 class="product-price__count title title--sm" data-price-display></h3>
          <button class="product-price__cta btn-reset btn btn--primary" data-modal-open>Вызов замерщика</button>
        </div>
      </div>
      ${sizes && sizes[0]
        ? `
          <div class="product__sizes">
            <p class="product__label">Размеры:</p>
            <div class="product__wrapper">
              ${sizes.map((currentSize) => `
                <button
                  class="product__size btn-reset btn btn--secondary ${currentSize.size === size ? 'product__size--active' : ''}"
                  data-value="${currentSize.size}"
                  data-type="size"
                >
                  ${currentSize.size}
                </button>
                `).join("")
              }
            </div>
          </div>
          `
        : ""
      }
      ${colors && colors[0]
        ? `
          <div class="product__colors">
            <p class="product__label">Цвета:</p>
            <div class="product__wrapper">
              ${colors.map((currentColor) => `
                <button
                  class="product__color btn-reset ${currentColor.color === color ? 'product__color--active' : ''}"
                  aria-label="${currentColor.name}"
                  data-value="${currentColor.color}"
                  data-type="color"
                >
                  <img src="https://dver.com/xml/colors_images/${currentColor.color.toLowerCase()}.jpg" alt="" aria-hidden="true">
                </button>
                `).join("")
              }
            </div>
          </div>
          `
        : ""
      }
      ${outerColors
        ? `
          <div class="product__colors">
            <p class="product__label">Цвет наружный:</p>
            <div class="product__wrapper">
              ${outerColors.map((currentColor) => `
                <button
                  class="product__color btn-reset ${currentColor.color === outer_side_color ? 'product__color--active' : ''}"
                  aria-label="${currentColor.name}"
                  data-value="${currentColor.color}"
                  data-type="outer_side_color"
                >
                  <img src="https://dver.com/xml/colors_images/${currentColor.color.toLowerCase()}.jpg" alt="" aria-hidden="true">
                </button>
                `).join("")
              }
            </div>
          </div>
          `
        : ""
      }
      ${innerColors
        ? `
          <div class="product__colors">
            <p class="product__label">Цвет внутренний:</p>
            <div class="product__wrapper">
              ${innerColors.map((currentColor) => `
                <button
                  class="product__color btn-reset ${currentColor.color === inner_side_color ? 'product__color--active' : ''}"
                  aria-label="${currentColor.name}"
                  data-value="${currentColor.color}"
                  data-type="inner_side_color"
                >
                  <img src="https://dver.com/xml/colors_images/${currentColor.color.toLowerCase()}.jpg" alt="" aria-hidden="true">
                </button>
                `).join("")
              }
            </div>
          </div>
          `
        : ""
      }
      ${glasses && glasses[0]
        ? `<div class="product__glasses">
            <p class="product__label">Тип стекла:</p>
            <div class="product__wrapper">
              ${glasses.map((currentGlass) => `
                <button
                  class="product__glass btn-reset ${currentGlass.articul === articul ? 'product__glass--active' : ''}"
                  aria-label="${currentGlass.glass}"
                  data-value="${currentGlass.glass}"
                  data-type="glass"
                >
                  <img src="https://dver.com/xml/colors_images/${(currentGlass.model + "_" + currentGlass.glass).toLowerCase()}.jpg" alt="Стекло" aria-hidden="true">
                </button>
                `).join("")
              }
            </div>
          </div>`
        : ""
      }
      <div class="product__info">
        <div class="tabs">
          <button class="tabs__item tabs__item--active text text--md" data-id="description">Описание</button>
          ${box_v1 || box_v2 || box_v3 || box_v4 || platband_v1 ||  platband_v2 || platband_v3 || platband_v4 || feigned_strap_v1 || dobor_100_v1 || dobor_150_v1 || dobor_200_v1 ||  part_v1 || part_v2 ||  part_v3 || part_v4 || part_v5 || part_v6 || part_v7
            ? '<button class="tabs__item text text--md" data-id="equipment">Комплектующие</button>'
            : ''
          }
        </div>
        <table class="product-table active" id="description" data-tab-content>
          <tr class="product-table__row">
            <td class="product-table__data">Артикул:</td>
            <td class="product-table__data">${articul}</td>
          </tr>
          <tr class="product-table__row">
            <td class="product-table__data">Модель:</td>
            <td class="product-table__data">${model}</td>
          </tr>
          ${color
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Цвет:</td>
                <td class="product-table__data">${color}</td>
              </tr>
              `
            : ""
          }
          ${brand
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Бренд:</td>
                <td class="product-table__data">${brand}</td>
              </tr>
              `
            : ""
          }
          ${weight
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Вес:</td>
                <td class="product-table__data">${weight}</td>
              </tr>
              `
            : ""
          }
          ${group
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Группа:</td>
                <td class="product-table__data">${group}</td>
              </tr>
              `
            : ""
          }
          ${parent_group
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Группа 2:</td>
                <td class="product-table__data">${parent_group}</td>
              </tr>
              `
            : ""
          }
          ${canvas_type
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Тип полотна:</td>
                <td class="product-table__data">${canvas_type}</td>
              </tr>
              `
            : ""
          }
          ${coverage_type
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Тип покрытия:</td>
                <td class="product-table__data">${coverage_type}</td>
              </tr>
              `
            : ""
          }
          ${thickness
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Толщина:</td>
                <td class="product-table__data">${thickness}</td>
              </tr>
            `
            : ""
          }
          ${style
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Стиль:</td>
                <td class="product-table__data">${style}</td>
              </tr>
              `
            : ""
          }
          ${glass
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Стекло:</td>
                <td class="product-table__data">${glass}</td>
              </tr>
              `
            : ""
          }
          ${packing
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Упаковка:</td>
                <td class="product-table__data">${packing}</td>
              </tr>
              `
            : ""
          }
          <tr class="product-table__row">
            <td class="product-table__data">Вид номенклатуры:</td>
            <td class="product-table__data">${stock}</td>
          </tr>
          ${features
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Особенности:</td>
                <td class="product-table__data">${features}</td>
              </tr>
              `
            : ""
          }
          ${inner_side_color
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Цвет внутри:</td>
                <td class="product-table__data">${inner_side_color}</td>
              </tr>
              `
            : ""
          }
          ${outer_side_color
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Цвет снаружи:</td>
                <td class="product-table__data">${outer_side_color}</td>
              </tr>
              `
            : ""
          }
          ${cylinder_lock
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Цилиндровый замок:</td>
                <td class="product-table__data">${cylinder_lock}</td>
              </tr>
              `
            : ""
          }
          ${eccentric
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Эксцентрик:</td>
                <td class="product-table__data">${eccentric}</td>
              </tr>
              `
            : ""
          }
          ${sealer
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Уплотнитель:</td>
                <td class="product-table__data">${sealer}</td>
              </tr>
              `
            : ""
          }
          ${lever_lock
            ? `
              <tr class="product-table__row">
                <td class="product-table__data">Сувальдный замок:</td>
                <td class="product-table__data">${lever_lock}</td>
              </tr>
              `
            : ""
          }
        </table>
        <dl class="product-complect" id="equipment" data-tab-content>
          ${[
              {
                description: box_v1,
                price: box_v1_price_rozn
              },
              {
                description: box_v2,
                price: box_v2_price_rozn
              },
              {
                description: box_v3,
                price: box_v3_price_rozn
              },
              {
                description: box_v4,
                price: box_v4_price_rozn
              }
            ].map(({ description, price }) => `
              ${description
                ? `
                  <div class="product-complect__item">
                    <dt class="product-complect__item-name title title--sm">Коробка</dt>
                    <dd class="product-complect__item-description text text--md">
                      ${description} - ${normalizePrice(price)} &#8381;
                    </dd>
                  </div>
                  `
                : ""
              }
            `).join("")
          }
          ${[
              {
                description: platband_v1,
                price: platband_v1_price_rozn
              },
              {
                description: platband_v2,
                price: platband_v2_price_rozn
              },
              {
                description: platband_v3,
                price: platband_v3_price_rozn
              },
              {
                description: platband_v4,
                price: platband_v4_price_rozn
              }
            ].map(({ description, price }) => `
              ${description
                ? `
                  <div class="product-complect__item">
                    <dt class="product-complect__item-name title title--sm">Наличник</dt>
                    <dd class="product-complect__item-description text text--md">
                      ${description} - ${normalizePrice(price)} &#8381;
                    </dd>
                  </div>
                  `
                : ""
              }
            `).join("")
          }
          ${feigned_strap_v1
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">Притворная планка</dt>
                <dd class="product-complect__item-description text text--md">
                  ${feigned_strap_v1} - ${normalizePrice(feigned_strap_v1_price_rozn)} &#8381;
                </dd>
              </div>
              `
            : ""
          }
          ${dobor_100_v1
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">Добор</dt>
                <dd class="product-complect__item-description text text--md">
                  ${dobor_100_v1} - ${normalizePrice(dobor_100_v1_price_rozn)} &#8381;
                </dd>
              </div>
              `
            : ""
          }
          ${dobor_150_v1
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">Добор</dt>
                <dd class="product-complect__item-description text text--md">
                  ${dobor_150_v1} - ${normalizePrice(dobor_150_v1_price_rozn)} &#8381;
                </dd>
              </div>
              `
            : ""
          }
          ${dobor_200_v1
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">Добор</dt>
                <dd class="product-complect__item-description text text--md">
                  ${dobor_200_v1} - ${normalizePrice(dobor_200_v1_price_rozn)} &#8381;
                </dd>
              </div>
              `
            : ""
          }
          ${part_v1
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">${part_v1}</dt>
                <dd class="product-complect__item-description text text--md">
                  ${part_v1_value} шт.
                </dd>
              </div>
              `
            : ""
          }
          ${part_v2
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">${part_v2}</dt>
                <dd class="product-complect__item-description text text--md">
                  ${part_v2_value} шт.
                </dd>
              </div>
              `
            : ""
          }
          ${part_v3
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">${part_v3}</dt>
                <dd class="product-complect__item-description text text--md">
                  ${part_v3_value} шт.
                </dd>
              </div>
              `
            : ""
          }
          ${part_v4
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">${part_v4}</dt>
                <dd class="product-complect__item-description text text--md">
                  ${part_v4_value} шт.
                </dd>
              </div>
              `
            : ""
          }
          ${part_v5
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">${part_v5}</dt>
                <dd class="product-complect__item-description text text--md">
                  ${part_v5_value} шт.
                </dd>
              </div>
              `
            : ""
          }
          ${part_v6
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">${part_v6}</dt>
                <dd class="product-complect__item-description text text--md">
                  ${part_v6_value} шт.
                </dd>
              </div>
              `
            : ""
          }
          ${part_v7
            ? `
              <div class="product-complect__item">
                <dt class="product-complect__item-name title title--sm">${part_v7}</dt>
                <dd class="product-complect__item-description text text--md">
                  ${part_v7_value} шт.
                </dd>
              </div>
              `
            : ""
          }
        </dl>
      </div>
    </div>
    <div class="product__equipments">
      <div class="product-equipment">
        <div class="product-equipment__top">
          <h4 class="product-equipment__name title title--xs">Полотно</h4>
        </div>
        <div class="product-equipment__bottom">
          <p class="product-equipment__price text text--md" data-price="${price_rozn}">${normalizePrice(price_rozn)} &#8381;</p>
          ${counterMarkup(1, 1, 1)}
        </div>
      </div>
      ${[
          {
            description: box_v1,
            price: box_v1_price_rozn
          },
          {
            description: box_v2,
            price: box_v2_price_rozn
          },
          {
            description: box_v3,
            price: box_v3_price_rozn
          },
          {
            description: box_v4,
            price: box_v4_price_rozn
          }
        ].map(({ description, price }, index) => `
          ${description
            ? `
              <div class="product-equipment">
                <div class="product-equipment__top">
                  <h4 class="product-equipment__name title title--xs">Коробка</h4>
                  ${popupMarkup(description)}
                </div>
                <div class="product-equipment__bottom">
                  <p class="product-equipment__price text text--md" data-price="${price}">${normalizePrice(price)} &#8381;</p>
                  ${counterMarkup(!index ? boxesCount(collection) : 0, 0.5)}
                </div>
              </div>
              `
            : ""
          }
        `).join("")
      }
      ${[
          {
            description: platband_v1,
            price: platband_v1_price_rozn
          },
          {
            description: platband_v2,
            price: platband_v2_price_rozn
          },
          {
            description: platband_v3,
            price: platband_v3_price_rozn
          },
          {
            description: platband_v4,
            price: platband_v4_price_rozn
          }
        ].map(({ description, price }, index) => `
          ${description
            ? `
              <div class="product-equipment">
                <div class="product-equipment__top">
                  <h4 class="product-equipment__name title title--xs">Наличник</h4>
                  ${popupMarkup(description)}
                </div>
                <div class="product-equipment__bottom">
                  <p class="product-equipment__price text text--md" data-price="${price}">${normalizePrice(price)} &#8381;</p>
                  ${counterMarkup(!index ? platbandsCount(collection) : 0)}
                </div>
              </div>
              `
            : ""
          }
        `).join("")
      } 
      ${feigned_strap_v1
        ? `
          <div class="product-equipment">
            <div class="product-equipment__top">
              <h4 class="product-equipment__name title title--xs">Притворная планка</h4>
              ${popupMarkup(feigned_strap_v1)}
            </div>
            <div class="product-equipment__bottom">
              <p class="product-equipment__price text text--md" data-price="${feigned_strap_v1_price_rozn}">${normalizePrice(feigned_strap_v1_price_rozn)} &#8381;</p>
              ${counterMarkup()}
            </div>
          </div>
          `
        : ""
      }
      ${dobor_100_v1
        ? `
          <div class="product-equipment">
            <div class="product-equipment__top">
              <h4 class="product-equipment__name title title--xs">Добор</h4>
              ${popupMarkup(dobor_100_v1)}
            </div>
            <div class="product-equipment__bottom">
              <p class="product-equipment__price text text--md" data-price="${dobor_100_v1_price_rozn}">${normalizePrice(dobor_100_v1_price_rozn)} &#8381;</p>
              ${counterMarkup()}
            </div>
          </div>
          `
        : ""
      }
      ${dobor_150_v1
        ? `
          <div class="product-equipment">
            <div class="product-equipment__top">
              <h4 class="product-equipment__name title title--xs">Добор</h4>
              ${popupMarkup(dobor_150_v1)}
            </div>
            <div class="product-equipment__bottom">
              <p class="product-equipment__price text text--md" data-price="${dobor_150_v1_price_rozn}">${normalizePrice(dobor_150_v1_price_rozn)} &#8381;</p>
              ${counterMarkup()}
            </div>
          </div>
          `
        : ""
      }
      ${dobor_200_v1
        ? `
          <div class="product-equipment">
            <div class="product-equipment__top">
              <h4 class="product-equipment__name title title--xs">Добор</h4>
              ${popupMarkup(dobor_200_v1)}
            </div>
            <div class="product-equipment__bottom">
              <p class="product-equipment__price text text--md" data-price="${dobor_200_v1_price_rozn}">${normalizePrice(dobor_200_v1_price_rozn)} &#8381;</p>
              ${counterMarkup()}
            </div>
          </div>
          `
        : ""
      }
    </div>
  </div>
`)
