import { useGetAllWorksQuery } from "../../services/artic"
import React, { useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { resetPageNumber, setImageBaseUrl, setPageSizeLimit } from "../../common/pageConfigSlice"

import "./SearchBrowser.css"
import ArtworkCard from "../ArtworkCard/ArtworkCard"
import imageURLBuilder from "../../helpers/imageURLBuilder"

// Figure out how to add searching smoothly. Might need a new route
export default function SearchBrowser() {
  const pageConfig = useAppSelector((state) => state.pageConfig)
  const dispatch = useAppDispatch()
  
  const { data, error, isLoading } = useGetAllWorksQuery({ 
    options: {
      pageNumber: pageConfig.pageNumber,
      pageSizeLimit: pageConfig.pageSizeLimit
    }})

  const selectSizeRef = useRef<HTMLSelectElement>(null)

  function handleQuery(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(setPageSizeLimit(selectSizeRef.current?.value!))
  }

  useEffect(() => {
    if (data) dispatch(setImageBaseUrl(data.config.iiif_url))
  }, [data])

  return (
    <div className="search-container">
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
      <div className="filter-sidebar"></div>
      <div className="search-body">
        <div className="search-cards">
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
                    <div key={work.id} className="artwork-card">
                        <ArtworkCard work={work} imageBaseUrl={pageConfig.imageBaseUrl}/>
                    </div>
                  )
                })
              }
              
            </>
          ) : <></>}
        </div>
        <div className="page-controller">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
      </div>
    </div>
  )
}