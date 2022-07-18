import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { Article } from 'models/article';
import { articlesFetcher } from 'service/articleFetcher';
import { ArticlePage } from 'components/article-page/ArticlePage';

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.query.id;
  const data = await articlesFetcher(id);
  const article = data.response.docs[0];

  return { props: { article } };
};

type Props = {
  article: Article;
};

const Article: FunctionComponent<Props> = ({ article }) => {
  return <ArticlePage article={article} />;
};

export default Article;
