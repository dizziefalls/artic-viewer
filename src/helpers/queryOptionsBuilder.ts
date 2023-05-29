import IQueryOptions from "../types/queryOptions"

// Builds string for use in queries so we don't have to muddy the service up
export default function queryOptionsBuilder(options: IQueryOptions): string {
  const {q, pageNumber, pageSize } = options
  let queryOptions: string = ''

  if (q) {
    queryOptions += `q=${q}&`
  }

  if (pageNumber) {
    queryOptions += `page=${pageNumber}&`
  }

  if (pageSize) {
    queryOptions += `limit=${pageSize}`
  }

  //Remove any trailing &s
  if (queryOptions[queryOptions.length-1] === "&") {
    queryOptions.slice(0, -1)
  }

  return queryOptions
}