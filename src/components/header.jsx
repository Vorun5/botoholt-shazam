import { ReactComponent as Logo } from 'assets/logo.svg'

export function Header() {
    return (
        <header className="header">
            <a className="header-logo" href="https://bho.lt/">
                <Logo />
            </a>
        </header>
    )
}
