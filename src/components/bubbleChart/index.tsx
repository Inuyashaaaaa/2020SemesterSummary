import React, { FC, CSSProperties } from 'react'
import './index.css'
import Bubble from './bubble'

interface IBubbleChartProps {
  images: string[]
  width: number
  height: number
  padding?: number
}

const BubbleChart: FC<IBubbleChartProps> = (props) => {
  const { images, width, height, padding } = props
  const renderBubble = () => {
    const len = images.length
    const min = Math.min(width, height)
    let bubbleWidth = Math.sqrt(min * min / len)
    const xAxis: number[] = []
    const yAxis: number[] = []
    const rAxis: number[] = []
    const bubbleAvailable = (x: number, y: number, r: number) => {
      const len = xAxis.length
      for (let i = 0; i < len; i++) {
        const d = Math.sqrt((xAxis[i] - x) ** 2 + (yAxis[i] - y) ** 2)
        const dr = rAxis[i] + r + (typeof padding === 'undefined' ? 0 : padding)
        if (d <= dr / 2) {
          return false
        }
      }
      return true
    } 
    for (let i = 0; i < len; i++) {
      let count = 0
      while (count++ <= 200) {
        const r = ((Math.random() + 3) / 4) * bubbleWidth
        const x = (Math.random()) * (width - r)
        const y = (Math.random()) * (height - r)
        if (bubbleAvailable(x, y, r)) {
          xAxis.push(x)
          yAxis.push(y)
          rAxis.push(r)
          break
        }
      }
    }
    return (
      <>
        {xAxis.map((x: number, index: number) => {
          const y = yAxis[index]
          const r = rAxis[index]
          const image = images[index]
          const bubbleStyle: CSSProperties = {
            'position': 'absolute',
            'bottom': y + 'px',
            'left': x + 'px',
          }
          return (<div style={bubbleStyle}>
            <Bubble rAxis={r} image={image} animationDelay="0s"/>
          </div>)
        })}
      </>
    )
  }
  return (
    <>
      {renderBubble()}
    </>
  )
}

export default BubbleChart
