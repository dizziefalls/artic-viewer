import Trail from './Trail'
import { useState } from 'react'

import './Header.css'
import Navbar from './Navbar'

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