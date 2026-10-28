import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: '王健 | 摄影师 / 摄像师',
  description:
    '王健的作品集：近 3 年专业视频制作经验，覆盖宣传片、广告与文艺类影像。',
};

export const viewport = {
  themeColor: '#08070b',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
