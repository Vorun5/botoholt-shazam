import { RecommendationSong } from './recommendation-song'
import { useOtherSongsArtist } from '../store/other-songs-artist'

export function OtherSongsArtist() {
    const { otherSongsArtist, artist } = useOtherSongsArtist()

    if (!otherSongsArtist || otherSongsArtist.length === 0) return <></>

    return (
        <section className="recommendation other-songs-artist">
            <h4 className="recommendation-title">
                Other songs by {artist.name}
            </h4>
            <div className="recommendation-songs">
                {otherSongsArtist.map((song) => (
                    <RecommendationSong key={song.id} song={song} />
                ))}
            </div>
        </section>
    )
}
