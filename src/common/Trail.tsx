import React from "react"
import { useTrail, a } from "@react-spring/web"

import './Header.css'

export interface TrailProps {
  open: boolean,
  children: any
}

const Trail = ({ open, children }: TrailProps) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    width: open ? 400: 0,
    from: { opacity: 0, x: 20, width: 0 },
  })

  return (
    <div>
      {trail.map(({ width, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ width }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default Trail