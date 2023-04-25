import React, { useContext } from 'react';
import { CardContent, Stack, CardActionArea, Skeleton, Box } from '@mui/material';
import { AppContext } from '../../../context/AppContext';
import { StyledCard, StyledCardMedia } from '../../../styles/CardItemStyles';
import { StackRow } from '../../../styles/GlobalStyles';

export const CardItemSkeleton: React.FC = () => {
    const { state } = useContext(AppContext);

    return (
        <StyledCard elevation={2} sx={{ flexDirection: state.gridView ? 'column' : 'row', width: state.gridView ? 224 : 450 }}>
            <CardActionArea sx={{ width: state.gridView ? 'auto' : 156 }} disabled>
                <StyledCardMedia sx={{ height: state.gridView ? 260 : 134, width: state.gridView ? 'auto' : 156 }}>
                    <Skeleton variant='rectangular' sx={{ height: state.gridView ? 260 : 134 }} />
                    <Box sx={{ bgcolor: 'white', borderRadius: '3px', width: 56, height: 8, position: 'absolute' }} />
                </StyledCardMedia>

            </CardActionArea>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: state.gridView ? 'auto' : '100%', justifyContent: 'space-between' }}>
                <Stack>
                    <StackRow>
                        <Skeleton variant='rectangular' height={25} sx={{ borderRadius: '8px', width: state.gridView ? 166 : 235 }} />
                        <Skeleton variant='rectangular' width={25} height={25} sx={{ borderRadius: '8px', position: 'relative', left: 8 }} />
                    </StackRow>
                </Stack>

                <Stack>
                    <Skeleton variant='rectangular' height={16} sx={{ borderRadius: '8px', mt: '10px', width: 'calc(100% + 8px)' }} />
                    <Skeleton variant='rectangular' height={16} sx={{ borderRadius: '8px', mt: '10px', width: 'calc(100% + 8px)' }} />
                </Stack>
            </CardContent>
        </StyledCard>
    );
};
