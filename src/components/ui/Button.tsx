import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../utils/cn'

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full tracking-wide disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-white shadow-md hover:shadow-lg hover:brightness-105 focus:ring-[#D4AF37]',
    secondary:
      'bg-[#EDE6D6] text-[#3D342B] hover:bg-[#E2D8C3] focus:ring-[#AA7C11]',
    outline:
      'border border-[#C5A059] text-[#7A5B18] hover:bg-[#C5A059]/10 focus:ring-[#C5A059]',
    ghost:
      'text-[#5A4F44] hover:bg-[#5A4F44]/10 focus:ring-[#C5A059]',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3.5 tracking-wider uppercase',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
