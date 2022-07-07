import useSWR from 'swr'
import fetch from 'unfetch'
import { Story } from '../models/story'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

type StoryFetcher = {
  stories: Story[]
  isLoading: boolean
  isError: boolean
}

export const StoryFetcher = (sections: string): StoryFetcher => {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
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
