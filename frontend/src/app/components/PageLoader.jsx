"use client"

import Lottie from "lottie-react"
import loaderAnimation from "@/../public/animation/load.json"

export default function PageLoader({ show }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center">
      <div className="w-64 bg-black/30 rounded-4xl h-64 justify-center flex items-center">
        <Lottie animationData={loaderAnimation} loop autoplay />
      </div>
    </div>
  )
}
