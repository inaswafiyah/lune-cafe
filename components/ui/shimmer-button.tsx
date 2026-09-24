import React, { CSSProperties } from 'react'

import { cn } from '@/lib/utils'

export interface ShimmerButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

const ShimmerButton = React.forwardRef<HTMLAnchorElement, ShimmerButtonProps>(
  ({ shimmerColor = '#d8e0c1', shimmerSize = '0.05em', shimmerDuration = '5s', borderRadius = '100px', background = 'oklch(0.52 0.075 130)', className, children, ...props }, ref) => (
    <a
      style={{ '--spread': '90deg', '--shimmer-color': shimmerColor, '--radius': borderRadius, '--speed': shimmerDuration, '--cut': shimmerSize, '--bg': background } as CSSProperties}
      className={cn(
        'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/15 px-6 py-3 text-sm font-semibold text-accent-foreground',
        'transform-gpu transition-transform duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-px',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="-z-30 absolute inset-0 overflow-visible blur-[2px] [container-type:size]" aria-hidden="true">
        <span className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1]">
          <span className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </span>
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-[var(--radius)] shadow-[inset_0_-8px_10px_#ffffff12] transition-all duration-300 group-hover:shadow-[inset_0_-6px_10px_#ffffff25]" aria-hidden="true" />
      <span className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" aria-hidden="true" />
    </a>
  ),
)

ShimmerButton.displayName = 'ShimmerButton'

export { ShimmerButton }
