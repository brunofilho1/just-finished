import { Tooltip } from '@/components/Tooltip'
import { Button } from '@/components/ui/button'
import { GalleryThumbnails, Grid } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface ToggleViewProps {
  onClick: Dispatch<SetStateAction<boolean>>
  isGrid: boolean
}

export function ToggleView({ onClick, isGrid }: ToggleViewProps) {
  return (
    <Tooltip text={`Toggle to ${isGrid ? 'Cards' : 'Grid'}`} side="left">
      <Button
        onClick={() => onClick(!isGrid)}
        variant="outline"
        size="icon"
        className="group"
      >
        <GalleryThumbnails
          data-grid={isGrid}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all data-[grid=true]:-rotate-90 data-[grid=true]:scale-0"
        />
        <Grid
          data-grid={isGrid}
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all data-[grid=true]:rotate-0 data-[grid=true]:scale-100"
        />
        <span className="sr-only">Toggle List View</span>
      </Button>
    </Tooltip>
  )
}
