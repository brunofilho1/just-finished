import { api } from '@/api/api'
import {
  GameAchievements,
  GameById,
  GameScreenshots,
  GamesRequest,
} from '@/types/games.type'

const apiKey = `?token&key=${process.env.RAWG_API_KEY}`

export async function getGames(): Promise<GamesRequest> {
  const res = await api(`/games${apiKey}`)
  return await res.data
}

export async function getGameById(gameId: string | number): Promise<GameById> {
  const res = await api(`/games/${gameId}${apiKey}`)
  return await res.data
}

export async function getGameScreenshotsById(
  gameId: string | number
): Promise<GameScreenshots> {
  const res = await api(`/games/${gameId}/screenshots${apiKey}`)
  return await res.data
}

export async function getGameAchievementsById(
  gameId: string | number
): Promise<GameAchievements> {
  const res = await api(`/games/${gameId}/achievements${apiKey}`)
  return await res.data
}
