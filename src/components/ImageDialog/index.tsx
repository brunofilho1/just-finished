import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ReactNode } from 'react'

interface ImageDialogProps {
  children: ReactNode
  src: string
}

export function ImageDialog({ children, src }: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0">
        <img src={src} alt="Imagem" className="w-full h-full" />
      </DialogContent>
    </Dialog>
  )
}
