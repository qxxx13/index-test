import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import styled from "@emotion/styled";
import { Checkbox, Stack } from "@mui/material";

export const StyledCheckbox = styled(Checkbox)({
    width: 40,
    height: 40,
    color: "#C7C7C7",
    "&:hover": {
        color: "#A4A4A4",
    },
});

export const GridIcon = styled(GridViewOutlinedIcon)({
    fontSize: 35,
});

export const GridIconFilled = styled(GridViewOutlinedIcon)({
    fontSize: 35,
    color: "#00A0AB",
});

export const HorizontalIcon = styled(SplitscreenOutlinedIcon)({
    fontSize: 35,
});

export const HorizontalIconFilled = styled(SplitscreenOutlinedIcon)({
    fontSize: 35,
    color: "#00A0AB",
});

export const StyledStack = styled(Stack)({
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: "35px 35px 25px 0",
});
