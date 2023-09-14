import { useState } from 'react'
import { useShazamResult } from 'store/shazam-result'
import { ReactComponent as ShazamIcon } from 'assets/shazam-icon.svg'
import { useSimilarSongs } from 'store/similar-songs'
import { useOtherSongsArtist } from 'store/other-songs-artist'

export function ShazamField() {
    const { loadShazamResult, changeShazamResultIsLoading } = useShazamResult()
    const { resetSimilarSongs } = useSimilarSongs()
    const { resetOtherSongsArtist } = useOtherSongsArtist()
    const [fieldValue, setFieldValue] = useState('')

    return (
        <div className="shazam-field">
            <input
                className="shazam-field-input"
                type="text"
                placeholder="Enter some twitch username or twitch link"
                value={fieldValue}
                onChange={(event) => {
                    setFieldValue(event.target.value.replace(' ', ''))
                }}
            />
            <button
                className="button shazam-field-bth"
                type="button"
                onClick={() => {
                    resetOtherSongsArtist()
                    resetSimilarSongs()
                    changeShazamResultIsLoading(true)
                    loadShazamResult(fieldValue)
                }}
            >
                <span className="text">
                    <ShazamIcon className="shazam-field-bth-icon" />
                </span>
            </button>
        </div>
    )
}
