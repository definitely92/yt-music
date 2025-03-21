'use client';

import IconButton from './IconButton';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoCloseOutline } from 'react-icons/io5';

const Logo = ({ isInDrawer = false, onClickClose = () => {} }: { isInDrawer?: boolean; onClickClose?: () => void }) => {
    const { push } = useRouter();
    const onClickMenu = () => {
        console.log('onClickMenu');
    };

    const onClickLogo = () => {
        push('/');
    };

    return (
        <section className="flex flex-row items-center gap-3">
            {isInDrawer ? (
                <IconButton icon={<IoCloseOutline size={30} />} onClickIconButton={onClickClose} />
            ) : (
                <IconButton icon={<RxHamburgerMenu size={24} />} onClickIconButton={onClickMenu} />
            )}
            <div className="cursor-pointe" onClick={onClickLogo}>
                <Image src="/main-logo.svg" alt="logo" width={100} height={30} />
            </div>
        </section>
    );
};

export default Logo;
