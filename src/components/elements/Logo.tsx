'use client';

import IconButton from './IconButton';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const { push } = useRouter();
    const onClickMenu = () => {
        console.log('onClickMenu');
    };

    const onClickLogo = () => {
        push('/');
    };

    return (
        <section className="flex flex-row items-center gap-3">
            <IconButton icon={<RxHamburgerMenu size={24} />} onClickIconButton={onClickMenu} />
            <div className="cursor-pointe" onClick={onClickLogo}>
                <Image src="/main-logo.svg" alt="logo" width={100} height={30} />
            </div>
        </section>
    );
};

export default Logo;
