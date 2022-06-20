const activeTabClassName = "tabs__item--active"
const activeContentClassName = "active"

export function initializeTabs() {
  const tabs = document.querySelectorAll(".tabs__item")

  checkActiveHash()

  tabs.forEach((tab) => tab.addEventListener(
    "click",
    (event) => changeActiveTab(event.target)
  ))
}

function changeActiveTab(tab) {
  const id = tab.dataset.id
  const content = document.querySelector(`#${id}`)

  // Change active tab

  const currentActiveTab = document.querySelector(`.${activeTabClassName}`)

  if (currentActiveTab) {
    currentActiveTab.classList.remove(activeTabClassName)
  }

  tab.classList.add(activeTabClassName)

  // Change active section

  const currentActiveContent = document.querySelector(`[id].${activeContentClassName}`)

  if (currentActiveContent) {
    currentActiveContent.classList.remove(activeContentClassName)
  }

  content.classList.add(activeContentClassName)
}

function checkActiveHash() {
  const pageHash = location.hash.substring(1)

  if (pageHash) {
    changeActiveTab(
      document.querySelector(`[data-id=${pageHash}]`)
    )
  }
}
