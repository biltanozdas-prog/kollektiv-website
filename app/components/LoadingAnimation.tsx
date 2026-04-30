'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingAnimation() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('k26-loaded')) {
      setVisible(false)
      return
    }
    // Total visible time ~4.2s, then fade out over 0.7s
    const t = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('k26-loaded', '1')
    }, 4200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] bg-offwhite flex flex-col items-center justify-center gap-8"
        >
          {/* Logo mark — clip-path reveal top → bottom, slower */}
          <div style={{ position: 'relative', width: 56, height: 72, overflow: 'hidden' }}>
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <svg
                width="56"
                height="72"
                viewBox="0 0 2239.15 2894.28"
                fill="#0A0A0A"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M233.49,0v2882.76c-39.61.29-211.94,8.69-233.49-2.99C.5,1919.94,1,959.83,1.5,0h232Z" />
                <path fillRule="evenodd" d="M1173.75,35.47c17.66,8.65,32.83,32.9,44.9,47.9,37.23,46.22,86.9,84.53,119.74,134.71-915.57,693.85-908.53,1809.44,1.5,2493.6-53.88,60.86-107.77,121.74-161.65,182.6h-5.99c-455.7-344.46-778.73-876.36-754.35-1468.33,5.38-568.23,317.01-1063.28,755.85-1390.48Z" />
                <path fillRule="evenodd" d="M1916.57,122.08c42.9,76.33,85.82,152.68,128.72,229-330.63,177.28-695.65,420.65-859.15,773.82-230.81,535.87,159.83,963.9,570.27,1240.82,62.36,38.41,124.74,76.84,187.09,115.25,33.42,18.46,66.86,36.92,100.28,55.38-40.91,75.83-81.83,151.68-122.73,227.51-26.73-3.53-94.2-52.53-118.24-67.35-361.71-222.47-726.57-516.77-874.11-948.94-199.41-603.83,226.03-1105.39,685.52-1438.39,68.35-43.9,136.71-87.81,205.06-131.71,32.43-18.46,64.86-36.92,97.29-55.38Z" />
                <path fillRule="evenodd" d="M1797.18,966.37c-244.09,0-441.97,197.88-441.97,441.97s197.88,441.97,441.97,441.97,441.97-197.88,441.97-441.97-197.88-441.97-441.97-441.97ZM1797.18,1626.74c-120.62,0-218.4-97.78-218.4-218.4s97.78-218.4,218.4-218.4,218.4,97.78,218.4,218.4-97.78,218.4-218.4,218.4Z" />
              </svg>
            </motion.div>
          </div>

          {/* Wordmark — fades in after mark reveals */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="flex items-baseline gap-1"
          >
            <span className="font-sans font-bold text-[18px] tracking-[0.06em] text-black">KOLLEKTIV</span>
            <span className="font-sans font-light text-[18px] tracking-[0.06em] text-black">26</span>
          </motion.div>

          {/* Progress bar — fills over ~3.5s, starts after mark begins */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-yellow"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3.6, delay: 0.4, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
