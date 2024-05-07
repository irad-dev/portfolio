import '~/styles/variables.scss';
import 'destyle.css';
import './ThemeProvider.scss';
import classnames from 'classnames';
import type { PropsWithChildren } from 'react';
import { notoSansJP, zenKurenaido } from '~/features/site/constants/fonts';

type Props = Readonly<PropsWithChildren>;

export const ThemeProvider = (props: Props) => {
  const { children } = props;

  return (
    <div className={classnames(notoSansJP.variable, zenKurenaido.variable)}>
      {children}
    </div>
  );
};
