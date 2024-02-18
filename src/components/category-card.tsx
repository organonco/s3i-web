import { Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { StyledBox } from "./box";


interface Props {
    icon: string
    name: string
}

export const CategoryCard: FC<Props> = (props) => {
    return (
        <StyledBox>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image
                    alt=""
                    src={props.icon}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <Typography variant='h6' sx={{mt: 2}}>{props.name}</Typography>
        </StyledBox>
    )
}