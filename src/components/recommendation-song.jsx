import PropTypes from 'prop-types'
import { Artists } from './artists'
import { ReactComponent as ShazamIcon } from 'assets/shazam-icon.svg'
import { ReactComponent as YoutubeIcon } from 'assets/youtube-icon.svg'

export function RecommendationSong({ song }) {
    return (
        <div className="recommendation-song">
            <img className="recommendation-song-cover" src={song.artcover} />
            <div className="recommendation-song-info">
                <span className="recommendation-song-info-title">
                    {song.title}
                </span>
                <Artists artists={song.artists} />
            </div>
            <div className="recommendation-song-links song-links">
                <a className="song-link song-link-shazam" href={song.shazamUrl}>
                    <ShazamIcon className="song-link-icon" />
                    <span className="song-link-text">Shazam</span>
                </a>
                {song.youtubeUrl && (
                    <a
                        className="song-link song-link-youtube"
                        href={song.youtubeUrl}
                    >
                        <YoutubeIcon className="song-link-icon" />
                        <span className="song-link-text">YouTube</span>
                    </a>
                )}
            </div>
        </div>
    )
}

RecommendationSong.propTypes = {
    song: PropTypes.object,
}
