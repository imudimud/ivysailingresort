'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

interface LazyImageProps {
  src: string
  lowQualitySrc: string
  highQualitySrc: string
  alt: string
  width: number
  height: number
  className?: string
}

export function LazyImage({
  src,
  lowQualitySrc,
  highQualitySrc,
  alt,
  width,
  height,
  className = '',
}: LazyImageProps) {
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc)
  const [isHighQuality, setIsHighQuality] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = highQualitySrc
  }, [highQualitySrc])

  const toggleQuality = () => {
    setIsHighQuality(!isHighQuality)
    setCurrentSrc(isHighQuality ? lowQualitySrc : highQualitySrc)
  }

  return (
    <div className="relative">
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={`lazy-image ${className}`}
        loading="lazy"
      />
      <Button
        variant="outline"
        size="sm"
        className="absolute bottom-4 right-4 bg-white/80 hover:bg-white"
        onClick={toggleQuality}
      >
        {isHighQuality ? 'Standard Quality' : 'High Quality'}
      </Button>
    </div>
  )
}

