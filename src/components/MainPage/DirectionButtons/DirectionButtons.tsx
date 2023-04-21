import React, { useCallback, useContext } from 'react';
import { GridIcon, GridIconFilled, HorizontalIcon, HorizontalIconFilled, StyledCheckbox, StyledStack } from '../../../styles/DirectionButtonsStyles';
import { AppContext } from '../../../context/AppContext';
import { ActionType } from '../../../context/Actions';

export const DirectionButtons: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);

    const changeDirection = useCallback(() => {
        dispatch({ type: ActionType.SET_GRID_VIEW, payload: !state.gridView });
    }, [dispatch, state.gridView]);

    return (
        <StyledStack>
            <StyledCheckbox icon={<GridIcon />} checkedIcon={<GridIconFilled />} checked={state.gridView} onClick={changeDirection} />
            <StyledCheckbox icon={<HorizontalIcon />} checkedIcon={<HorizontalIconFilled />} checked={!state.gridView} onClick={changeDirection} />
        </StyledStack>
    );
};
