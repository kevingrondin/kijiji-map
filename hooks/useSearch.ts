import { useQuery, UseQueryOptions } from 'react-query'
import { client } from '~api/api'
import { SearchOptions, SearchParameters, Ad } from 'kijiji-scraper'

export const useSearch = (
  params?: SearchParameters,
  searchOptions?: SearchOptions,
  queryOptions?: UseQueryOptions<Ad[]>,
) => {
  return useQuery(
    ['search', params],
    () => client.post('/api/search', { test: 'coucu' }).then((res) => res.data),

    queryOptions,
  )
}
