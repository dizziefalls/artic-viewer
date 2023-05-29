import { useParams } from "react-router-dom";
import { useGetWorkByIdQuery } from "../../services/artic";
import imageURLBuilder from "../../helpers/imageURLBuilder";

// account for null work and pull from query
const DetailsPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetWorkByIdQuery(id!)
  return (
    <>
    {
      data ?
        <>
          <h3>{data.data.title}</h3>
          <img src={imageURLBuilder(data.config.iiif_url, data.data.image_id)}></img>
        </>
      : <></>
    }
    </>
  )
}

export default DetailsPage