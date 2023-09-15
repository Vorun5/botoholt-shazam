import { useState, useRef } from 'react'
import { useTheme } from 'hooks/use-theme'
import { useOnClickOutside } from 'hooks/use-on-click-outside'
import { ReactComponent as GithubIcon } from 'assets/github.svg'
import { ReactComponent as DiscordIcon } from 'assets/discord.svg'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1 className="footer-title">
                    Botoholt Shazam - a service for easily shazaming any stream
                    on Twitch
                </h1>
                <div className="footer-actions">
                    <div className="footer-settings">
                        <Themes />
                        <Languages />
                    </div>
                    <div className="footer-links">
                        <span className="footer-links-title">
                            Stay connected
                        </span>
                        <a
                            className="footer-link"
                            href="https://discord.gg/BgAxx46F4e"
                        >
                            <DiscordIcon className="footer-link-icon" />
                        </a>
                        <a
                            className="footer-link"
                            href="https://github.com/Vorun5/botoholt-shazam"
                        >
                            <GithubIcon className="footer-link-icon" />
                        </a>
                    </div>
                </div>
                <span className="footer-creators">
                    Created with love by{' '}
                    <a
                        className="footer-creator"
                        href="https://twitch.tv/vorun5"
                    >
                        @Vorun5
                    </a>{' '}
                    <a
                        className="footer-creator"
                        href="https://twitch.tv/urbinholt"
                    >
                        @Urbinholt
                    </a>{' '}
                    and{' '}
                    <a
                        className="footer-creator"
                        href="https://twitch.tv/montagerr_"
                    >
                        @montagerr_
                    </a>
                </span>
                <a
                    className="footer-support"
                    href="https://boosty.to/botoholt/donate"
                >
                    Support service
                </a>
            </div>
        </footer>
    )
}

function Themes() {
    const [currentTheme, switchTheme] = useTheme()
    const [themeDropdownIsOpen, setThemeDropdownIsOpen] = useState(false)
    const ref = useRef()

    useOnClickOutside(ref, () => {
        if (themeDropdownIsOpen) {
            setThemeDropdownIsOpen(false)
        }
    })

    return (
        <div className="themes" ref={ref}>
            <span className="footer-setting-title">Select theme</span>
            <div
                className={`dropdown ${
                    themeDropdownIsOpen ? 'dropdown-open' : ''
                }`}
                type="button"
            >
                <button
                    className="dropdown-element selected-dropdown-element"
                    onClick={() => {
                        setThemeDropdownIsOpen(!themeDropdownIsOpen)
                    }}
                >
                    {currentTheme}
                </button>
                <div className="dropdown-elements">
                    {['system', 'light', 'dark'].map((theme) => {
                        return (
                            <button
                                key={theme}
                                className={`dropdown-element ${
                                    theme === currentTheme
                                        ? 'focused-dropdown-element'
                                        : ''
                                }`}
                                type="button"
                                onClick={() => {
                                    switchTheme(theme)
                                    setThemeDropdownIsOpen(false)
                                }}
                            >
                                {theme}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function Languages() {
    const [currentLanguage, switchLanguage] = useState('ru')
    const [languageDropdownIsOpen, setLanguageDropdownIsOpen] = useState(false)
    const ref = useRef()

    useOnClickOutside(ref, () => {
        if (languageDropdownIsOpen) {
            setLanguageDropdownIsOpen(false)
        }
    })

    return (
        <div className="languages" ref={ref}>
            <span className="footer-setting-title">Select language</span>
            <div
                className={`dropdown ${
                    languageDropdownIsOpen ? 'dropdown-open' : ''
                }`}
                type="button"
            >
                <button
                    className="dropdown-element selected-dropdown-element"
                    onClick={() => {
                        setLanguageDropdownIsOpen(!languageDropdownIsOpen)
                    }}
                >
                    {currentLanguage}
                </button>
                <div className="dropdown-elements">
                    {['ru', 'en', 'lt'].map((language) => {
                        return (
                            <button
                                key={language}
                                className={`dropdown-element ${
                                    language === currentLanguage
                                        ? 'focused-dropdown-element'
                                        : ''
                                }`}
                                type="button"
                                onClick={() => {
                                    switchLanguage(language)
                                    setLanguageDropdownIsOpen(false)
                                }}
                            >
                                {language}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
