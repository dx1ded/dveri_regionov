export const getLastSegment = () => {
  return `/${location.pathname.split("/").pop()}`
}
