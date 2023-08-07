'use client'

import { Game } from '@/types/games.type'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CarouselControls } from './carousel-controls'

// export const carouselData: Slide[] = [
//   {
//     id: 1,
//     imageUrl: 'https://i.redd.it/sb9gyoyrt3uy.jpg',
//     description: 'The Witcher 3',
//   },
//   {
//     id: 2,
//     imageUrl: 'https://images5.alphacoders.com/917/917971.jpg',
//     description: 'Red Dead Redemption 2',
//   },
//   {
//     id: 3,
//     imageUrl:
//       'https://mesaderpg.com.br/wp-content/uploads/2020/10/baldurs-gate-3-poster.jpg',
//     description: "Baldur's Gate 3",
//   },
// ]

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

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
      <CarouselControls
        totalSlides={games.length}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
    </div>
  )
}
