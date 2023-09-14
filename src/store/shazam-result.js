import { create } from 'zustand'
import { getShazamResult } from 'api/get-shazam-result'

export const useShazamResult = create((set) => ({
    shazamResult: null,
    shazamResultIsLoading: false,
    changeShazamResultIsLoading: (isLoading) => {
        set({ shazamResultIsLoading: isLoading })
    },
    loadShazamResult: async (source) => {
        const shazamResult = await getShazamResult(source)
        set({ shazamResultIsLoading: false, shazamResult })
    },
}))
