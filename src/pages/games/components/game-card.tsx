import { Button } from '@/components/ui/button'
import { Game } from '@/types/games.type'
import { Play, Plus, Star } from 'lucide-react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface GameCardProps {
  game: Game
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  const { push } = useRouter()

  return (
    <div
      className="bg-background hover:bg-muted transition-colors cursor-pointer
      shadow-md border border-border rounded-sm p-4 w-64 flex flex-col gap-4
      justify-between"
    >
      <div onClick={() => push(`/games/${game.slug}?id=${game.id}`)}>
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-32 object-cover rounded-sm mb-2"
        />
        <h2 className="text-xl font-semibold">{game.name}</h2>
        <p className="text-gray-400">
          {new Date(game.released).toLocaleDateString()}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">{game.reviews_text_count} reviews</p>
          <div>
            <span className="text-yellow-500 mr-1">&#9733;</span>
            <span>{game.rating}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="flex gap-2">
            <Play size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="group hover:bg-green-500"
          >
            <Star className="group-hover:fill-white text-white" size={20} />
          </Button>
        </div>
        <Button variant="outline" size="icon" className="flex gap-2">
          <Plus size={20} />
        </Button>
      </div>
    </div>
  )
}

export default GameCard
