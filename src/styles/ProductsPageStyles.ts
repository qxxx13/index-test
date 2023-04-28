import { styled } from "@mui/material/styles";
import { Box, Paper, Stack, Typography, Container } from "@mui/material";

type ProductPagePaperProps = {
    isDesktop: boolean;
};

export const ProductPageContainer = styled(Container)({
    marginTop: 16,
});

export const ProductPagePaper = styled(Paper)<ProductPagePaperProps>(({ isDesktop }) => ({
    minHeight: 255,
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
}));

export const ProductPageBox = styled(Box)({
    minWidth: 300,
    maxWidth: 400,
    height: 255,
    position: "relative",
});

export const ProductPageStack = styled(Stack)({
    marginLeft: 16,
});
