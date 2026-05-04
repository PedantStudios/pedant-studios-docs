import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ProductItem = {
  title: string;
  tagline: string;
  description: ReactNode;
  href: string;
  status: 'live' | 'beta' | 'coming-soon';
};

const Products: ProductItem[] = [
  {
    title: 'WebCenter',
    tagline: 'Time clock & workforce management',
    description: (
      <>
        Multi-tenant time tracking, scheduling, mileage, and messaging — built
        for tax preparation and bookkeeping firms.
      </>
    ),
    href: '/docs/webcenter/overview',
    status: 'beta',
  },
];

function statusLabel(status: ProductItem['status']): string {
  switch (status) {
    case 'live':
      return 'Live';
    case 'beta':
      return 'Beta';
    case 'coming-soon':
      return 'Coming soon';
  }
}

function Product({title, tagline, description, href, status}: ProductItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.productCard}>
        <div className={styles.productStatus}>{statusLabel(status)}</div>
        <Heading as="h3">{title}</Heading>
        <p className={styles.productTagline}>{tagline}</p>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={href}>
          Read the docs
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Products
        </Heading>
        <div className="row">
          {Products.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
