import { useEffect, useRef } from 'react'

export function useKeydown(key, callback) {
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const handler = (event) => {
            if (event.key === key) {
                callbackRef.current(event)
            }
        }

        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [key])
}
