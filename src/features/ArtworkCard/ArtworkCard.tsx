import imageURLBuilder from "../../helpers/imageURLBuilder";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addFav, removeFav } from "../Favorites/favoritesSlice";
import { Link } from "react-router-dom";

export interface ArtworkCardProps {
  work: any,
  data: any
}

export default function ArtworkCard({ work, data }: ArtworkCardProps) {
  const favSelector = useAppSelector(state => state.favorites)
  const dispatch = useAppDispatch()

  function handleFav() {
    if (favSelector.favorites.includes(work.name)) {
      dispatch(removeFav(work))
      console.log(favSelector.favorites)
    }
    else if (!favSelector.favorites.includes(work.name)) {
      
      dispatch(addFav(work))
      console.log(favSelector.favorites)
    }
  }


  return (
    <>
      <Link to={`/artwork/${work.id}`}>
        <img className="artwork-card-img" src={imageURLBuilder(data.config.iiif_url, work.image_id)}/>
      </Link>
      <div className="artwork-card-footer-content">
        <div className="artwork-card-footer-content-body">
          <h4 className="artwork-card-footer-content-title">{work.title}</h4>
          <p className="artwork-card-footer-content-text">{work.artist_title}
            <span> - {work.date_display}</span>
          </p>
        </div>
        <div>
          {favSelector.favorites.includes(work) ?
            <button 
            className="artwork-card-fav-btn"
            style={{color: "red"}}
            onClick={() => handleFav()}>
              &#9829;
            </button>
            : <button 
            className="artwork-card-fav-btn"
            color="black"
            onClick={() => handleFav()}>
              &#9829;
            </button>}
        </div>
      </div>
    </>
)
}