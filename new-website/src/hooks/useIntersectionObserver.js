import { useEffect, useState } from 'react'

export default function useIntersectionObserver(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold }
    )

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return isVisible
}