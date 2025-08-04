export interface Playlist {
    id: number;
    owner: string;
    playlistName: string;
    songList: Song[];
    imageSrc: string;
}

export interface Song {
    name: string;
    channelId: number;
    channel: string;
    src: string;
    imageSrc: string;
}

export interface TopSong extends Song {
    prevRank: number;
    rank: number;
}
export interface Channel {
    id: number;
    name: string;
    subscribers: number;
    songList: Song[];
    playlistArray: Playlist[];
}
