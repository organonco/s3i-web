import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { StyledBox } from "./box";

interface props { title: string, subTitle: string, imageURL: string }


export const CourseCard: FC<props> = (props) => {
    return (
        <StyledBox>
            {/* <Image src={props.imageURL} alt='course' width={170} height={100} style={{ objectFit: "cover" }} /> */}
            <div style={{ width: '100%', height: 150, position: 'relative' }}>
                <Image
                    alt='Mountains'
                    src={props.imageURL}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <Box sx={{ width: '100%', alignItems: 'start', display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography color='primary' variant='h7'>{props.title}</Typography>
                <Typography variant='caption'>{props.subTitle}</Typography>
            </Box>
        </StyledBox>
    )
}