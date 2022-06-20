const requestUrl = "http://localhost:5000"

export const request = (currentUrl, settings = {}) => {
  return fetch(`${requestUrl}${currentUrl}`, settings)
}
