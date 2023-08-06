import { CarouselControlsProps } from '@/types/carousel.types'
import { FC } from 'react'

export const CarouselControls: FC<CarouselControlsProps> = ({
  totalSlides,
  currentSlide,
  goToSlide,
  goToNextSlide,
  goToPrevSlide,
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4">
      <button
        onClick={goToPrevSlide}
        className="absolute left-0 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'
            } focus:outline-none`}
          />
        ))}
      </div> */}
      <button
        onClick={goToNextSlide}
        className="absolute right-0 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}
