import { useState } from 'react'
import { useKeydown } from 'hooks/use-keydown'
import { useShazamResult } from 'store/shazam-result'
import { ReactComponent as ShazamIcon } from 'assets/shazam-icon.svg'
import { useSimilarSongs } from 'store/similar-songs'
import { useOtherSongsArtist } from 'store/other-songs-artist'

export function ShazamField() {
    const {
        loadShazamResult,
        changeShazamResultIsLoading,
        shazamResultIsLoading,
        shazamResult,
    } = useShazamResult()
    const { resetSimilarSongs } = useSimilarSongs()
    const { resetOtherSongsArtist } = useOtherSongsArtist()

    const [fieldValue, setFieldValue] = useState('')

    function shazaming() {
        if (shazamResultIsLoading) return
        if (fieldValue.length < 4) return
        resetOtherSongsArtist()
        resetSimilarSongs()
        changeShazamResultIsLoading(true)
        loadShazamResult(fieldValue)
    }

    useKeydown('Enter', shazaming)

    return (
        <div
            className={
                shazamResultIsLoading ||
                !shazamResult ||
                shazamResult.status === 'error'
                    ? 'shazam-field-center'
                    : ''
            }
        >
            <div className="shazam-field">
                <input
                    className="shazam-field-input"
                    type="text"
                    placeholder="Enter some twitch username or twitch link"
                    value={fieldValue}
                    onChange={(event) => {
                        if (shazamResultIsLoading) return
                        setFieldValue(event.target.value.replace(' ', ''))
                    }}
                />
                <button
                    className="button shazam-field-bth"
                    type="button"
                    onClick={shazaming}
                >
                    <span className="text">
                        <ShazamIcon className="shazam-field-bth-icon" />
                    </span>
                </button>
            </div>
        </div>
    )
}
