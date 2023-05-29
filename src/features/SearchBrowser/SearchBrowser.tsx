import { useGetAllWorksQuery } from "../../services/artic"
import { Link } from "react-router-dom"
import imageURLBuilder from "../../helpers/imageURLBuilder"

export default function SearchBrowser() {
  // Look into args weirdness
  const { data, error, isLoading } = useGetAllWorksQuery(null)

  return (
    <>
      <h3>This is where the searches go! </h3>
      <div className="search-body">
        { error ? (
          <>Oh dear it's broken</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
          {console.log(data)}
          {
            data.data.map((work: any) => {
              return (
                <div key={work.id} >
                  <h4>{work.title}</h4>
                  <Link to={`/artwork/${work.id}`}>
                    <img src={imageURLBuilder(data.config.iiif_url, work.image_id)}/>
                  </Link>
                </div>
              )
            })
          }
          Loaded!
          </>
        ) : <></>}
      </div>
    </>
  )
}