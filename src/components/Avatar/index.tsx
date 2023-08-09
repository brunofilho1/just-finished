import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadAvatar,
} from '@/components/ui/avatar'

interface AvatarProps {
  src?: string
}

export function Avatar({ src }: AvatarProps) {
  return (
    <ShadAvatar>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </ShadAvatar>
  )
}
