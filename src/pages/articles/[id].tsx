import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { Article } from 'models/article';
import { SWRConfig } from 'swr';
import { articlesFetcher } from 'service/articleFetcher';
import { ArticlePage } from 'components/article-page/ArticlePage';

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.query.id;
  const data = await articlesFetcher(id);
  const article = data.response.docs[0];

  return {
    props: {
      fallback: {
        id: article,
      },
    },
  };
};

type Props = {
  fallback: {
    id: Article;
  };
};

const Article: FunctionComponent<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <ArticlePage />
    </SWRConfig>
  );
};

export default Article;
