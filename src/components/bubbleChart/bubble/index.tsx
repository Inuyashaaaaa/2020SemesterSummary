import React, { FC, useEffect, useRef } from 'react'
import './index.css'

interface IBubbleProps {
  image: string
  rAxis: number
  animationDelay: string
}

const Bubble: FC<IBubbleProps> = (props) => {
  const { image, rAxis, animationDelay }  = props
  const canvas = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const bubbleChart = canvas.current
    if (bubbleChart) {
      bubbleChart.width = rAxis
      bubbleChart.height = rAxis
      const ctx = bubbleChart.getContext('2d')
      const img = new Image()
      const r = rAxis / 2
      img.src = image
      img.onload = () => {
        if (ctx) {
          ctx.arc(r, r, r, 0, 2 * Math.PI)
          ctx.clip()
          ctx.drawImage(img, 0, 0, rAxis, rAxis)
        }
      }
    }
  }, [image, rAxis])
  return (
    <canvas className="avatar_canvas" ref={canvas} style={{animationDelay}}/>
  )
}

export default Bubble