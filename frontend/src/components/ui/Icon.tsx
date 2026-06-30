import type { CSSProperties, SVGProps } from 'react'

export type IconName =
  | 'search'
  | 'bag'
  | 'arrow-right'
  | 'menu'
  | 'play'
  | 'star'
  | 'chevron-down'

type IconProps = {
  name: IconName
  /** Any CSS size; defaults to 1em so the icon tracks the surrounding font-size. */
  size?: number | string
  strokeWidth?: number
  className?: string
  style?: CSSProperties
}

/** Single inline-SVG icon set, recolorable via `currentColor`. */
export function Icon({
  name,
  size = '1em',
  strokeWidth = 2,
  className,
  style,
}: IconProps) {
  const common: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    style,
    'aria-hidden': true,
    focusable: false,
  }

  switch (name) {
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      )
    case 'bag':
      return (
        <svg {...common}>
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...common}>
          <line x1="4" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common}>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      )
    case 'play':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M8 5.5v13l11-6.5-11-6.5z" />
        </svg>
      )
    case 'star':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.9 6.1 21l1.2-6.5L2.5 9.9l6.6-.9L12 2.5z" />
        </svg>
      )
    case 'chevron-down':
      return (
        <svg {...common}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
