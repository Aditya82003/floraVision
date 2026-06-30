import { Icon } from './Icon'

export function Stars({ value = 5, className }: { value?: number; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className={['inline-flex items-center gap-[0.15em]', className]
        .filter(Boolean)
        .join(' ')}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i))
        return (
          <span key={i} className="relative inline-flex">
            <Icon name="star" className="text-white/20" />
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Icon name="star" className="text-accent" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default Stars
