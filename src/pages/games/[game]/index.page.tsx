import { getGameById } from '@/services/games.service'
import { GameById } from '@/types/games.type'
import { GetServerSideProps } from 'next'

interface GameProps {
  game: GameById
}

export default function Game({ game }: GameProps) {
  return (
    <div className="flex justify-between p-4">
      <div className="w-[50vw] flex flex-col gap-4">
        <h1 className="text-4xl">{game.name}</h1>
        <img width={600} src={game.background_image} alt="" />
      </div>
      <div className="w-[50vw]">
        <img width={300} src={game.background_image_additional} alt="" />
        <div dangerouslySetInnerHTML={{ __html: game.description }} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id, game } = query
  const gameFromApi: GameById = await getGameById(String(id))

  return {
    props: {
      game: gameFromApi,
    },
  }
}
