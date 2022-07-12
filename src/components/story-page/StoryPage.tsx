import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import { useArticle } from '@hooks/useArticle';

export const StoryPage: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { article, isLoading, isError } = useArticle(id);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div>
      StoryPage
      <p>{id}</p>
    </div>
  );
};
