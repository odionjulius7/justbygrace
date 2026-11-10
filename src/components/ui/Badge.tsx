import React from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'champagne' | 'outline'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className,
}) => {
  const variants = {
    gold: 'bg-[#C5A059]/15 text-[#8F6A1E] border border-[#C5A059]/30',
    champagne: 'bg-[#F2ECE1] text-[#594E3F] border border-[#E3D8C6]',
    outline: 'border border-[#C5A059]/50 text-[#8F6A1E] bg-transparent',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
