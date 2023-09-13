import PropTypes from 'prop-types'
import { RecommendationSong } from './recommendation-song'

export function SimilarSongs({ songs }) {
    return (
        <section className="recommendation similar-songs">
            <h4 className="recommendation-title">Similar songs</h4>
            <div className="recommendation-songs">
                {songs.map((song) => (
                    <RecommendationSong key={song.id} song={song} />
                ))}
            </div>
        </section>
    )
}

SimilarSongs.propTypes = {
    songs: PropTypes.array,
}
