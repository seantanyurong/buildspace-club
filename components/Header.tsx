import logo from '@/public/images/logo.png';
import Image from 'next/image';

function Header() {
  return (
    <div className='absolute top-0 left-0 w-full p-5 md:p-10'>
        <Image src={logo} alt='Logo' width={60} height={20} className='hidden md:inline-block' />
        <Image src={logo} alt='Logo' width={40} height={10} className='inline-block md:hidden' />
    </div>
  );
}

export default Header;
