import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Button from '../components/Button';


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
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
          <p>
            Prologue 汉化已发布：
          </p>
          <p style={{ display: 'flex', justifyContent: 'center', gap: '.5rem' }}>
            <Button link='/blog/2024-12-25-first#%E6%96%91%E7%8C%AB%E7%A0%94%E6%B1%89%E5%8C%96%E7%BB%84' label='斑猫研汉化组' variant='primary' />
            <Button link='/blog/2024-12-25-first#%E9%A9%8E%E4%B9%8B%E4%B8%AA%E4%BA%BA%E6%B1%89%E5%8C%96' label='驎之个人汉化' variant='primary' />
          </p>
        </div>
      </main>
    </Layout>
  );
}
