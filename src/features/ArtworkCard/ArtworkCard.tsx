import imageURLBuilder from "../../helpers/imageURLBuilder";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addFav, removeFav } from "../Favorites/favoritesSlice";
import { Link } from "react-router-dom";
import loadDefaultImage from "../../helpers/loadDefaultImage";

export interface ArtworkCardProps {
  work: any,
  imageBaseUrl: string
}

export default function ArtworkCard({ work, imageBaseUrl }: ArtworkCardProps) {
  const favSelector = useAppSelector(state => state.favorites)
  const dispatch = useAppDispatch()


  return (
    <>
      <Link to={`/artwork/${work.id}`}>
        <img 
          className="artwork-card-img" 
          src={imageURLBuilder(imageBaseUrl, work.image_id)}
          onError={(e) => loadDefaultImage(e)}/>
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
            onClick={() => dispatch(removeFav(work))}>
              &#9829;
            </button>
            : <button 
            className="artwork-card-fav-btn"
            color="black"
            onClick={() => dispatch(addFav(work))}>
              &#9829;
            </button>}
        </div>
      </div>
    </>
)
}