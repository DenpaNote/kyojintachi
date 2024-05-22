import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`主页 - ${siteConfig.title}`}
      description="虽说很辛苦，但是我还是睁开眼睛，开始写起了报告书。">
      
      <main className={clsx(styles.layoutMain)}>
        <div className={clsx('container', styles.headers)}>
          <Heading as="h1" id="hero__title">
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.hero__subtitle)}>
            {siteConfig.tagline}
          </p>
        </div>
      </main>
    </Layout>
  );
}
