import { NavLink } from "react-router-dom"

const PageController = ({ pageConfig, data }) => {
  return (
    pageConfig.pageNumber === '1' ?
                (
                  <>
                    <NavLink to='#'>1</NavLink>
                    <NavLink to='#' onClick={(e) => handlePageChange(e)}>2</NavLink>
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
                      <span>...</span>
                      <NavLink to='#' onClick={(e) => handlePageChange(e)}>{data.pagination.total_pages}</NavLink>
                    </>
                  :<></>}
                </>
              )
  )
}

export default PageController