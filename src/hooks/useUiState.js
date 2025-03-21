import { create } from 'zustand';

export const useUiState = create((set) => ({
    homeCategory: '',
    headerImgSrc: 'https://images.unsplash.com/photo-1707833558984-3293e794031c',
    setHomeCategory: (value) => set({ homeCategory: value }),
    setHeaderImgSrc: (src) => set({ headerImgSrc: src }),
}));
