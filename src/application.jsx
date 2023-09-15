import { Header } from 'components/header'
import { Content } from 'components/content'
import { Footer } from 'components/footer'
import { ShazamField } from 'components/shazam-field'
import { ShazamResult } from 'components/shazam-result'
import { OtherSongsArtist } from 'components/other-songs-artist'
import { SimilarSongs } from 'components/similar-songs'

export function Application() {
    return (
        <div className="app">
            <Header />
            <Content>
                <ShazamField />
                <ShazamResult />
                <div className="recommendations">
                    <OtherSongsArtist />
                    <SimilarSongs />
                </div>
            </Content>
            <Footer />
        </div>
    )
}
