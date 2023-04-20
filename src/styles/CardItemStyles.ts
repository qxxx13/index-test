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
    width: 224,
    borderRadius: 12
});

export const StyledBox = styled(Box)({
    position: "absolute",
    top: 16,
    left: "30%",
    backgroundColor: "white",
    borderRadius: 12,
    width: "fit-content",
    padding: "5px 8px 5px 8px"
});

export const StyledCardMedia = styled(CardMedia)({
    height: 300,
    backgroundColor: "gray"
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
