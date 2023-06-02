import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Trail from './Trail'

import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  })

  return (
    <header>
      <div className="container">
        <Trail open={open}>
            <span>artic</span>
            <span>viewer</span>
        </Trail>
      </div>
      <Navbar />
    </header>
  )
}