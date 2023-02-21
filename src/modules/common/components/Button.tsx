import type { ReactNode, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement> {
  children?: string | ReactNode;
}

export default function Button({
  children,
  type = 'button',
  className,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`text-white font-mochiy h-[45px] flex items-center justify-center bg-shiba-blue rounded-[6px] px-6 shadow-[6px_6px_0_0_rgb(0,0,0,1)] transition-all duration-100 hover:shadow-[4px_4px_0_0_rgb(0,0,0,1)] hover:scale-[0.95] disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  )
}
