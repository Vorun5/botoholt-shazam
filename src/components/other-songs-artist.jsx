import PropTypes from 'prop-types'
import { RecommendationSong } from './recommendation-song'

export function OtherSongsArtist({ songs, artist }) {
    return (
        <section className="recommendation other-songs-artist">
            <h4 className="recommendation-title">
                Other songs by {artist.name}
            </h4>
            <div className="recommendation-songs">
                {songs.map((song) => (
                    <RecommendationSong key={song.id} song={song} />
                ))}
            </div>
        </section>
    )
}

OtherSongsArtist.propTypes = {
    songs: PropTypes.array,
    artist: PropTypes.object,
}
