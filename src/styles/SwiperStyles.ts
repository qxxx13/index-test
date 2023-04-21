import styled from "@emotion/styled";
import { MobileStepper, Box } from "@mui/material";

export const Stepper = styled(MobileStepper)({
    position: "absolute",
    bottom: 8,
    justifyContent: "center",
    backgroundColor: "transparent",
    "& .MuiMobileStepper-dotActive": {
        backgroundColor: "#00A0AB"
    },
    ".css-114p2tk-MuiMobileStepper-dot": {
        backgroundColor: "rgba(199, 199, 199, 0.26)"
    }
});

export const SwiperContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%"
});

export const BoxImage = styled(`img`)({
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
    pointerEvents: "none"
});
