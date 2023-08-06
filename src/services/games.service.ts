import { api } from '@/api/api'

const apiKey = `?token&key=${process.env.RAWG_API_KEY}`

export async function getGames() {
  const res = await api(`/games${apiKey}`)
  return await res.data
}
