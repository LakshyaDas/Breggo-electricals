import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import { ReviewProvider } from '@/context/ReviewContext';
import Footer from '@/components/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Breggo Electricals - Brighter Moments Begin Here',
  description: 'Leading provider of high-quality electrical products and solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
        <ReviewProvider>
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
          <Toaster />
        </ReviewProvider>
        <Footer/>
      </body>
    </html>
  );
}