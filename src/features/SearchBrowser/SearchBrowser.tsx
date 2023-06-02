import { useGetAllWorksQuery } from "../../services/artic"
import React, { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { resetPageNumber, resetQueryString, setImageBaseUrl, setPageNumber, setPageSizeLimit, setQueryString } from "../../common/pageConfigSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import queryOptionsBuilder from "../../helpers/queryOptionsBuilder"
import ArtworkCard from "../ArtworkCard/ArtworkCard"

import "./SearchBrowser.css"

// Figure out how to add searching smoothly. Might need a new route
export default function SearchBrowser() {
  const pageConfig = useAppSelector((state) => state.pageConfig)
  const dispatch = useAppDispatch()
  const selectSizeRef = useRef<HTMLSelectElement>(null)
  const queryRef = useRef<HTMLInputElement>(null)
  
  const { data, error, isLoading } = useGetAllWorksQuery(
    queryOptionsBuilder({
      q: pageConfig.q,
      pageNumber: pageConfig.pageNumber,
      pageSizeLimit: pageConfig.pageSizeLimit
    }))

  function handleQuery(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (queryRef.current?.value) {
      dispatch(setQueryString(queryRef.current.value))
    }
    else {
      dispatch(resetQueryString())
    }
    dispatch(setPageSizeLimit(selectSizeRef.current?.value!))
  }

  function handlePageChange(e: React.SyntheticEvent<HTMLAnchorElement, Event>) {
    dispatch(setPageNumber(e.target.innerText))
  }

  useEffect(() => {
    dispatch(resetPageNumber())
    if (data) {
      dispatch(setImageBaseUrl(data.config.iiif_url))
    }
  }, [data])

  useEffect(() => {
    dispatch(resetQueryString())
  }, [])

  return (
    <div className="search-container">
      <h3>This is where the searches go! </h3>
      <form className="search-form" onSubmit={(e) => handleQuery(e)}>
        <input type="text" ref={queryRef} placeholder="Search for works at artic..." />
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
          { data ?
              pageConfig.pageNumber === '1' ?
                (
                  <>
                    <NavLink to='#'>1</NavLink>
                    <NavLink to='#' onClick={(e) => handlePageChange(e)}>2</NavLink>
                    <NavLink to='#' onClick={(e) => handlePageChange(e)}>3</NavLink>
                    <span>...</span>
                    <NavLink to='#' onClick={(e) => handlePageChange(e)}>{data.pagination.total_pages}</NavLink>
                  </>
                )
              : (
                <>
                  {+pageConfig.pageNumber > 2 ?
                    <>
                      <NavLink to='#' onClick={(e) => handlePageChange(e)}>1</NavLink>
                      <span>...</span>
                    </>
                  : <></>}

                  <NavLink to='#' onClick={(e) => handlePageChange(e)}>{+pageConfig.pageNumber - 1}</NavLink>
                  <NavLink to='#' onClick={(e) => handlePageChange(e)}>{pageConfig.pageNumber}</NavLink>
                  {+pageConfig.pageNumber !== data.pagination.total_pages ?
                    <>
                      <NavLink to='#' onClick={(e) => handlePageChange(e)}>{+pageConfig.pageNumber + 1}</NavLink>
                      <NavLink to='#' onClick={(e) => handlePageChange(e)}>{+pageConfig.pageNumber + 2}</NavLink>
                      <span>...</span>
                      <NavLink to='#' onClick={(e) => handlePageChange(e)}>{data.pagination.total_pages}</NavLink>
                    </>
                  :<></>}
                </>
              )
            : <></>
          }
          </ul>
        </div>
      </div>
    </div>
  )
}