import { CarouselSlideProps } from '@/types/carousel.types'
import { FC } from 'react'

export const CarouselSlide: FC<CarouselSlideProps> = ({
  slide,
  index,
  currentSlide,
}) => {
  const isActive = index === currentSlide

  return (
    <div
      className={`relative w-full top-0 left-0 transition-all duration-500 ${
        isActive ? 'visible' : 'hidden'
      }`}
    >
      <div className="w-full h-full min-h-[300px]">
        <img
          src={slide.imageUrl}
          alt={slide.description}
          className="rounded-sm w-full h-[600px] object-cover"
        />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full absolute bottom-0 text-center bg-black/80 text-white p-4 shadow-2xl">
          <p>{slide.description}</p>
        </div>
      </div>
    </div>
  )
}
