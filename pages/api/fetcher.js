// fetcher for SWR

export const fetcher = (apiUrl) =>
  fetch(apiUrl).then((res) => {
    return res.json()
  })
