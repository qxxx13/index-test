import React, { useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardContent, CardActionArea } from '@mui/material';

import { ProductItemModel } from '../../../models/ProductItemModel';
import { AppContext } from '../../../context/AppContext';
import { AddToFavorite, StyledBox, StyledCard, StyledCardMedia, StyledStack, TypographyAddress, TypographyPrice, TypographyTitle } from '../../../styles/CardItemStyles';

type CardItemProps = {
    data: ProductItemModel;
};

export const CardItem: React.FC<CardItemProps> = ({ data }) => {
    const { state } = useContext(AppContext);
    const isLoading = state.isLoading;
    return (
        <StyledCard elevation={2}>
            <CardActionArea disabled={!isLoading ? false : true}>
                <StyledCardMedia
                    sx={{}}
                >
                    {data.seen &&
                        <StyledBox>Просмотрено</StyledBox>
                    }
                </StyledCardMedia>
            </CardActionArea>
            <CardContent>
                <StyledStack>
                    <TypographyPrice>{data.price}</TypographyPrice>
                    <AddToFavorite
                        defaultValue={0}
                        icon={<FavoriteIcon />}
                        emptyIcon={<FavoriteIcon />}
                        max={1}
                    />
                </StyledStack>
                <TypographyTitle>{data.title}</TypographyTitle>
                <StyledStack>
                    <TypographyAddress>{data.address}</TypographyAddress>
                    <TypographyAddress>321</TypographyAddress>
                </StyledStack>
            </CardContent>
        </StyledCard>
    );
};
