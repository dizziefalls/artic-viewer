import { useGetAllWorksQuery } from "../../services/artic"
import { Link } from "react-router-dom"
import imageURLBuilder from "../../helpers/imageURLBuilder"
import React, { FormEventHandler, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setPageSizeLimit } from "../../common/pageConfigSlice"

// Figure out how to add searching smoothly. Might need a new route
export default function SearchBrowser() {
  const pageConfig = useAppSelector((state) => state.pageConfig)
  const dispatch = useAppDispatch()
  
  const { data, error, isLoading } = useGetAllWorksQuery({ 
    options: {
      pageSize: pageConfig.pageNumber,
      pageSizeLimit: pageConfig.pageSizeLimit
    }})

  const selectSizeRef = useRef<HTMLSelectElement>(null)

  function handleQuery(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(setPageSizeLimit(selectSizeRef.current?.value!))
  }

  return (
    <>
      <h3>This is where the searches go! </h3>
      <form onSubmit={(e) => handleQuery(e)}>
        <input type="text" placeholder="Search for works at artic..." />
        <button type="submit">Search here!</button>
        <label>Number of Results</label>
        <select ref={selectSizeRef} defaultValue={pageConfig.pageSizeLimit}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
        </select>
      </form>
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