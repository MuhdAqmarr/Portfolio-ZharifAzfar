import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user is on a mobile device
 * Checks both screen size and user agent
 */
export function useIsMobile(breakpoint: number = 768): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Check screen width
            const isSmallScreen = window.innerWidth < breakpoint;

            // Check user agent for mobile devices
            const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

            // Consider it mobile if either condition is true
            setIsMobile(isSmallScreen || isMobileUA);
        };

        // Initial check
        checkMobile();

        // Listen for resize events
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
}
