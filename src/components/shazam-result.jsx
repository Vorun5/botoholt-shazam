import { Artists } from './artists'
import { Avatar } from './avatar'
import { ReactComponent as ShazamIcon } from 'assets/shazam-icon.svg'
import { ReactComponent as YoutubeIcon } from 'assets/youtube-icon.svg'

export function ShazamResult() {
    const shazamResult = {
        status: 'success',
        username: 'Smurf_tv',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/309c7c07-6269-479d-8239-71a31ed35807-profile_image-70x70.png',
        song: {
            shazamStartTime: Date,
            shazamEndTime: Date,
            id: 939129,
            artcover:
                'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d4/a4/3c/d4a43c80-f475-41c2-125d-97936c928cf8/21UM1IM34355.rgb.jpg/400x400cc.jpg',
            subtitle: 'sanah & Vito Bambino',
            title: 'Ale jazz!',
            genres: {
                primary: 'Pop',
            },
            shazamUrl: 'https://www.shazam.com/track/552406075/ale-jazz',
            // Не знаю возможно ли получить ссылку на ютуб видео с треком,
            // но похоже на то https://github.com/dotX12/ShazamIO/blob/master/examples/recognize_track_youtube.py
            youtubeUrl: 'https://www.youtube.com/watch?v=hHb3owr6PQ',
            artists: [
                {
                    artwork: {
                        bgColor: '675c5a',
                        height: 2513,
                        url: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/b2/a6/3e/b2a63e37-e057-b87b-b8f6-11cf3303be93/pr_source.png/{w}x{h}bb.jpg',
                        width: 2513,
                    },
                    id: 12939492,
                    name: 'sahan',
                    appleMusicUrl:
                        'https://music.apple.com/artist/sanah/215896170',
                    // В get information about artist нет ссылки на shazam, но она ничем кроме домена не отличатся с appleMusicUrl
                    shazamUrl: 'https://music.apple.com/artist/sanah/215896170',
                },
                {
                    artwork: {
                        bgColor: 'd1d5d4',
                        height: 2540,
                        url: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/48/82/56/48825644-5d9e-4c7a-11be-9776af9ede15/d47ef2d4-6e80-43d6-85c2-3dd3d527befd_ami-identity-53045741255f402a44cf760f85a54016-2023-02-15T12-51-02.042Z_cropped.png/{w}x{h}bb.jpg',
                        width: 2540,
                    },
                    id: 1443869312,
                    name: 'Vito Bambino',
                    appleMusicUrl:
                        'https://music.apple.com/artist/vito-bambino/1443869312',
                    shazamUrl:
                        'https://music.apple.com/artist/vito-bambino/1443869312',
                },
            ],
        },
    }

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
                    <div className="recognized-song">
                        <img
                            className="recognized-song-cover"
                            src={shazamResult.song.artcover}
                            name={shazamResult.song.title}
                        />
                        <div className="recognized-song-info">
                            <span className="recognized-song-info-title">
                                {shazamResult.song.title}
                            </span>
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
                                    Shazam
                                </a>
                                {shazamResult.song.youtubeUrl && (
                                    <a
                                        className="song-link song-link-youtube"
                                        href={shazamResult.song.youtubeUrl}
                                    >
                                        <YoutubeIcon className="song-link-icon" />
                                        YouTube
                                    </a>
                                )}
                            </div>
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
