import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ReactNode, useState } from 'react'

interface ImageDialogProps {
  children: ReactNode
  src: string
}

export function ImageDialog({ children, src }: ImageDialogProps) {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [showZoom, setShowZoom] = useState(false)
  const zoomFactor = 10

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - left) / width
    const y = (event.clientY - top) / height
    setZoomPosition({ x, y })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0">
        <img src={src} alt="Imagem" className="w-full h-full" />
      </DialogContent>
    </Dialog>
  )
}
