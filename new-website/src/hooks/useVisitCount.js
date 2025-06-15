import { useState, useEffect } from 'react'

export default function useVisitCount() {
  const [visitCount, setVisitCount] = useState(0)

  useEffect(() => {
    const visits = parseInt(localStorage.getItem('visitCount') || '0')
    const newCount = visits + 1
    localStorage.setItem('visitCount', newCount.toString())
    setVisitCount(newCount)
  }, [])

  return visitCount
}