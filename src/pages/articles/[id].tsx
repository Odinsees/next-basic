import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { unstable_serialize } from 'swr';
import { articlesFetcher } from 'service/articleFetcher';
import { ArticlePage } from 'components/article-page/ArticlePage';

type Props = {
  id: string;
};

const Article: FunctionComponent<Props> = ({ id }) => {
  return <ArticlePage id={id} />;
};

export default Article;

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const id = unstable_serialize(context.query.id);
    const data = await articlesFetcher(id);
    const articleData = Boolean(data.response.docs.length);

    if (!articleData) {
      return { notFound: true };
    }

    return {
      props: {
        fallback: {
          [id]: data,
        },
        id,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
