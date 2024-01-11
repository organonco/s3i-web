import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";


interface Props {
    icon: string
    name: string
}

export const AddvertisedCard: FC<Props> = (props) => {
    return (
        <Box padding={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', alignItems: 'center' }}>
            <div style={{ width: '100%', height: 100, position: 'relative', }}>
                <Image
                    alt='Mountains'
                    src={props.icon}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <Typography variant='caption'>{props.name}</Typography>
        </Box>
    )
}