import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MOBILE_SIZE } from 'constants/screenSize';
import { SectionTitle } from 'components/common/section-title/SectionTitle';
import { useArticle } from 'hooks/useArticle';
import { formatDate } from 'formatters/date';
import { useMediaQuery } from 'usehooks-ts';

import styles from './styles.module.scss';

export const StoryPage: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { article, isLoading, isError } = useArticle(id);
  const isDesktop = useMediaQuery(`(min-width: ${MOBILE_SIZE}px)`);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.container}>
      <div className={styles.articleHeader}>
        <SectionTitle title={article.news_desk} />
        <p className={styles.articleDate}>{formatDate(article.pub_date)}</p>
      </div>
      <div className={styles.articleImage}>
        <Image
          src={'/car.png'}
          alt="photo"
          width={375}
          height={280}
          layout={isDesktop ? 'fill' : 'responsive'}
          objectFit="cover"
        />
      </div>
      <h1 className={styles.articleTitle}>{article.headline.main}</h1>
      <p className={styles.articleSubTitle}>{article.lead_paragraph}</p>
      <p className={styles.articleText}>{article.abstract}</p>
    </div>
  );
};
