import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
  return (
    <div className="text-center text-3xl justify-center mt-10 mb-10">
      <TextGenerateEffect
        words="Hello."
        />
    </div>
  )
}

export default Hero
