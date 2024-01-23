import { useCoursesStore } from '@/logic/store';
import { Badge, ClickAwayListener, Divider, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { t } from 'i18next';
import { FC, useEffect } from 'react';


export const NotificationList: FC<{ open: boolean, handleClick: () => void }> = (props) => {
    const { fetchNotification, notifications } = useCoursesStore()
    useEffect(() => {
        fetchNotification()
    }, [props.open])

    return (
        <ClickAwayListener onClickAway={props.handleClick}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', width: 400 }}>
                <Grid container gap={3}>
                    <Grid item md={12}>
                        <Typography variant='h6' color='primary' mb={1}>{t('titles.notifications')}</Typography>
                        <Divider />
                    </Grid>
                    {notifications.map(notification => (
                        <Grid key={notification.id} container item direction='row' md={12} gap={1}>
                            {!notification.read && <div>   <Badge color='success' variant='dot' /></div>}
                            <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: 350 }}>
                                <Typography>{notification.title}</Typography>
                                <Typography noWrap>{notification.text}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ClickAwayListener>
    )
}