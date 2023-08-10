import { Trophy } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Achievement } from '@/types/games.type'
import { ReactElement } from 'react'

interface AchievementHoverCardProps {
  children: ReactElement
  achievement: Achievement
}

export function AchievementHoverCard({
  children,
  achievement,
}: AchievementHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage className="object-cover" src={achievement.image} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{achievement.name}</h4>
            <p className="text-sm">{achievement.description}</p>
            <div className="flex items-center pt-2">
              <Trophy className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">
                Achieved by {achievement.percent}% of players
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
