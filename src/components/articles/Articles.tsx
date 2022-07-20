import { FunctionComponent } from 'react';
import { ArticlesList } from './components/articles-list/ArticlesList';

type Props = {
  section: string;
};

export const Articles: FunctionComponent<Props> = ({ section }) => {
  return <ArticlesList section={section} />;
};
