import { useState } from 'react'
import { ReactComponent as ShazamIcon } from 'assets/shazam-icon.svg'

export function ShazamField() {
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
                className="shazam-field-bth"
                type="button"
                onClick={() => {
                    console.log('search')
                }}
            >
                <span className="text">
                    <ShazamIcon className="shazam-field-bth-icon" />
                </span>
            </button>
        </div>
    )
}
