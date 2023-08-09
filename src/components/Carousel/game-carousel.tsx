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
    <div className="max-w-[1200px] mx-auto">
      <img className="w-full" src={screenshots[currentSlide].image} alt="" />
      <div className="flex overflow-x-auto gap-2 p-2 items-center">
        {screenshots?.map((screenshot, index) => (
          <button
            data-active={isActive(index)}
            onClick={() => goToSlide(index)}
            type="button"
            className="data-[active=true]:ring-4 rounded-sm"
          >
            <img
              className="rounded-sm"
              key={index}
              width={150}
              src={screenshot.image}
              alt=""
            />
          </button>
        ))}
      </div>
    </div>
  )
}
