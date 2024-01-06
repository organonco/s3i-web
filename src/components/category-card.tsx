import { Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { StyledBox } from "./styled-box";


interface Props {
    icon: string
    name: string
}

export const CategoryCard: FC<Props> = (props) => {
    return (
        <StyledBox>
            <div style={{ width: '100%', height: 50, position: 'relative' }}>
                <Image
                    alt='Mountains'
                    src={props.icon}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <Typography variant='caption'>{props.name}</Typography>
        </StyledBox>
    )
}