export interface Playlist {
    id: number;
    owner: string;
    playlistName: string;
    songList: Song[];
}

export interface Song {
    id: number;
    title: string;
    artist: string;
    album: string;
    duration: number;
}

export interface Channel {
    id: number;
    name: string;
    imageSrc: string;
}
