import type { ComponentProps, ComponentPropsWithoutRef } from 'react';

import classnames from 'classnames';
import styles from './CatchCopy.module.scss';

const Tag = 'p' as const satisfies keyof JSX.IntrinsicElements;

type AnimationProps = Pick<
  ComponentProps<typeof Tag>,
  | 'onAnimationStart'
  | 'onAnimationStartCapture'
  | 'onAnimationEnd'
  | 'onAnimationEndCapture'
  | 'onAnimationIteration'
  | 'onAnimationIterationCapture'
>;

type Props<T extends boolean> = T extends true
  ? ComponentPropsWithoutRef<typeof Tag>
  : Omit<ComponentPropsWithoutRef<typeof Tag>, keyof AnimationProps>;

export const CatchCopy = <T extends boolean = false>(
  props: Props<T> & { animation?: T },
) => {
  const { animation = false, className, ...rest } = props;

  return (
    <Tag
      className={classnames(
        styles['catch-copy'],
        animation && styles.animation,
        className,
      )}
      {...rest}
    >
      次のステップへの
      <span className={styles.highlight}>キッカケ</span>を与える
    </Tag>
  );
};
