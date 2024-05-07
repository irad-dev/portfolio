'use client';
import { type ComponentPropsWithoutRef, useRef, useState } from 'react';

import classnames from 'classnames';
import { AnimationView } from '~/features/site/components/AnimationView';
import styles from './Page.module.scss';

const Tag = 'main' as const satisfies keyof JSX.IntrinsicElements;

type Props = ComponentPropsWithoutRef<typeof Tag>;

export const Page = (props: Props) => {
  const { children, className, ...rest } = props;

  const [animated, setAnimated] = useState<boolean>(false);

  return (
    <Tag className={classnames(styles.main, className)} {...rest}>
      <AnimationView
        className={classnames(styles.animation, animated && styles.animated)}
        onAnimationEnd={() => {
          setAnimated(true);
        }}
      />
      <div className={classnames(styles.content, animated && styles.animated)}>
        {children}
      </div>
    </Tag>
  );
};
