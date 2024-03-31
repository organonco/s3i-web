import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
    name: string,
    imageUrl: any,
    education?: string,
    bio: string,
    height?: Number
}

export const TeacherCard: FC<Props> = (props) => {

    const isMobile = (window.innerWidth <= 768)
    const textThreashold = 50;
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleIsExpanded = () => setIsExpanded(!isExpanded)

    const threasholdedBio = props.bio.slice(0, textThreashold)
    const isThreasholded = props.bio.length > threasholdedBio.length

    const styles = {
        div: {
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
        },
        image: {
            width: '100%',
            height: 'auto',
            'object-fit': 'fill',
        },
        main: {
            width: isMobile ? 300 : 500,
            padding: isMobile ? 2 : 5,
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            'align-items': 'center',
            'justify-content': 'center',
            backgroundColor: 'primary.main'
        },
        innerGrid: {
            display: 'flex',
            flexDirection: 'column',
            'align-items': 'center',
            'justify-content': 'center',
            marginTop: 3
        },
        text: {
            color: 'white',
            paddingTop: isMobile ? 1 : 2,
            textAlign: 'center'
        }
    }

    return (
        <Grid container sx={styles.main} onClick={toggleIsExpanded}>
            <div style={styles.div}>
                <Image src={props.imageUrl} alt={props.name} width={200} height={200} style={styles.image} ></Image>
            </div>
            <Grid item container sx={styles.innerGrid}>
                <Typography sx={styles.text} fontSize={30} fontWeight={'bold'}>{props.name}</Typography>
                <Typography sx={styles.text} fontSize={20} fontWeight={'regular'}>{props.education}</Typography>
                {
                    isMobile &&
                    <Typography sx={styles.text} fontSize={18} fontWeight={'regular'}>
                        {isExpanded ? props.bio : threasholdedBio}
                        <div style={{ fontWeight: 'bolder', display: 'inline' }}>{isThreasholded && !isExpanded && ' ... عرض المزيد'}</div>
                    </Typography>
                }
                {
                    !isMobile && <Typography sx={styles.text} fontSize={18} fontWeight={'regular'}>
                        {props.bio}
                    </Typography>
                }
            </Grid>
        </Grid>
    )

    if (!isMobile)
        return (
            <Card sx={{ display: 'flex', width: "60%", backgroundColor: 'primary.main' }}>
                <CardMedia
                    component="img"
                    sx={{ height: 300, width: 300, objectFit: 'contain' }}
                    image={props.imageUrl}
                    alt={props.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 5 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography gutterBottom variant="h4" component="div" color="primary" textAlign={'right'} fontWeight={'bold'}>
                            {props.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" color="text.secondary" textAlign={'right'}>
                            {props.education}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {props.bio}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        )
    else
        return (
            <Card sx={{ width: '80%' }} onClick={toggleIsExpanded}>
                <CardMedia
                    sx={{ height: props.height || 400 }}
                    image={props.imageUrl}
                    title={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="primary" textAlign={'center'}>
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary" textAlign={'center'}>
                        {props.education}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {isExpanded ? props.bio : threasholdedBio}
                        {isThreasholded && !isExpanded && ' ... عرض المزيد'}
                    </Typography>
                </CardContent>
            </Card>
        )
}