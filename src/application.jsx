import { useTheme } from 'hooks/use-theme'
import { Header } from 'components/header'
import { Content } from 'components/content'
import { Footer } from 'components/footer'
import { ShazamField } from './components/shazam-field'
import { ShazamResult } from './components/shazam-result'

export function Application() {
    useTheme()

    return (
        <div className="app">
            <Header />
            <Content>
                <ShazamField />
                <ShazamResult />
            </Content>
            <Footer />
        </div>
    )
}
