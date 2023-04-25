import React, { useContext } from 'react';
import { CardContent, Stack, CardActionArea, Skeleton, Box } from '@mui/material';
import { AppContext } from '../../../context/AppContext';
import { StyledCard, StyledCardActionArea, StyledCardContent, StyledCardMedia } from '../../../styles/CardItemStyles';
import { StackRow } from '../../../styles/GlobalStyles';

export const CardItemSkeleton: React.FC = () => {
    const { state } = useContext(AppContext);

    return (
        <StyledCard elevation={2} gridView={state.gridView}>
            <StyledCardActionArea gridView={state.gridView} disabled>
                <StyledCardMedia gridView={state.gridView}>
                    <Skeleton variant='rectangular' sx={{ height: state.gridView ? 260 : 134 }} />
                    <Box sx={{ bgcolor: 'white', borderRadius: '3px', width: 56, height: 8, position: 'absolute' }} />
                </StyledCardMedia>

            </StyledCardActionArea>
            <StyledCardContent gridView={state.gridView}>
                <Stack>
                    <StackRow>
                        <Skeleton variant='rectangular' height={25} sx={{ borderRadius: '8px', width: state.gridView ? 166 : 235 }} />
                        <Skeleton variant='rectangular' width={25} height={25} sx={{ borderRadius: '8px', position: 'relative', left: 8 }} />
                    </StackRow>
                </Stack>
            </StyledCardContent>
        </StyledCard>
    );
};
