import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'
import { SparklesPreview } from './ui/SparklesPreview'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 '>
      <div>
        <Spotlight className='-top40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white'/>
        <Spotlight className='-top-10 left-full h-[80vh] w-[50vw] ' fill='purple'/>
        <Spotlight className='-top-28 -left-90 h-[80vh] w-[50vw] ' fill='blue'/>
      </div>


      <SparklesPreview/>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Uday Kanwar's Portfolio
            </h2>
        </div>
      </div>

    </div> 
  )
}

export default Hero