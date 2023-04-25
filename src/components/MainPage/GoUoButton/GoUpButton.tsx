import React, { useCallback, useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { StackButtonUp, StyledButton } from '../../../styles/MainPageStyles';
import { TypographyAddress } from '../../../styles/CardItemStyles';

export const GoUpButton: React.FC = () => {
    const [showUp, setShowUp] = useState(false);
    const [scroll, setScroll] = useState(0);

    const watchScroll = useCallback(() => {
        if (scroll > 100) {
            setShowUp(true);
        } else setShowUp(false);
    }, [scroll]);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [watchScroll]);

    return (
        <StackButtonUp>
            <StyledButton showUp={showUp} onClick={() => window.scrollTo({ top: 0 })}>
                <KeyboardArrowUpIcon />
                <TypographyAddress>Вверх</TypographyAddress>
            </StyledButton>
        </StackButtonUp>
    );
};
