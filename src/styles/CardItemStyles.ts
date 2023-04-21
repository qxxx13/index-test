import { styled } from "@mui/material/styles";
import { Card, CardMedia, Rating, Box, Stack, Typography } from "@mui/material";

export const AddToFavorite = styled(Rating)({
    "& .MuiRating-iconFilled": {
        color: "#00A0AB"
    },
    "& .MuiRating-iconHover": {
        color: "#A4A4A4"
    }
});

export const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    width: 224,
    borderRadius: 12
});

export const StyledCardMedia = styled(CardMedia)({
    height: 260
});

export const StyledBox = styled(Box)({
    position: "absolute",
    top: 16,
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: 12,
    width: "fit-content",
    padding: "5px 8px 5px 8px"
});

export const StyledStack = styled(Stack)({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
});

export const TypographyTitle = styled(Typography)({
    fontSize: 14,
    fontWeight: 550
});

export const TypographyAddress = styled(Typography)({
    fontSize: 12,
    fontWeight: 400,
    color: "#8F8F8F"
});

export const TypographyPrice = styled(Typography)({
    fontSize: 22,
    fontWeight: 700
});
