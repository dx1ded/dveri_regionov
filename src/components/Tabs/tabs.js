const activeTabClassName = "tabs__item--active"

function changeActiveTab() {
  window.scrollTo({ top: 0 })

  const activeTab = document.querySelector(`.${activeTabClassName}`)
  const futureActiveTab = document.querySelector(`a[href='${location.hash}']`)

  if (activeTab) {
    activeTab.classList.remove(activeTabClassName)
  }

  futureActiveTab.classList.add(activeTabClassName)
}

window.addEventListener("hashchange", changeActiveTab)

changeActiveTab()
