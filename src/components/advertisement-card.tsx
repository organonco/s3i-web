import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";


interface Props {
    icon: string
    name: string
}

export const AddvertisedCard: FC<Props> = (props) => {
    return (
        <Box padding={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
            <div style={{ width: '100%', height: 130, position: 'relative', marginBottom: 40}}>
                <Image
                    alt='Mountains'
                    src={props.icon}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <Typography variant='h5' sx={{fontWeight: 'bold'}} color='primary.dark'>{props.name}</Typography>
        </Box>
    )
}