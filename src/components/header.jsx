import { ReactComponent as Logo } from 'assets/logo.svg'

export function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <Logo />
            </div>
        </header>
    )
}
