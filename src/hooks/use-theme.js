import { useEffect, useState } from 'react'

export function useTheme() {
    const themeFromLocalStorage = localStorage.getItem('theme') ?? 'system'
    const [theme, setTheme] = useState(themeFromLocalStorage)

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    function switchTheme(newTheme) {
        if (!newTheme && (theme === 'dark' || theme === 'light')) {
            setTheme(theme === 'dark' ? 'light' : 'dark')
            return
        }
        if (!newTheme) {
            newTheme = 'system'
        }
        setTheme(newTheme)
    }

    return [theme, switchTheme]
}
