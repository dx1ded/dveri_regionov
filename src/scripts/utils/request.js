const requestUrl = `${location.origin}/api`

export const request = (currentUrl, settings = {}) => {
  return fetch(`${requestUrl}${currentUrl}`, settings)
}
