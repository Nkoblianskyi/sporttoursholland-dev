import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, Users } from 'lucide-react'
import { type Tour, activityLabels } from '@/lib/tours-data'
import { cn } from '@/lib/utils'

const activityColors: Record<Tour['activity'], string> = {
  mtb: 'bg-sticker-green text-foreground',
  motortour: 'bg-accent/20 text-accent-foreground',
  hike: 'bg-primary/20 text-primary',
  racefiets: 'bg-sticker-yellow text-foreground',
  kajak: 'bg-blue-100 text-blue-800',
}

const rotations = ['scrap-rotate-1', 'scrap-rotate-2', 'scrap-rotate-3', 'scrap-rotate-neg', '', 'scrap-rotate-1']

type Props = {
  tour: Tour
  index?: number
  compact?: boolean
}

export function TourCard({ tour, index = 0, compact = false }: Props) {
  const rotation = rotations[index % rotations.length]

  return (
    <Link
      href={`/tours/${tour.id}`}
      className={cn(
        'block group',
        rotation,
        'hover:rotate-0 transition-transform duration-300',
      )}
    >
      <article
        className="bg-card border-2 border-foreground/15 shadow-[3px_3px_0_var(--kraft-dark),5px_5px_12px_rgba(0,0,0,0.12)] overflow-hidden"
      >
        {/* Tape strip */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-5 bg-tape border border-kraft-dark/40 opacity-80 rounded-sm z-10" />
          <div className="relative h-44 overflow-hidden">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover photo-frame group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Tag */}
            {tour.tag && (
              <span className="absolute top-3 right-3 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-sans border border-foreground/20 shadow-[1px_1px_0_var(--ink)] z-10">
                {tour.tag}
              </span>
            )}
          </div>
        </div>

        <div className="p-4">
          {/* Activity badge */}
          <span className={cn('text-xs px-2 py-0.5 font-sans border border-foreground/10', activityColors[tour.activity])}>
            {activityLabels[tour.activity]}
          </span>

          <h3 className="font-serif font-bold text-base mt-2 mb-1 text-foreground leading-tight text-balance group-hover:text-primary transition-colors">
            {tour.title}
          </h3>

          {!compact && (
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
              {tour.shortDescription}
            </p>
          )}

          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-primary" />
              {tour.city}, {tour.country}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={11} className="text-primary" />
              {new Date(tour.dateFrom).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}
            </span>
            {!compact && (
              <span className="flex items-center gap-1">
                <Users size={11} className="text-primary" />
                Max {tour.groupSize}
              </span>
            )}
          </div>

          <div className="mt-3 flex items-center justify-end">
            <span className="text-xs text-primary underline underline-offset-2 group-hover:text-accent transition-colors">
              Bekijk reis →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
