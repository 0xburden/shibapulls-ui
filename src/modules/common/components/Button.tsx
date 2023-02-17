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
      className={`text-white font-mochiy h-[45px] flex items-center justify-center bg-shiba-blue rounded-[6px] px-6 transition-100 hover:scale-[0.95] ${className}`}
    >
      {children}
    </button>
  )
}
