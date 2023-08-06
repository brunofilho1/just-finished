import { Carousel } from '@/components/Carousel'
import { getGames } from '@/services/games.service'
import { Game, GamesRequest } from '@/types/games.type'
import { GetServerSideProps } from 'next'

interface GamesProps {
  games: Game[]
}

export default function Home({ games }: GamesProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:text-gray-100 dark:bg-gray-900">
      <div className="flex justify-between items-center w-full max-w-5xl font-mono text-sm lg:flex">
        <img src="/logo/svg/logo.svg" width={350} alt="" />
        <span className="flex-wrap w-60">
          Find games, mark some to play and list your favorite finished games!
        </span>
      </div>

      <Carousel games={games} />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/games"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Your Games{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See the list of games you've been playing lately
          </p>
        </a>

        <a
          href="/lists"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Lists{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            List of games by category, facilitating your search for something
            new
          </p>
        </a>

        <a
          href="/news"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            News{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Latest news from the disturbing world of video games
          </p>
        </a>

        <a
          href="/recommended"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Recommended{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Games of the week recommendation by site users
          </p>
        </a>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const gamesFromApi: GamesRequest = await getGames()

  return {
    props: {
      games: gamesFromApi.results,
    },
  }
}
