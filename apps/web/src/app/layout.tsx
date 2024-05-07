import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ThemeProvider } from '~/features/site/provider/ThemeProvider';

export const metadata: Metadata = {
  title: "Tsuji Masayuki's Portfolio",
  description: "Tsuji Masayuki's Portfolio",
};

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
