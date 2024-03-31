import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface Props {
    name: string,
    imageUrl: any,
    height?: Number
}

const isMobile = (window.innerWidth <= 768)

export const PartnerCard: FC<Props> = (props) => {
    const styles = {
        div: {
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: 'white',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
        },
        image: {
            width: '80%',
            height: 'auto',
            'object-fit': 'cover',
        },
        mainDiv: {
            width: 380,
            display: 'flex',
            flexDirection: 'column',
            'align-items': 'center',
            'justify-content': 'center',
        }
    }
    return (
        <div style={styles.mainDiv}>
            <div style={styles.div}>
                <Image src={props.imageUrl} alt={props.name} width={200} height={200} style={styles.image} ></Image>
            </div>
            <Typography fontSize={isMobile ? 20 : 30} color="white" variant="h4" pt={2}>{props.name}</Typography>
        </div>

    )
}