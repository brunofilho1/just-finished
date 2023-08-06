import axios, { AxiosError, AxiosResponse } from 'axios'

export function setupAPIClient(ctx = undefined) {
  const api = axios.create({
    baseURL: process.env.GAMES_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      console.error(error)
      return Promise.reject(error)
    }
  )

  return api
}

export const api = setupAPIClient()
