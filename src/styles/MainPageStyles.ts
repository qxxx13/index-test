import { styled } from "@mui/material/styles";
import { Box, Button, CircularProgress, Stack, IconButton } from "@mui/material";

export const ButtonMore = styled(Button)({
    width: 125,
    margin: "24px 0 24px 0",
    fontSize: 13,
    color: "#00A0AB",
    borderRadius: 25,
    textTransform: "none",
    fontWeight: 600
});

export const StyledStack = styled(Stack)({
    alignItems: "center"
});

export const PreloaderBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    margin: "16px 0 16px 0"
});

export const StyledPreloaderDeterminate = styled(CircularProgress)({
    color: "#ABCFD0"
});

export const StyledPreloaderIndeterminate = styled(CircularProgress)({
    color: "#00A0AB",
    animationDuration: "550ms",
    position: "absolute",
    "& .circularProgressClasses.circle": {
        strokeLinecap: "round"
    }
});

export const UpButton = styled(IconButton)({
    position: "fixed",
    bottom: 63,
    backgroundColor: "white",
    borderRadius: 30,
    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
    width: 106,
    height: 50,
    justifyContent: "space-around",
    padding: 16,
    "&:hover": {
        backgroundColor: "white"
    }
});

export const StackButtonUp = styled(Stack)({
    flexDirection: "row",
    marginRight: 25,
    justifyContent: "flex-end"
});
