import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
    name: string,
    imageUrl: any,
    education?: string,
    bio?: string,
    height?: Number
}

export const TeacherCard: FC<Props> = (props) => {
    return (
        <Card sx={{ maxWidth: 345, minWidth: 345 }}>
            <CardMedia
                sx={{ height: props.height || 400}}
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
                    {props.bio}
                </Typography>
            </CardContent>
        </Card>
    )
}