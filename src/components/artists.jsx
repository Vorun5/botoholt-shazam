import PropTypes from 'prop-types'
import { Avatar } from './avatar'

export function Artists({ artists }) {
    return (
        <div className="artists">
            {artists.map((artist, index) => {
                const avatarUrl = artist.artwork.url
                    .replace('{w}', '40')
                    .replace('{h}', '40')

                const needAmpersand = index !== 0

                return (
                    <div key={artist.id} className="artist">
                        {needAmpersand && (
                            <span className="artist-ampersand"> & </span>
                        )}
                        <Avatar
                            className="artist-avatar"
                            name={artist.name}
                            src={avatarUrl}
                        />
                        <a className="artist-name" href={artist.shazamUrl}>
                            {artist.name}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

Artists.propTypes = {
    artists: PropTypes.array.isRequired,
}
