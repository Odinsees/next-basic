import { FunctionComponent } from 'react';
import type { GetServerSideProps } from 'next';
import { unstable_serialize } from 'swr';
import { articlesListFetcher } from 'service/articlesListFetcher';
import { Articles } from 'components/articles/Articles';

type Props = {
  section: string;
};

const Home: FunctionComponent<Props> = ({ section }) => {
  return <Articles section={section} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const section = context.query.section
      ? unstable_serialize(context.query.section[0])
      : 'home';
    const data = await articlesListFetcher(section);
    const articlesListData = Boolean(data?.results?.length);

    if (!data || !articlesListData || !data.results) {
      return { notFound: true };
    }

    return {
      props: {
        fallback: {
          [section]: data,
        },
        section,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Home;
