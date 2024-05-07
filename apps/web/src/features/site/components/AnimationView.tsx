import classnames from 'classnames';
import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  useEffect,
} from 'react';
import { CatchCopy } from '~/features/site/components/CatchCopy';
import styles from './AnimationView.module.scss';

const Tag = 'div' as const satisfies keyof JSX.IntrinsicElements;

type AnimationProps = Pick<
  ComponentProps<typeof CatchCopy<true>>,
  | 'onAnimationStart'
  | 'onAnimationStartCapture'
  | 'onAnimationEnd'
  | 'onAnimationEndCapture'
  | 'onAnimationIteration'
  | 'onAnimationIterationCapture'
>;

type Props = Omit<ComponentPropsWithoutRef<typeof Tag>, keyof AnimationProps> &
  AnimationProps;

export const AnimationView = (props: Props & AnimationProps) => {
  const {
    onAnimationStart,
    onAnimationStartCapture,
    onAnimationEnd,
    onAnimationEndCapture,
    onAnimationIteration,
    onAnimationIterationCapture,
    className,
    ...rest
  } = props;

  return (
    <Tag className={classnames(styles.container, className)} {...rest}>
      <CatchCopy
        animation
        onAnimationStart={(event) => onAnimationStart?.(event)}
        onAnimationStartCapture={(event) => onAnimationStartCapture?.(event)}
        onAnimationEnd={(event) => onAnimationEnd?.(event)}
        onAnimationEndCapture={(event) => onAnimationEndCapture?.(event)}
        onAnimationIteration={(event) => onAnimationIteration?.(event)}
        onAnimationIterationCapture={(event) =>
          onAnimationIterationCapture?.(event)
        }
      />
    </Tag>
  );
};
