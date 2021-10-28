import React from 'react';
import useWindowSize from "./useWindowSize";

const ScreenSwitcher = ({mobile: Mobile, desktop: Desktop, ...rest}) => {
    const isMobile = useWindowSize().width <= 768;

    return isMobile ? <Mobile {...rest}/> : <Desktop {...rest}/>
}

export default ScreenSwitcher;