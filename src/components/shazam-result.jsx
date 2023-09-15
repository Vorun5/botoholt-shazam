import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Artists } from './artists'
import { Avatar } from './avatar'
import { useShazamResult } from 'store/shazam-result'
import { useOtherSongsArtist } from 'store/other-songs-artist'
import { useSimilarSongs } from 'store/similar-songs'
import { getTimeFromDate } from 'lib/get-time-from-date'
import { ReactComponent as ShazamIcon } from 'assets/shazam-icon.svg'
import { ReactComponent as YoutubeIcon } from 'assets/youtube-icon.svg'

export function ShazamResult() {
    const { t } = useTranslation()

    const {
        shazamResult,
        shazamResultIsLoading,
        changeShazamResultIsLoading,
        loadShazamResult,
    } = useShazamResult()
    const { loadOtherSongsArtist, resetOtherSongsArtist } =
        useOtherSongsArtist()
    const { loadSimilarSongs, resetSimilarSongs } = useSimilarSongs()

    useEffect(() => {
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
        return (
            <div className="shazam-result-loading">
                <ShazamIcon width={60} className="shazam-result-loading-icon" />
                <span className="shazam-result-loading-text">
                    {t('shazaming')}
                </span>
            </div>
        )
    }

    if (!shazamResult) return

    if (shazamResult.status === 'error')
        return (
            <div className="shazam-result-error">
                {shazamResult.errorType === 'streamer-offline' && (
                    <>
                        <img
                            className="shazam-result-error-img"
                            src="https://cdn.discordapp.com/attachments/1148689422716502066/1152244362227486821/PikaT.png"
                            alt="PikaT"
                        />
                        <span className="shazam-result-error-text">
                            {t('streamer-offline')}
                        </span>
                    </>
                )}
                {shazamResult.errorType === 'streamer-not-found' && (
                    <>
                        <img
                            className="shazam-result-error-img"
                            src="https://cdn.discordapp.com/attachments/1148689422716502066/1152244362500124692/PikaMeh.png"
                            alt="PikaMeh"
                        />
                        <span className="shazam-result-error-text">
                            {t('streamer-not-found')}
                        </span>
                    </>
                )}
                {shazamResult.errorType === 'unknown' && (
                    <>
                        <img
                            className="shazam-result-error-img"
                            src="https://cdn.discordapp.com/attachments/1148689422716502066/1152244362776940575/PikaO.png"
                            alt="PikaO"
                        />

                        <span className="shazam-result-error-text">
                            {t('unknown-error')}
                        </span>
                    </>
                )}
                {shazamResult.errorType === 'song-not-recognized' && (
                    <>
                        <img
                            className="shazam-result-error-img"
                            src="https://cdn.discordapp.com/attachments/1148689422716502066/1152244361975836772/PikaSad.png"
                            alt="PikaSad"
                        />
                        <span className="shazam-result-error-text">
                            {t('song-not-recognized')}
                        </span>
                    </>
                )}
            </div>
        )

    return (
        <section className="shazam-result">
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
                            {t('is-now-listening')}
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
                            {t('shazam-information')}
                        </h3>
                        <span className="shazam-info-time">
                            {t('start-time')}:{' '}
                            {getTimeFromDate(shazamResult.song.shazamStartTime)}
                        </span>
                        <span className="shazam-info-time">
                            {t('end-time')}:{' '}
                            {getTimeFromDate(shazamResult.song.shazamEndTime)}
                        </span>
                        <button
                            className="shazam-info-bth song-link song-link-shazam"
                            type="butoon"
                            onClick={() => {
                                if (shazamResultIsLoading) return
                                resetOtherSongsArtist()
                                resetSimilarSongs()
                                changeShazamResultIsLoading(true)
                                loadShazamResult(shazamResult.username)
                            }}
                        >
                            <ShazamIcon className="song-link-icon" />
                            <span className="song-link-text-full">
                                {t('shazam-streamer-again', {
                                    streamer: shazamResult.username,
                                })}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
