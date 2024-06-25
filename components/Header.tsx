import logo from '@/public/images/logo.png';
import Image from 'next/image';

function Header() {
  return (
    <div className='absolute top-0 left-0 w-full p-5 md:p-10'>
        <Image src={logo} alt='Logo' width={100} height={40} className='hidden md:inline-block' />
        <Image src={logo} alt='Logo' width={70} height={30} className='inline-block md:hidden' />
    </div>
  );
}

export default Header;
