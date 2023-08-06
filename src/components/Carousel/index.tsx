'use client'

import { Slide } from '@/types/carousel.types'
import { useEffect, useState } from 'react'
import { CarouselControls } from './carousel-controls'
import { CarouselSlide } from './carousel-slide'

export const carouselData: Slide[] = [
  {
    id: 1,
    imageUrl: 'https://i.redd.it/sb9gyoyrt3uy.jpg',
    description: 'The Witcher 3',
  },
  {
    id: 2,
    imageUrl: 'https://images5.alphacoders.com/917/917971.jpg',
    description: 'Red Dead Redemption 2',
  },
  {
    id: 3,
    imageUrl:
      'https://mesaderpg.com.br/wp-content/uploads/2020/10/baldurs-gate-3-poster.jpg',
    description: "Baldur's Gate 3",
  },
]

type CarouselProps = {
  autoSlideDuration?: number
}

export const Carousel = ({ autoSlideDuration = 15000 }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(goToNextSlide, autoSlideDuration)

    return () => clearInterval(timer)
  }, [currentSlide])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1
    )
  }

  return (
    <div className="relative max-w-[1200px] max-h-[600px] mx-auto m-8">
      {carouselData.map((slide, index) => (
        <CarouselSlide
          key={slide.id}
          slide={slide}
          index={index}
          currentSlide={currentSlide}
        />
      ))}
      <CarouselControls
        totalSlides={carouselData.length}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
    </div>
  )
}
