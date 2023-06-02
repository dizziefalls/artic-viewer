import { useParams } from "react-router-dom";
import { useGetWorkByIdQuery } from "../../services/artic";
import imageURLBuilder from "../../helpers/imageURLBuilder";

import './DetailsPage.css'

// account for null work and pull from query
const DetailsPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetWorkByIdQuery(id!)
  return (
    <>
    {
      data ?
        <div className="details-page">
          <img src={imageURLBuilder(data.config.iiif_url, data.data.image_id)}></img>
          <aside>
            <div className="details-header">
              <h2>{data.data.title}</h2>
              <p>{data.data.date_display}</p>
              <p>{data.data.artist_display}</p>
            </div>
            <dl className="details-text">
              <dt>Artist</dt>
              <dd>{data.data.artist_title}</dd>
              <dt>Medium</dt>
              <dd>{data.data.medium_display}</dd>
              <dt>Dimensions</dt>
              <dd>{data.data.dimensions}</dd>
            </dl>
          </aside>
        </div>
      : <></>
    }
    </>
  )
}

export default DetailsPage