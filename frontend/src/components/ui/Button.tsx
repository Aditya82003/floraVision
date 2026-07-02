import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'ghost' | 'solid' | 'icon'

const base =
  'inline-flex items-center justify-center gap-2  leading-none whitespace-nowrap cursor-pointer transition-colors active:translate-y-px cursor-pointer hover:text-black'

const variants: Record<Variant, string> = {

  ghost:
    'rounded-xl border-2 border-white px-[1.45em] py-[0.6em]  hover:bg-white hover:text-forest',

  solid:
    'rounded-lg border-2 border-white bg-white px-[1.4em] py-[0.55em] text-cta font-bold text-forest-deep hover:border-accent hover:bg-accent',

  icon: 'size-[2.35em] rounded-xl border-2 border-white text-body text-white hover:bg-white hover:text-forest',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children?: ReactNode
}

export function Button({
  variant = 'ghost',
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[base, variants[variant], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
