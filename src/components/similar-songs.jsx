import { useSimilarSongs } from 'store/similar-songs'
import { RecommendationSong } from './recommendation-song'

export function SimilarSongs() {
    const { similarSongs } = useSimilarSongs()

    if (!similarSongs || similarSongs.length === 0) return <></>

    return (
        <section className="recommendation similar-songs">
            <h4 className="recommendation-title">Similar songs</h4>
            <div className="recommendation-songs">
                {similarSongs.map((song) => (
                    <RecommendationSong key={song.id} song={song} />
                ))}
            </div>
        </section>
    )
}
