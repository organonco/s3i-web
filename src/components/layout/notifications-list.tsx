import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Badge, ClickAwayListener, Divider, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { t } from 'i18next';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';


export const NotificationList: FC<{ open: boolean, handleClick: () => void }> = (props) => {
    const { fetchNotification, notifications, markNotificationsAsRead } = useCoursesStore()

    useEffect(() => {
        fetchNotification()
    }, [props.open])


    const { push } = useRouter()


    const handleClick = (notification) => {
        console.log(notification)
        let screen_name = notification.actionUrl.screen_name
        if (screen_name == "MY_COURSES")
            push(sitemap.my_courses.url)
        else if (screen_name == "COURSE")
            push(sitemap.courses.courseDetails("notification", notification.actionUrl.params.course_id).url)
        else if (screen_name == "QUIZ")
            push(sitemap.courses.quiz("notification", notification.actionUrl.params.quiz_id).url)
        
        markNotificationsAsRead(notification.id)
        props.handleClick()

        
    }

    return (
        <ClickAwayListener onClickAway={props.handleClick}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', width: 400 }}>
                <Grid container gap={3}>
                    <Grid item md={12}>
                        <Typography variant='h6' color='primary' mb={1}>{t('titles.notifications')}</Typography>
                        <Divider />
                    </Grid>
                    {notifications.map(notification => (
                        <Grid
                            key={notification.id}
                            container
                            item
                            direction='row'
                            md={12}
                            gap={1}
                            sx={{cursor: "pointer"}}
                            onClick={() => handleClick(notification)}
                        >
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