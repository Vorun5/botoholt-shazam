import { Artists } from './artists'
import { Avatar } from './avatar'
import { useShazamResult } from 'store/shazam-result'
import { useOtherSongsArtist } from 'store/other-songs-artist'
import { useSimilarSongs } from 'store/similar-songs'
import { getTimeFromDate } from 'lib/get-time-from-date'
import { ReactComponent as ShazamIcon } from 'assets/shazam-icon.svg'
import { ReactComponent as YoutubeIcon } from 'assets/youtube-icon.svg'
import { useEffect } from 'react'

export function ShazamResult() {
    const { shazamResult, shazamResultIsLoading } = useShazamResult()
    const { loadOtherSongsArtist, resetOtherSongsArtist } =
        useOtherSongsArtist()
    const { loadSimilarSongs, resetSimilarSongs } = useSimilarSongs()

    useEffect(() => {
        console.log(shazamResult)
        if (shazamResult && shazamResult.status === 'success') {
            loadOtherSongsArtist(shazamResult.song.artists[0])
            loadSimilarSongs(shazamResult.song.id)
        } else {
            resetOtherSongsArtist()
            resetSimilarSongs()
        }
    }, [
        loadOtherSongsArtist,
        loadSimilarSongs,
        resetOtherSongsArtist,
        resetSimilarSongs,
        shazamResult,
    ])

    if (shazamResultIsLoading) {
        return <span>Shazaming...</span>
    }

    if (!shazamResult) return <></>

    return (
        <section className="shazam-result">
            {shazamResult.status === 'success' ? (
                <div className="shazam-result-success">
                    <div className="shazam-result-streamer streamer">
                        <Avatar
                            src={shazamResult.avatar}
                            name={shazamResult.username}
                            className="streamer-avatar"
                        />
                        <span>
                            <a
                                className="streamer-name"
                                href={`https://twitch.tv/${shazamResult.username.toLowerCase()}`}
                            >
                                {shazamResult.username}
                            </a>
                            <span className="streamer-description">
                                is now listening
                            </span>
                        </span>
                    </div>
                    <div className="shazam-result-success-info">
                        <article className="recognized-song">
                            <div className="recognized-song-cover">
                                <img
                                    className="recognized-song-cover-img"
                                    src={shazamResult.song.artcover}
                                    name={shazamResult.song.title}
                                />
                            </div>
                            <div className="recognized-song-info">
                                <h3 className="recognized-song-info-title">
                                    {shazamResult.song.title}
                                </h3>
                                <Artists artists={shazamResult.song.artists} />
                                <span className="recognized-song-info-genre">
                                    {shazamResult.song.genres.primary}
                                </span>
                                <div className="recognized-song-info-links song-links">
                                    <a
                                        className="song-link song-link-shazam"
                                        href={shazamResult.song.shazamUrl}
                                    >
                                        <ShazamIcon className="song-link-icon" />
                                        <span className="song-link-text-full">
                                            Shazam
                                        </span>
                                    </a>
                                    {shazamResult.song.youtubeUrl && (
                                        <a
                                            className="song-link song-link-youtube"
                                            href={shazamResult.song.youtubeUrl}
                                        >
                                            <YoutubeIcon className="song-link-icon" />
                                            <span className="song-link-text-full">
                                                YouTube
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                        <div className="shazam-result-success-info-divider" />
                        <div className="shazam-info">
                            <h3 className="shazam-info-title">
                                Shazam information
                            </h3>
                            <span className="shazam-info-time">
                                Start time:{' '}
                                {getTimeFromDate(
                                    shazamResult.song.shazamStartTime,
                                )}
                            </span>
                            <span className="shazam-info-time">
                                End time:{' '}
                                {getTimeFromDate(
                                    shazamResult.song.shazamEndTime,
                                )}
                            </span>
                            <button
                                className="shazam-info-bth song-link song-link-shazam"
                                type="butoon"
                                onClick={() => {
                                    console.log('shazam')
                                }}
                            >
                                <ShazamIcon className="song-link-icon" />
                                <span className="song-link-text-full">
                                    {shazamResult.username} again
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {shazamResult.errorType === 'song-not-recognized' && (
                        <span>Song not recognized</span>
                    )}
                    {shazamResult.errorType === 'streamer-offline' && (
                        <span>Streamer offline</span>
                    )}
                    {shazamResult.errorType === 'streamer-not-found' && (
                        <span>Streamer not found</span>
                    )}
                    {shazamResult.errorType === 'unknown' && (
                        <span>Unknown error</span>
                    )}
                </>
            )}
        </section>
    )
}
