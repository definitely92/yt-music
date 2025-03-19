'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { GoHome } from 'react-icons/go';
import { FiCompass, FiMusic, FiPlus } from 'react-icons/fi';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import PlayListNav from './PlayListNav';
import { dummyPlaylistArray } from '@/lib/dummyData';

interface Route {
    icon: React.ReactNode;
    label: string;
    href: string;
    isActive: boolean;
}

interface Playlist {
    id: number;
    owner: string;
    playlistName: string;
    songList: Song[];
}

interface Song {
    name: string;
    channelId: number;
    channel: string;
    src: string;
    imageSrc: string;
}

const Navigator: React.FC = () => {
    const pathname = usePathname();

    const routes: Route[] = useMemo(
        () => [
            {
                icon: <GoHome size={24} />,
                label: 'Home',
                href: '/',
                isActive: pathname === '/',
            },
            {
                icon: <FiCompass size={24} />,
                label: '둘러보기',
                isActive: pathname === '/explore',
                href: '/explore',
            },
            {
                icon: <FiMusic size={24} />,
                label: '보관함',
                isActive: pathname === '/library',
                href: '/library',
            },
        ],
        [pathname],
    );

    return (
        <div>
            <section className="flex flex-col gap-2 p-4">
                {routes.map((route) => (
                    <Link href={route.href} key={route.label}>
                        <div
                            className={cn(
                                'text-[16px] flex flex-row items-center gap-4 hover:bg-bg-netural-700 rounded-lg p-2',
                                route.isActive && 'bg-bg-netural-800',
                            )}
                        >
                            {route.icon}
                            <span>{route.label}</span>
                        </div>
                    </Link>
                ))}
            </section>
            <section className="px-6">
                <div className="w-full h-[1px] bg-neutral-700"></div>
            </section>
            <section className="px-6">
                <div className="flex flex-row items-center bg-neutral-800 my-6 p-2 rounded-3xl font-[200] justify-center gap-2  cursor-pointer hover:bg-neutral-700">
                    <FiPlus size={24} />
                    <span>새 재생목록</span>
                </div>
            </section>
            <section>
                <ul className="flex flex-col">
                    {dummyPlaylistArray.map((playlist: Playlist) => (
                        <PlayListNav key={playlist.id} playlist={playlist} />
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Navigator;
