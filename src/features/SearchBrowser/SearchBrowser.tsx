import { useGetAllWorksQuery } from "../../services/artic"

export default function SearchBrowser() {
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
          {
            data.data.map((work: any) => 
            <h4>{work.title}</h4>)
            //console.log(data)
          }
          Loaded!
          </>
        ) : <></>}
      </div>
    </>
  )
}