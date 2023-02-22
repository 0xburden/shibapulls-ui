import { useState, useEffect } from 'react'

export default function useIsMounted() {
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      setMounted(true)
    }
  }, [isMounted])

  return isMounted
}
