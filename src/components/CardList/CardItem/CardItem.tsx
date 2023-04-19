import React from 'react';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, CardContent, CardMedia, Stack, Typography, Rating, CardActionArea, Box, Skeleton } from '@mui/material';


import { ProductItemModel } from '../../../models/ProductItemModel';

const AddToFavorite = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#00A0AB',
    },
    '& .MuiRating-iconHover': {
        color: '#A4A4A4',
    },
});

type CardItemProps = {
    data: ProductItemModel;
    isLoaded: boolean;
};

export const CardItem: React.FC<CardItemProps> = ({ data, isLoaded }) => {
    return (
        <Card sx={{ width: 224, borderRadius: 3 }} elevation={2}>
            <CardActionArea disabled={isLoaded ? false : true}>
                {isLoaded ?
                    <CardMedia
                        sx={{ height: 300, bgcolor: 'gray' }}
                    >
                        {data.seen &&
                            <Box sx={{ position: 'absolute', top: 16, left: "30%", bgcolor: 'white', borderRadius: 3, width: 'fit-content', padding: 1 }}>Просмотрено</Box>
                        }
                    </CardMedia>
                    :
                    <Skeleton variant='rectangular' width={250} height={300} />
                }
            </CardActionArea>
            <CardContent>
                <Stack direction='row' justifyContent='space-between'>
                    {isLoaded ?
                        <>
                            <Typography variant='h5'>{data.price}</Typography>
                            <AddToFavorite
                                defaultValue={0}
                                icon={<FavoriteIcon />}
                                emptyIcon={<FavoriteIcon />}
                                max={1}
                            />
                        </>
                        :
                        <>
                            <Skeleton variant='rectangular' width={166} height={25} sx={{ borderRadius: '8px' }} />
                            <Skeleton variant='rectangular' width={25} height={25} sx={{ borderRadius: '8px', position: 'relative', left: 8 }} />
                        </>
                    }
                </Stack>
                {isLoaded ?
                    <>
                        <Typography variant='h6'>{data.title}</Typography>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography variant='body2'>{data.address}</Typography>
                            <Typography variant='body2'>321</Typography>
                        </Stack>
                    </>
                    :
                    <>
                        <Skeleton variant='rectangular' width={200} height={16} sx={{ borderRadius: '8px', mt: '10px' }} />
                        <Skeleton variant='rectangular' width={200} height={16} sx={{ borderRadius: '8px', mt: '10px' }} />
                    </>
                }

            </CardContent>
        </Card>
    );
};
