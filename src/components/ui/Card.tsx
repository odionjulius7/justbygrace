import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../utils/cn'

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  hoverEffect?: boolean
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.3 } } : undefined}
      className={cn(
        'bg-white/80 backdrop-blur-md rounded-2xl border border-[#EBE3D5] p-6 shadow-sm transition-shadow hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
