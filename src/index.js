import React from 'react'

const ScrollRestorerContext = React.createContext();

export const ScrollRestorer = ({children}) => {
    const scrollStateRef = React.useRef({});

    return <ScrollRestorerContext.Provider value={scrollStateRef}>
        {children}
    </ScrollRestorerContext.Provider>
}

export const useScrollRestorer = (uniqueKey, depsArray = []) => {
    const scrollStateRef = React.useContext(ScrollRestorerContext);

    const saveScroll = React.useCallback((_) => {
        if (document.body.offsetHeight > window.innerHeight) {
            scrollStateRef.current[`_${uniqueKey}_scrollX`] = window.scrollX;
            scrollStateRef.current[`_${uniqueKey}_scrollY`] = window.scrollY;
        }
    }, [uniqueKey, scrollStateRef]);
    
    /* eslint-disable react-hooks/exhaustive-deps */
    const restoreScroll = React.useCallback(() => {
        window.scrollTo(
            scrollStateRef.current[`_${uniqueKey}_scrollX`] || 0,
            scrollStateRef.current[`_${uniqueKey}_scrollY`] || 0
        );
    }, [uniqueKey, scrollStateRef, ...depsArray]);

    React.useLayoutEffect(() => {
        return () => {
            saveScroll();
        }
    }, [saveScroll]);

    React.useEffect(() => {
        restoreScroll();
    }, [restoreScroll]);
    
    React.useEffect(() => {
        document.addEventListener("scroll", saveScroll);
        return () => {
            document.removeEventListener("scroll", saveScroll);
        }
    }, [saveScroll]);

    return scrollStateRef;
};
