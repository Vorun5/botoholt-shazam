import { create } from 'zustand'
import { getOtherSongsArtist } from 'api/get-other-songs-artist'

export const useOtherSongsArtist = create((set) => ({
    otherSongsArtist: null,
    artist: null,
    loadOtherSongsArtist: async (artist) => {
        const otherSongsArtist = await getOtherSongsArtist(artist.id)
        set({ otherSongsArtist, artist })
    },
    resetOtherSongsArtist: () => {
        set({ artist: null, otherSongsArtist: null })
    },
}))
