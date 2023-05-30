import { useState } from 'react'
import Navbar from './Navbar'
import Trail from './Trail'

import './Header.css'

export default function Header() {
  const [open, SetOpen] = useState(true)

  return (
    <>
    <div className="container" onClick={() => SetOpen(open => !open)}>
      <Trail open={open}>
        <span>artic</span>
        <span>viewer</span>
      </Trail>
    </div>
      <Navbar />
    </>
  )
}