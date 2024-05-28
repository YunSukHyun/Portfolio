import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '自己紹介',
  description: 'ユン·ソクヒョンのポートフォリオ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Image
          className="background"
          src={'/background.png'}
          alt="img"
          priority
          fill
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
