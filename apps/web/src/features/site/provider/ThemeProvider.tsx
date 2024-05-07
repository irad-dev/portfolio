import '~/styles/variables.scss';
import './ThemeProvider.scss';
import type { PropsWithChildren } from 'react';
import { notoSansJP, zenKurenaido } from '~/features/site/constants/fonts';

type Props = Readonly<PropsWithChildren>;

export const ThemeProvider = (props: Props) => {
  const { children } = props;

  return (
    <div className={`${notoSansJP.variable} ${zenKurenaido.variable}`}>
      {children}
    </div>
  );
};
