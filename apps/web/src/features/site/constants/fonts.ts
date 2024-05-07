import { Noto_Sans_JP, Zen_Kurenaido } from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

// Use catch-copy
export const zenKurenaido = Zen_Kurenaido({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
  variable: '--font-zen-kurenaido',
  display: 'swap',
});
