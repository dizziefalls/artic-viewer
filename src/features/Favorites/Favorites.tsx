import { useAppSelector } from "../../app/hooks"
import ArtworkCard from "../ArtworkCard/ArtworkCard"

export default function Favorites() {
  const favorites = useAppSelector(state => state.favorites.favorites)
  const pageConfig = useAppSelector(state => state.pageConfig)

  return (
    <>
      <h3>I'm where the favorites go!</h3>
      <div className="favorites-container">{
        favorites ?
        favorites.map((fav) => 
          <div className="artwork-card">
            <ArtworkCard work={fav} imageBaseUrl={pageConfig.imageBaseUrl}/>
          </div>
        ):
        <></>
    }</div>
    </>
  )
}