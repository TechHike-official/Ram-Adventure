"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import PageLoader from "./PageLoader"

export default function RouteChangeProvider({ children }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timeout = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <>
      <PageLoader show={loading} />
      {children}
    </>
  )
}
