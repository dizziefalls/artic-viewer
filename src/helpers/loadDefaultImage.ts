//import { SyntheticEvent } from 'react'
import imgUrl from '../assets/icons8-no-image-96.png'

// export default function loadDefaultImage(e: SyntheticEvent<HTMLImageElement, Event>) {
//   e.target.src = imgUrl
//   e.target.className = 'artwork-card-img-not-found'
// }

export default function loadDefaultImage(e: any) {
  e.target.src = imgUrl
  e.target.className = 'artwork-card-img-not-found'
}