import IQueryOptions from "../types/queryOptions"

// Builds string for use in queries so we don't have to muddy the service up
export default function queryOptionsBuilder(options: IQueryOptions): string {
  const {q, pageNumber, pageSizeLimit } = options
  let queryOptions: string = ''

  if (q) {
    queryOptions += `/search?q=${q}&`
  }
  else {
    queryOptions += `?`
  }

  if (pageNumber) {
    queryOptions += `page=${pageNumber}&`
  }

  if (pageSizeLimit) {
    queryOptions += `limit=${pageSizeLimit}`
  }

  //Remove any trailing &s
  if (queryOptions[queryOptions.length-1] === "&") {
    queryOptions.slice(0, -1)
  }

  return queryOptions
}