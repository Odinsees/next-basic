export type Story = {
  abstract: string
  byLine: string
  created_date: Date
  published_date: Date
  updated_date: Date
  des_facet: string[]
  geo_facet: []
  item_type: string
  kicker: string
  material_type_facet: string
  multimedia: Multimedia
  org_facet: string[]
  per_facet: []
  section: string
  short_url: string
  subsection: string
  title: string
  uri: string
  url: string
}

type Multimedia = {
  caption: string
  copyright: string
  format: string
  width: number
  height: number
  subtype: string
  type: string
  url: string
}[]
