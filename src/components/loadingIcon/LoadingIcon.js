import React from 'react'
import './LoadingIcon.css'

export default function LoadingIcon() {
  return (
    <div>
      <h1>Loading<span className="dot text-success dot-1">.</span><span className="dot text-success dot-2">.</span><span className="dot text-success dot-3">.</span></h1>
    </div>
  )
}