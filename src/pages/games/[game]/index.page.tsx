import { Button } from '@/components/ui/button'
import { getGameById, getGameScreenshotsById } from '@/services/games.service'
import { GameById, GameScreenshots } from '@/types/games.type'
import {
  Calendar,
  Clock,
  EyeOff,
  Globe,
  MoreHorizontal,
  Play,
  Plus,
  Star,
} from 'lucide-react'
import { GetServerSideProps } from 'next'

interface GameProps {
  game: GameById
  screenshots: GameScreenshots
}

export default function Game({ game, screenshots }: GameProps) {
  return (
    <div className="flex max-w-[90%] mx-auto flex-col gap-4">
      <h1 className="text-4xl">{game.name}</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="w-full md:w-[65%] flex flex-col gap-2 bg-gray-800">
          <img className="w-full" src={game.background_image} alt="" />
          <div className="flex overflow-x-auto gap-2 items-center">
            {screenshots?.results.map((screenshot, index) => (
              <img key={index} width={100} src={screenshot.image} alt="" />
            ))}
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl">Your Stats</h1>
              <Button variant="outline" size="icon">
                <MoreHorizontal size={20} />
              </Button>
            </div>

            <div className="flex justify-between">
              <h2 className="uppercase text-gray-400 hover:text-gray-300 font-thin">
                Actually Status
              </h2>
              <span>Never Played</span>
            </div>

            <div className="flex justify-between">
              <h2 className="uppercase text-gray-400 hover:text-gray-300 font-thin">
                Hours Played
              </h2>
              <span>0h</span>
            </div>

            <div className="flex justify-between">
              <h2 className="uppercase text-gray-400 hover:text-gray-300 font-thin">
                Plataform Played
              </h2>
              <span>PC</span>
            </div>

            <div className="flex gap-4">
              <Button className="flex gap-2">
                <Play size={20} />
                Add to Play
              </Button>
              <Button
                variant="ghost"
                className="flex gap-2 bg-green-500 hover:bg-green-600"
              >
                <Star size={20} />
                Favorite
              </Button>
              <Button variant="outline" className="flex gap-2">
                <Plus size={20} />
                Wish List
              </Button>
              <Button
                title="Hide Game"
                variant="destructive"
                size="icon"
                className="flex gap-2"
              >
                <EyeOff size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[35%] bg-gray-800">
          <img
            className="w-full h-[200px] object-cover"
            src={game.background_image_additional}
            alt=""
          />
          <div className="flex flex-col gap-4 p-4">
            <div
              dangerouslySetInnerHTML={{
                __html: game.description.split('\n').slice(0, 1).join('\n'),
              }}
            />
            <div className="flex items-center gap-2 uppercase text-gray-400 hover:text-gray-300 font-thin">
              <Clock size={20} />
              <span>{game.playtime} hours to beat</span>
            </div>
            <div className="flex items-center gap-2 uppercase text-gray-400 hover:text-gray-300 font-thin">
              <Calendar size={20} />
              <span>{game.released}</span>
            </div>
            <div className="flex items-center gap-2 uppercase text-gray-400 hover:text-gray-300 font-thin">
              <Globe size={20} />
              <a
                className="overflow-hidden flex-nowrap overflow-ellipsis"
                href={game.website}
                target="_blank"
              >
                {game.website}
              </a>
            </div>
            <div className="flex max-w-[30vw] items-center gap-2 overflow-x-scroll">
              {game.platforms.map((platform) => (
                <Button
                  key={platform.platform.id}
                  variant="outline"
                  className="border whitespace-nowrap border-dashed px-2 text-gray-400 hover:text-gray-300 font-thin"
                >
                  {platform.platform.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id, game } = query
  const gameFromApi = await getGameById(String(id))
  const gameScreenshots = await getGameScreenshotsById(String(id))

  return {
    props: {
      game: gameFromApi,
      screenshots: gameScreenshots,
    },
  }
}