'use client';

import { IoMdPlayCircle } from 'react-icons/io';

interface PlayListNavProps {
    playlist: Playlist;
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
}

const PlayListNav: React.FC<PlayListNavProps> = ({ playlist }) => {
    // const { addSongList } = usePlayerState();

    // const { id, owner, playlistName, songList } = playlist;
    const { owner, playlistName } = playlist;

    const onClickPlay = () => {
        console.log('play');
    };

    return (
        <li className="mx-3 px-4 h-[56px] flex felx-row justify-between items-center hover:bg-nereal-700 rounded-lg group">
            <div>
                <div className="text-[14px]">{playlistName}</div>
                <div className="text-[12px]">{owner}</div>
            </div>
            <div
                onClick={() => {
                    onClickPlay();
                }}
                className="hidden group-hover:block cursor-pointer"
            >
                <IoMdPlayCircle size={30} />
            </div>
        </li>
    );
};

export default PlayListNav;
