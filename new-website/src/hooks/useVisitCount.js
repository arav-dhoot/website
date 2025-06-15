import { useState, useEffect } from 'react'

export default function useVisitCount() {
  const [visitCount, setVisitCount] = useState(0)

  useEffect(() => {
    // For demo purposes, just use a random visit count since localStorage 
    // is not available in this environment
    const simulatedVisits = Math.floor(Math.random() * 5) + 1
    setVisitCount(simulatedVisits)
  }, [])

  return visitCount
}