'use client';

import Image from 'next/image';
import UserIcon from '@/components/UserIcon';
import PagePadding from '@/components/pagePadding';
import { FiSearch } from 'react-icons/fi';
import { FaChromecast } from 'react-icons/fa';
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from '@/components/ui/drawer';
import Logo from '@/components/elements/Logo';
import Navigator from '@/components/elements/Navigator';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useUiState } from '@/hooks/useUiState';

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent className="w-[240px] h-full bg-black opacity-80">
                <DrawerTitle className="hidden">드로어 제목</DrawerTitle>
                <div className="py-3">
                    <div className="px-3">
                        <Logo
                            isInDrawer
                            onClickClose={() => {
                                setIsOpen(false);
                            }}
                        />
                    </div>
                    <Navigator />
                </div>
            </DrawerContent>
        </Drawer>
    );
};

const Header = ({ children }: { children: React.ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const { headerImgSrc } = useUiState();

    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = headerRef?.current?.scrollTop;

            console.log('scrollValue', scrollValue);

            setIsScrolled(scrollValue != 0);
        };

        headerRef?.current?.addEventListener('scroll', handleScroll);
        return () => headerRef?.current?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header ref={headerRef} className="relative overflow-y-auto w-full h-full">
            <section className="absolute top-0 left-0 w-full">
                <div className="relative h-[400px] w-full">
                    <Image
                        src={headerImgSrc || 'https://images.unsplash.com/photo-1707833558984-3293e794031c'}
                        alt="item"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
                    <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black opacity-40 w-full"></div>
                </div>
            </section>
            <section className={cn('sticky top-0 left-0 z-10', isScrolled && 'bg-black')}>
                <PagePadding>
                    <div className="h-[64px] flex flex-row justify-between items-center">
                        <article className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500">
                            <div>
                                <FiSearch size={24} />
                            </div>
                            <input
                                type="text"
                                placeholder="노래, 앨범, 아티스트, 팟캐스트, 검색"
                                className="h-full w-full bg-transparent outline-none text-white"
                            />
                        </article>
                        <HeaderDrawer>
                            <article className="lg:hidden">
                                <Logo />
                            </article>
                        </HeaderDrawer>
                        <article className="flex flex-row items-center gap-6">
                            <FaChromecast />
                            <UserIcon />
                        </article>
                    </div>
                </PagePadding>
            </section>
            <section className="relative">{children}</section>
        </header>
    );
};

export default Header;
