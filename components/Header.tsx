import logo from '@/public/images/logo.png'
import Image from 'next/image';


function Header() {
  return (
    <>
        <div className="absolute top-0 left-0 w-full pt-5 px-5 flex justify-between">
            <div className="flex">
                <Image src={logo} alt="Logo" width={80} height={20} />
            </div>
        </div>
    </>
  )
}

export default Header