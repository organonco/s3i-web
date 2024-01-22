import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { StyledImage } from ".";
import { StyledBox } from "./box";

interface props { title: string, subTitle: string, imageURL: string }


export const CourseCard: FC<props> = (props) => {
    return (
        <StyledBox>
            {/* <Image src={props.imageURL} alt='course' width={170} height={100} style={{ objectFit: "cover" }} /> */}
            <div style={{ width: '100%', height: 150, position: 'relative' }}>
                <StyledImage imageURL={props.imageURL} />
            </div>
            <Box sx={{ width: '100%', alignItems: 'start', display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography color='primary' variant='h7'>{props.title}</Typography>
                <Typography variant='caption'>{props.subTitle}</Typography>
            </Box>
        </StyledBox>
    )
}