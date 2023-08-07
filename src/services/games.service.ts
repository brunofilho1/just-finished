import { api } from '@/api/api'

const apiKey = `?token&key=${process.env.RAWG_API_KEY}`

export async function getGames() {
  const res = await api(`/games${apiKey}`)
  return await res.data
}

export async function getGameById(gameId: string | number) {
  const res = await api(`/games/${gameId}${apiKey}`)
  return await res.data
}
