import React from 'react';
import { Card, CardContent, Stack, CardActionArea, Skeleton } from '@mui/material';

export const CardItemSkeleton: React.FC = () => {
    return (
        <Card>
            <CardActionArea>
                <Skeleton variant='rectangular' width={250} height={300} />
            </CardActionArea>
            <CardContent>
                <Stack direction='row' justifyContent='space-between'>
                    <Skeleton variant='rectangular' width={166} height={25} sx={{ borderRadius: '8px' }} />
                    <Skeleton variant='rectangular' width={25} height={25} sx={{ borderRadius: '8px', position: 'relative', left: 8 }} />
                </Stack>
                <Skeleton variant='rectangular' width={200} height={16} sx={{ borderRadius: '8px', mt: '10px' }} />
                <Skeleton variant='rectangular' width={200} height={16} sx={{ borderRadius: '8px', mt: '10px' }} />
            </CardContent>
        </Card>
    );
};
