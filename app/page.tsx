// Packages
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { Badge } from '@/components/ui/badge';

// Images
import logo from '@/public/images/logo.png';

// Styles
import styles from './page.module.css';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/2 min-h-screen bg-muted px-5 md:px-10 flex items-center justify-center'>
          <div className='max-w-xl'>
            <h1 className='font-black text-3xl md:text-6xl text-foreground mb-5'>
              <Balancer>Build your community on telegram.</Balancer>
            </h1>
            <p className='text-foreground mb-10'>
              <Balancer>
                We help telegram communities engage members by matching them for 1:1 chats every month - no fees.
              </Balancer>
            </p>
            <Card className='w-full mb-4 text-foreground'>
              <CardHeader>
                <CardTitle className='text-md'>Are you a telegram community admin?</CardTitle>
                <CardDescription>
                  <Balancer>
                    If you&apos;re an admin, enter your email below and we will reach out with next steps.
                  </Balancer>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex space-y-2 md:space-y-0 md:space-x-2 flex-col md:flex-row'>
                  <Input placeholder='thejoblessclub@gmail.com' />
                  <Button variant='secondary' className='shrink-0'>
                    I&apos;m interested
                  </Button>
                </div>
              </CardContent>
            </Card>
            <p className='text-muted-foreground text-xs ml-2'>
              <Balancer>
                If you sell tea, email us at{' '}
                <Link href={'mailto:tehpengclub@gmail.com'} className='underline'>
                  tehpengclub@gmail.com
                </Link>{' '}
                to collaborate.
              </Balancer>
            </p>
          </div>
        </div>

        <div className='relative w-full md:w-1/2 min-h-screen bg-white mx-auto max-w-4xl px-5 md:px-10 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='max-w-md text-center mb-8'>
              <p className='text-muted-foreground text-sm mb-6 tracking-wider font-light'>HOW IT WORKS</p>
              <p className='text-3xl md:text-4xl font-bold mb-12'>
                Match members, <span className={styles.underline}>easily</span>
              </p>
            </div>
            <div>
              <ImageCarousel />
            </div>
          </div>
          <Badge className='hidden md:inline-block absolute bottom-5 right-5 px-4 py-2'>Built by The Jobless Club</Badge>
        </div>
      </div>
      <div className='md:hidden flex justify-center mb-5'>
        <Badge className='px-4 py-2'>Built by The Jobless Club</Badge>
      </div>
    </div>
  );
}
