export interface Slide {
  id: number
  imageUrl: string
  description: string
}

export interface CarouselSlideProps {
  slide: Slide
  index: number
  currentSlide: number
}

export interface CarouselControlsProps {
  totalSlides: number
  currentSlide: number
  goToSlide: (index: number) => void
  goToNextSlide: () => void
  goToPrevSlide: () => void
}
