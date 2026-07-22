import { useRef, useEffect, useCallback } from 'react'

import full_moon from '../../assets/full_moon.png'

const PI_OVER_TWO = Math.PI / 2
const THREE_PI_OVER_TWO = 3 * PI_OVER_TWO

const Phase2D = ({
  fraction,
  waxing,
}: {
  fraction: number
  waxing: boolean
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawPhase = useCallback(
    (context: CanvasRenderingContext2D) => {
      const rect = context.canvas.getBoundingClientRect()
      const halfWidth = rect.width / 2.0

      const bo = 1.0 - 2.0 * fraction
      const illumChord = Math.abs(bo) * rect.width

      context.fillStyle = 'black'
      context.globalAlpha = 0.5

      context.beginPath()
      context.arc(
        halfWidth,
        halfWidth,
        halfWidth,
        PI_OVER_TWO,
        THREE_PI_OVER_TWO,
        !waxing,
      )

      let ccw: boolean
      if (bo < 0) {
        ccw = waxing
      } else {
        ccw = !waxing
      }

      context.ellipse(
        halfWidth,
        halfWidth,
        illumChord / 2,
        halfWidth,
        0,
        THREE_PI_OVER_TWO,
        PI_OVER_TWO,
        ccw,
      )
      context.clip()

      context.beginPath()
      context.arc(halfWidth, halfWidth, halfWidth, 0, 2 * Math.PI)
      context.fill()
    },
    [fraction, waxing],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas!.getContext('2d')
    if (canvas) {
      if (context) {
        const image = new Image()
        image.src = full_moon
        image.onload = () => {
          canvas.width = image.width
          canvas.height = image.height
          context.drawImage(image, 0, 0)
          drawPhase(context)
        }
      }
    }

    return () => {
      context!.clearRect(0, 0, canvas!.width, canvas!.height)
    }
  }, [drawPhase])

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      className="aspect-square"
    />
  )
}

export default Phase2D
