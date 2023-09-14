import { create } from 'zustand'
import { getSimilarSongs } from 'api/get-similar-songs'

export const useSimilarSongs = create((set) => ({
    similarSongs: null,
    loadSimilarSongs: async (songId) => {
        const similarSongs = await getSimilarSongs(songId)
        set({ similarSongs })
    },
    resetSimilarSongs: () => {
        set({ similarSongs: null })
    },
}))
