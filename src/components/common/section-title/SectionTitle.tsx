import { FunctionComponent } from 'react';

import styles from './styles.module.scss';

type Props = {
  title: string;
};

export const SectionTitle: FunctionComponent<Props> = ({ title }) => {
  return <p className={styles.sectionTitle}>{title}</p>;
};
