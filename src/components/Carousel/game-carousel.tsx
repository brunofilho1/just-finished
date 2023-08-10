'use client'

import { useEffect, useState } from 'react'

type CarouselProps = {
  autoSlideDuration?: number
  screenshots: {
    image: string
    hidden: boolean
  }[]
}

export const GameCarousel = ({
  autoSlideDuration = 15000,
  screenshots,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(goToNextSlide, autoSlideDuration)

    return () => clearInterval(timer)
  }, [currentSlide])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % screenshots.length)
  }

  const isActive = (index: number) => {
    return index === currentSlide
  }

  return (
    <div className="flex flex-col max-w-[1200px] w-full mx-auto">
      <div className="min-h-[350px] sm:w-full max-h-[600px] h-[0] sm:h-full relative">
        <div className="w-full h-0 pb-[56.25%]">
          <img
            className="object-cover absolute top-0 left-0 w-full h-full"
            src={screenshots[currentSlide].image}
            alt=""
          />
        </div>
      </div>

      <div className="flex overflow-x-scroll overflow-y-hidden gap-2 px-2 py-4 items-center">
        {screenshots?.map((screenshot, index) => (
          <button
            key={index}
            data-active={isActive(index)}
            onClick={() => goToSlide(index)}
            type="button"
            className="data-[active=true]:ring-4 rounded-sm flex-shrink-0 w-[160px] h-[80px]"
          >
            <img
              className="rounded-sm object-cover w-full h-full"
              src={screenshot.image}
              alt=""
            />
          </button>
        ))}
      </div>
    </div>
  )
}
