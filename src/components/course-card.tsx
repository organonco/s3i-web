import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { StyledImage } from ".";
import { StyledBox } from "./box";

interface props { title: string, subTitle: string, imageURL: string }


export const CourseCard: FC<props> = (props) => {
    return (
        <StyledBox backgroundColor={'background.paper'}>
            <div style={{ width: '100%', position: 'relative', objectFit: 'cover', height: "100%" }}>
                <StyledImage imageURL={props.imageURL} />
            </div>
            <Box sx={{ width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'column', gap: 1, marginTop: 3, marginX: 4 }}>
                <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <Typography color='primary' fontWeight={'bold'} fontSize={18}>{props.title}</Typography>
                    <Typography variant="caption" color="white" sx={{ backgroundColor: '#2D6276', borderRadius: 5, paddingY: 1, paddingX: 2 }}> سجل الآن </Typography>
                </Box>
                <Typography color='primary.dark' fontWeight={'bold'} fontSize={12} textAlign={'right'} textOverflow={'ellipsis'} noWrap >{props.subTitle}</Typography>
            </Box>
        </StyledBox>
    )
}
