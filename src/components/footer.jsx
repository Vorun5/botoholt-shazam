import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'hooks/use-theme'
import { useOnClickOutside } from 'hooks/use-on-click-outside'
import { ReactComponent as GithubIcon } from 'assets/github.svg'
import { ReactComponent as DiscordIcon } from 'assets/discord.svg'

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="footer-content">
                <h1 className="footer-title">{t('site-description')}</h1>
                <div className="footer-actions">
                    <div className="footer-settings">
                        <Themes />
                        <Languages />
                    </div>
                    <div className="footer-links">
                        <span className="footer-links-title">
                            {t('stay-connected')}
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
                    {t('support-service')}
                </a>
            </div>
        </footer>
    )
}

function Themes() {
    const { t } = useTranslation()
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
            <span className="footer-setting-title">{t('select-theme')}</span>
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
                    {t(`themes.${currentTheme}`)}
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
                                {t(`themes.${theme}`)}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function Languages() {
    const { t, i18n } = useTranslation()
    const [languageDropdownIsOpen, setLanguageDropdownIsOpen] = useState(false)
    const ref = useRef()

    useOnClickOutside(ref, () => {
        if (languageDropdownIsOpen) {
            setLanguageDropdownIsOpen(false)
        }
    })

    return (
        <div className="languages" ref={ref}>
            <span className="footer-setting-title">{t('select-language')}</span>
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
                    {t(`languages.${i18n.language}`)}
                </button>
                <div className="dropdown-elements">
                    {['en', 'ru', 'lt'].map((language) => {
                        return (
                            <button
                                key={language}
                                className={`dropdown-element ${
                                    language === i18n.language
                                        ? 'focused-dropdown-element'
                                        : ''
                                }`}
                                type="button"
                                onClick={() => {
                                    i18n.changeLanguage(language)
                                    setLanguageDropdownIsOpen(false)
                                }}
                            >
                                {t(`languages.${language}`)}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
