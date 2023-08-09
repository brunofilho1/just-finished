'use client'

import { Game } from '@/types/games.type'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type CarouselProps = {
  autoSlideDuration?: number
  games: Game[]
}

export const Carousel = ({
  autoSlideDuration = 15000,
  games,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const { push } = useRouter()

  useEffect(() => {
    const timer = setInterval(goToNextSlide, autoSlideDuration)

    return () => clearInterval(timer)
  }, [currentSlide])

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % games.length)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? games.length - 1 : prevSlide - 1
    )
  }

  const handleOpenGame = (gameId: number, gameSlug: string) => {
    push(`/games/${gameSlug}?id=${gameId}`)
  }

  const isActive = (index: number) => {
    return index === currentSlide
  }

  return (
    <div className="relative max-w-[1200px] max-h-[600px] mx-auto m-8">
      {games.map((game: any, index: number) => (
        <button
          key={game.id}
          className={`relative w-full top-0 left-0 transition-all duration-500 ${
            isActive(index) ? 'visible' : 'hidden'
          }`}
          onClick={() => handleOpenGame(game.id, game.slug)}
        >
          <div className="w-full h-full min-h-[300px]">
            <img
              src={game.background_image}
              alt={game.name}
              className="rounded-sm w-[1080px] h-[600px] object-cover"
            />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full absolute bottom-0 text-center bg-black/80 text-white p-4 shadow-2xl">
              <p>{game.name}</p>
            </div>
          </div>
        </button>
      ))}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4">
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
