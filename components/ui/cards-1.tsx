'use client'

import * as React from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string
  title: string
  category: string
  description?: string
  price?: string
  href: string
  onSave?: () => void
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, imageUrl, title, category, description, price, href, onSave, ...props }, ref) => {
    const [saved, setSaved] = React.useState(false)

    const handleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      setSaved((current) => !current)
      onSave?.()
    }

    return (
      <div
        ref={ref}
        className={cn(
          'group relative block overflow-hidden rounded-3xl border border-border bg-card text-card-foreground transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10',
          className,
        )}
        {...props}
      >
        <a href={href} aria-label={`View ${title}`}>
          <div className="aspect-[4/3] overflow-hidden bg-secondary">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-2 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight">{title}</h3>
              {price ? <span className="shrink-0 text-sm font-semibold text-accent">{price}</span> : null}
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{category}</p>
            {description ? <p className="text-sm leading-6 text-muted-foreground">{description}</p> : null}
          </div>
        </a>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="absolute right-4 top-4 rounded-full bg-background/85 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
          onClick={handleFavorite}
          aria-label={saved ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
          aria-pressed={saved}
        >
          <Heart className={cn('transition-colors', saved && 'fill-accent text-accent')} data-icon="inline-start" />
        </Button>
      </div>
    )
  },
)

ProductCard.displayName = 'ProductCard'

export { ProductCard }
export type { ProductCardProps }
