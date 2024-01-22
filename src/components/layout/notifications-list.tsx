import { useCoursesStore } from '@/logic/store';
import { Badge, ClickAwayListener, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { FC, useEffect } from 'react';


export const NotificationList: FC<{ open: boolean, handleClick: () => void }> = (props) => {
    const { fetchNotification, notifications } = useCoursesStore()
    useEffect(() => {
        fetchNotification()
    }, [props.open])
    return (
        <ClickAwayListener onClickAway={props.handleClick}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', width: 400 }}>
                {notifications.map(notification => (
                    <Grid key={notification.id} container item direction='row' md={12} gap={2}>
                        {!notification.read && <div>   <Badge color='success' variant='dot' /></div>}
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: 350 }}>
                            <Typography>{notification.title}</Typography>
                            <Typography noWrap>{notification.text}</Typography>
                        </div>
                    </Grid>
                ))}
            </Box>
        </ClickAwayListener>
    )
}