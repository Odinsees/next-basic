export type Article = {
  abstract: string;
  byline: ByLine;
  document_type: string;
  headline: HeadLine;
  keywords: KeyWords[];
  lead_paragraph: string;
  multimedia: Multimedia[];
  news_desk: string;
  print_page: string;
  print_section: string;
  pub_date: Date;
  section_name: string;
  snippet: string;
  source: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
};

type ByLine = {
  organization: string;
  original: string;
  person: Person[];
  document_type: string;
};

type Person = {
  firstname: string;
  lastname: string;
  middlename: string;
  organization: string;
  qualifier: string;
  rank: number;
  role: string;
  title: string;
};

type HeadLine = {
  content_kicker: string;
  kicker: string;
  main: string;
  name: string;
  print_headline: string;
  seo: string;
  sub: string;
};

type KeyWords = {
  major: string;
  name: string;
  rank: number;
  value: string;
};

type Multimedia = {
  caption: string;
  credit: string;
  crop_name: string;
  height: number;
  legacy: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  };
  rank: number;
  subType: string;
  subtype: string;
  type: string;
  url: string;
  width: number;
};
