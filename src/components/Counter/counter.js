export const counterMarkup = (defaultValue = 0, step = 1, min = 0) => `
  <div class="counter">
    <input
      type="number"
      class="counter__display"
      value="${defaultValue}"
      min="${min}"
      max="99"
      step="${step}"
      data-multiplier
    >
    <input
      type="button"
      class="counter__action counter__action--decrement btn-reset"
      value="-"
      aria-label="Вычесть одну штуку"
    >
    <input
      type="button"
      class="counter__action counter__action--increment btn-reset"
      value="+"
      aria-label="Добавить одну штуку"
    >
  </div>
`

export function initializeCounters(...additionalHandlers) {
  const counters = document.querySelectorAll(".counter")

  counters.forEach((container) => {
    const counter = container.querySelector(".counter__display")
    const actions = {
      "-" : counter.stepDown.bind(counter),
      "+" : counter.stepUp.bind(counter)
    }

    const increment = container.querySelector(".counter__action--increment")
    const decrement = container.querySelector(".counter__action--decrement")

    counter.addEventListener("input", changeHandler)

    ;[increment, decrement]
      .forEach((button) => {
        button.addEventListener("click", ({ target }) => {
          const action = target.value
  
          actions[action]()
        })
      })
    
    if (additionalHandlers) {
      additionalHandlers.forEach((handler) => {
        counter.addEventListener("input", handler)
        increment.addEventListener("click", handler)
        decrement.addEventListener("click", handler)
      })
    }
  })
}

function changeHandler(event) {
  const value = event.target.value
  const minValue = event.target.min

  if (value < 0) event.target.value = 0
  else if (value > 99) event.target.value = 99
  else if (value === "") event.target.value = minValue
}
