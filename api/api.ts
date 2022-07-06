import useSWR from 'swr'
import fetch from 'unfetch'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

function useSection(sections: string) {
  const fetcher = (url: string) => fetch(url).then((r: any) => r.json())
  const { data, error } = useSWR(
    `https://api.nytimes.com/svc/topstories/v2/${sections}.json?api-key=${API_KEY}`,
    fetcher,
  )

  return {
    stories: data && data.results,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useSection
