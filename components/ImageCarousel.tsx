'use client';

// Packages
import { useRef } from 'react';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

// Components
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

// Images
import robot from '@/public/images/robot_face.png';
import alarm from '@/public/images/alarm_clock.png';
import handshake from '@/public/images/handshake.png';
import loudspeaker from '@/public/images/loudspeaker.png';

const SLIDES = [
  {
    imageUrl: robot,
    description: 'Add Teh Peng Bot to your telegram community',
  },
  {
    imageUrl: alarm,
    description: 'Set the frequency and configuration of the 1:1 matches',
  },
  {
    imageUrl: handshake,
    description: 'Our algorithm will match your community members for a 1:1 conversation',
  },
  {
    imageUrl: loudspeaker,
    description: 'Our bot will handle all group announcements and reminders',
  }
];

const ImageCarousel = () => {
  const plugin = useRef([Autoplay({ delay: 5000 }), Fade()]);

  return (
    <>
      <Carousel
        opts={{
          containScroll: false,
          duration: 50,
        }}
        plugins={plugin.current}
        className='w-full max-w-xs'>
        <CarouselContent>
          {SLIDES.map((slide, index) => (
            <CarouselItem className='flex flex-col justify-center' key={index}>
              <Image
                src={slide['imageUrl']}
                alt={slide.description}
                className='w-40 mx-auto mb-20'
                placeholder='blur'
                priority={true}
              />
              <p className='text-center text-muted-foreground text-lg'><Balancer>{slide.description}</Balancer></p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default ImageCarousel;
