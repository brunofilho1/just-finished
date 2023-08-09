import {
  Tooltip as RadixTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ReactNode } from 'react'

interface TooltipProps {
  children: ReactNode
  text: string
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export function Tooltip({ children, text, side = 'top' }: TooltipProps) {
  return (
    <TooltipProvider>
      <RadixTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>{text}</TooltipContent>
      </RadixTooltip>
    </TooltipProvider>
  )
}
