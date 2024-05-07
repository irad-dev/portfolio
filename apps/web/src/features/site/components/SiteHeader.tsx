import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

const Tag = 'header' as const satisfies keyof JSX.IntrinsicElements;

import styles from './SiteHeader.module.scss';

type Props = ComponentPropsWithoutRef<typeof Tag>;

export const SiteHeader = (props: Props) => {
  const { className, ...rest } = props;

  const displayTexts = ['About', 'Service', 'Works', 'Skills', 'Contact'];

  return (
    <Tag className={classnames(styles.header, className)} {...rest}>
      <Image
        src="/logo.svg"
        alt="アイラッドロゴ"
        className={styles.logo}
        width={160}
        height={45}
        priority
      />
      <nav className={styles.navigates}>
        <ul className={styles.items}>
          {displayTexts.map((text) => (
            <Link
              key={text}
              href={`#${text.toLowerCase()}`}
              className={styles.item}
              role="listitem"
            >
              {text}
            </Link>
          ))}
        </ul>
      </nav>
    </Tag>
  );
};
