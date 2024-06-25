// Packages
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';

// Components
import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';

// Styles
import styles from './page.module.css';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/2 md:min-h-screen bg-primary text-primary-foreground py-24 md:py-0 px-5 md:px-10 flex items-center justify-center'>
          <div className='max-w-xl'>
            <h1 className='font-header text-3xl md:text-6xl mb-5'>
              <Balancer>Build your community on telegram.</Balancer>
            </h1>
            <p className='mb-10'>
              <Balancer>
                We help telegram communities engage members by matching them for 1:1 chats every month - no fees.
              </Balancer>
            </p>
            <ContactForm />
            <p className='text-xs ml-2'>
              <Balancer>
                If you sell tea or coffee, email us at{' '}
                <Link href={'mailto:thejoblessclub@gmail.com'} className='underline'>
                  thejoblessclub@gmail.com
                </Link>{' '}
                to collaborate.
              </Balancer>
            </p>
          </div>
        </div>

        <div className='relative w-full md:w-1/2 md::min-h-screen bg-white mx-auto max-w-4xl py-16 md:py-0 px-5 md:px-10 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='max-w-md text-center mb-8'>
              <p className='text-muted-foreground text-sm mb-6 tracking-wider'>HOW IT WORKS</p>
              <p className='text-3xl md:text-4xl font-header mb-4 md:mb-12'>
                Match members, <span className={styles.underline}>easily</span>
              </p>
            </div>
            <div>
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>
      <Badge className='hidden md:inline-block absolute bottom-5 right-5 px-4 py-2'>Built by The Jobless Club</Badge>
      <div className='md:hidden flex justify-center mb-5'>
        <Badge className='px-4 py-2'>Built by The Jobless Club</Badge>
      </div>
    </div>
  );
}
