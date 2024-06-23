import logo from '@/public/images/logo.png';
import Image from 'next/image';

function Footer() {
  return (
    <div className='w-full p-5 md:p-10'>
        <Image src={logo} alt='Logo' width={60} height={20} className='hidden md:inline-block absolute bottom-0 right-0' />
        <Image src={logo} alt='Logo' width={40} height={10} className='inline-block md:hidden absolute bottom-0 right-0' />
    </div>
  );
}

export default Footer;
