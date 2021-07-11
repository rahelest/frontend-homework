import { useEffect } from 'react'

/**
 * Based on https://webman.pro/blog/how-to-detect-and-test-click-outside-in-react/
 *
 * Note: This functionality is missing a test. Unfortunately I couldn't make it work.
 */
const useClickOutside = (ref: any, isOpen: boolean, onClick: () => void) => {
  useEffect(() => {
    if (!ref?.current) {
      return
    }

    const handleClickOutside = (e: Event) => {
      // @ts-ignore
      if (onClick && isOpen && !ref.current.contains(e.target)) {
        onClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, isOpen, onClick])
}
export default useClickOutside
