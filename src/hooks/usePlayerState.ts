import { create } from 'zustand';
import { Song } from '@/types';

interface PlayerState {
    activeSong: Song | null;
    prevPlayerQueue: Song[];
    nextPlayerQueue: Song[];
    isVisiblePlayer: boolean;
    setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
    addSongList: (songList: Song[]) => void;
    playNext: () => void;
    playBack: () => void;
}
const usePlayerState = create<PlayerState>((set) => ({
    activeSong: null,
    prevPlayerQueue: [],
    nextPlayerQueue: [],
    isVisiblePlayer: false,
    setIsVisiblePlayer: (isVisiblePlayer: boolean) => set(() => ({ isVisiblePlayer })),

    addSongList: (songList: Song[]) =>
        set((prev) => {
            const prevSong = prev.activeSong;
            const clonedSongList = [...songList];
            const currentSong = clonedSongList.splice(0, 1)?.[0];

            return {
                activeSong: currentSong,
                prevPlayerQueue: prevSong ? [prevSong, ...prev.prevPlayerQueue] : prev.prevPlayerQueue,
                nextPlayerQueue: [...clonedSongList],
                isVisiblePlayer: true,
            };
        }),
    playNext: () =>
        set((prev) => {
            const currentSong = prev.activeSong;
            const nextSrc = prev.nextPlayerQueue.splice(0, 1)?.[0];

            return {
                activeSong: nextSrc,
                prevPlayerQueue: [...(currentSong ? [currentSong] : []), ...prev.prevPlayerQueue],
                nextPlayerQueue: prev.nextPlayerQueue,
            };
        }),
    playBack: () =>
        set((prev) => {
            const currentSong = prev.activeSong;
            const prevSrc = prev.prevPlayerQueue.splice(0, 1)?.[0];

            return {
                activeSong: prevSrc,
                prevPlayerQueue: prev.prevPlayerQueue,
                nextPlayerQueue: [...(currentSong ? [currentSong] : []), ...prev.nextPlayerQueue],
            };
        }),
}));

export default usePlayerState;
