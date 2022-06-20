export const boxesCount = (collection) => (
  collection.includes("HGX") ? 1 :
  collection.includes("INVISIBLE") ? 1 : 2.5
)

export const platbandsCount = (collection) => (
  collection.includes("HGX") ? 5 :
  collection.includes("INVISIBLE") ? 0 : 5
)
