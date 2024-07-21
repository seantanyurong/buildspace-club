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
import pencil from '@/public/images/pencil.png';
import house_buildings from '@/public/images/house_buildings.png';
import handshake from '@/public/images/handshake.png';
import microphone from '@/public/images/microphone.png';

const SLIDES = [
  {
    imageUrl: pencil,
    description: 'Apply through the form - to ensure you are a buildspace founder',
  },
  {
    imageUrl: house_buildings,
    description: 'Get accepted and join our private telegram community',
  },
  {
    imageUrl: handshake,
    description: 'We will match you for a 1:1 conversation every month',
  },
  {
    imageUrl: microphone,
    description: 'Connect, chat and learn from others through conversations',
  },
];

const ImageCarousel = () => {
  const plugin = useRef([Autoplay({ delay: 4000 }), Fade()]);

  return (
    <>
      <Carousel
        opts={{
          containScroll: false,
          duration: 50,
          loop: true,
          watchDrag: false,
        }}
        plugins={plugin.current}
        className='w-full max-w-xs'>
        <CarouselContent>
          {SLIDES.map((slide, index) => (
            <CarouselItem className='flex flex-col justify-center' key={index}>
              <Image
                src={slide['imageUrl']}
                alt={slide.description}
                className='w-40 mx-auto mb-10 md:mb-20'
                placeholder='blur'
                priority={true}
              />
              <p className='text-center text-muted-foreground text-lg'>
                <Balancer>{slide.description}</Balancer>
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default ImageCarousel;
