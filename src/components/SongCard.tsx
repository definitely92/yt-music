'use client';

import { TopSong } from '@/types';
import { FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import IconButton from '@/components/elements/IconButton';
import Image from 'next/image';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';
import usePlayerState from '@/hooks/usePlayerState';

const SongCard = ({ song }: { song: TopSong }) => {
    const { addSongList } = usePlayerState();

    const onClickSongCard = () => {
        addSongList([song]);
    };

    return (
        <article
            className="flex flex-row items-center gap-4 h-[48px] w-full
        relative group"
        >
            <div className="w-[48px] h-[48px] relative">
                <Image src={song.imageSrc} alt={song.name} className="object-cover" width={48} height={48} />
                <section
                    onClick={onClickSongCard}
                    className="hidden group-hover:flex top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer"
                >
                    <FiPlayCircle size={20} />
                </section>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div>
                    {song.rank === song.prevRank ? (
                        <FaCircle size={20} />
                    ) : song.rank > song.prevRank ? (
                        <AiOutlineCaretUp size={10} color="#3ca63f" />
                    ) : (
                        <AiOutlineCaretDown size={10} color="#ff0000" />
                    )}
                </div>
                <div>{song.rank + 1}</div>
            </div>
            <div>
                <div>{song.name}</div>
            </div>
            <section className="hidden group-hover:flex absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)]">
                <IconButton icon={<FiThumbsDown size={20} />} onClickIconButton={() => {}} />
                <IconButton icon={<FiThumbsUp size={20} />} onClickIconButton={() => {}} />
                <IconButton icon={<FiMoreVertical size={20} />} onClickIconButton={() => {}} />
            </section>
        </article>
    );
};

export default SongCard;
