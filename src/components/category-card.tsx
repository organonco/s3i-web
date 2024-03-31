import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { StyledBox } from "./box";


interface Props {
    icon: string
    name: string
}

const isMobile = (window.innerWidth <= 768)

const styles = {
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        cursor: 'pointer',
        "&:hover": {
            transform: "scale3d(1.02, 1.02, 1)"
        },
        borderRadius: 2,
        height: 50,
        backgroundColor: 'primary.main',
        width: 'max-content'
    },
    image: {
    },
    text: {
        marginX: 1,
        fontSize: isMobile ? 15 : 20,
        color: 'white'
    }
}

export const CategoryCard: FC<Props> = (props) => {
    return (
        <Box padding={1} sx={styles.box}>
            <Image
                alt=""
                src={props.icon}
                width={40}
                height={40}
                objectFit="contain"
                style={styles.image}
            />
            <Typography sx={styles.text} variant='h6'>{props.name}</Typography>
        </Box>
    )
}