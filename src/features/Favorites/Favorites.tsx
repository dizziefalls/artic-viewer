import { useEffect } from "react"
import { useAppSelector } from "../../app/hooks"
import ArtworkCard from "../ArtworkCard/ArtworkCard"

export default function Favorites() {
  const favorites = useAppSelector(state => state.favorites.favorites)
  const pageConfig = useAppSelector(state => state.pageConfig)

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  return (
    <>
      <h3>I'm where the favorites go!</h3>
      <div className="search-cards">{
        favorites ?
        favorites.map((fav) => 
          <div className="artwork-card" key={fav.id}>
            <ArtworkCard work={fav} imageBaseUrl={pageConfig.imageBaseUrl}/>
          </div>
        ):
        <></>
    }</div>
    </>
  )
}