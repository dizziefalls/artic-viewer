import imageURLBuilder from "../../helpers/imageURLBuilder";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addFav, removeFav } from "../Favorites/favoritesSlice";
import { Link } from "react-router-dom";
import loadDefaultImage from "../../helpers/loadDefaultImage";
import clipText from "../../helpers/clipText";
import { useGetWorkDetailsByIdQuery } from "../../services/artic";
import { useEffect, useState } from "react";

export interface ArtworkCardProps {
  work: any,
  imageBaseUrl: string
}

export default function ArtworkCard({ work, imageBaseUrl }: ArtworkCardProps) {
  const favSelector = useAppSelector(state => state.favorites)
  const dispatch = useAppDispatch()
  const { data } = useGetWorkDetailsByIdQuery(work.id)

  const [favIds, setFavIds] = useState(Array<string>)

  useEffect(() => {
    const tempIds = favSelector.favorites.map(fav => fav.id)
    setFavIds(tempIds)
  }, [favSelector])

  return (
    <>
      <Link to={`/artwork/${work.id}`}>
        <img 
          className="artwork-card-img" 
          src={
            work.image_id ? 
            imageURLBuilder(imageBaseUrl, work.image_id)
            : 
            data ? 
            imageURLBuilder(imageBaseUrl, data.data.image_id)
            : work.thumbnail?.lqip
          }
          alt={work.thumbnail?.alt_text}
          onError={(e) => loadDefaultImage(e)}/>
      </Link>
      <div className="artwork-card-footer-content">
        <div className="artwork-card-footer-content-body">
          <h4 className="artwork-card-footer-content-title">{clipText(work.title)}</h4>
          <p className="artwork-card-footer-content-text">{
          work.artist_title ?
          work.artist_title :
          data?.data.artist_title}
            <span> - {
          work.date_display ?
          work.date_display :
          data?.data.date_display}</span>
          </p>
        </div>
        <div>
          {favIds.includes(work.id) ?
            <button 
            className="artwork-card-fav-btn"
            style={{color: "red"}}
            onClick={() => dispatch(removeFav(work))}>
              &#9829;
            </button>
            : <button 
            className="artwork-card-fav-btn"
            onClick={() => dispatch(addFav(work))}>
              &#9829;
            </button>}
        </div>
      </div>
    </>
  )
}