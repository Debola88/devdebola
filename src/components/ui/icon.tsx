import React, { ReactNode } from 'react'

interface IconProps {
  icon: ReactNode;
  className?: string;
}

const IconComponent = ({ icon, className}: IconProps) => {
  return (
       <div className={`${className ?? 'bg-white text-black'} relative rounded-full max-sm:h-10 max-sm:w-10 h-16 w-16`}>
            <span className='absolute flex items-center justify-center w-full h-full'>{icon}</span>
        </div> 
  )
}

export default IconComponent