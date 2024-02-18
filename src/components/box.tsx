import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode,
    backgroundColor?: String,
}
export const StyledBox: FC<Props> = (props) => {
    return (
        <Box padding={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', alignItems: 'center', cursor: 'pointer', "&:hover": { transform: "scale3d(1.02, 1.02, 1)" }, borderRadius: 5, borderColor: "#efefef", borderWidth: 2}}>
            {props.children}
        </Box>
    )
}