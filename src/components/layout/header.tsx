'use client';
import { useTranslation } from '@/app/i18n/client';
import { USER_STATUS } from '@/logic/config';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Inbox, InsertComment, Mail, Menu, Notifications } from '@mui/icons-material';
import { Badge, Button, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popper, SwipeableDrawer, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { LinkTab, samePageLinkNavigation } from '..';
import { NotificationList } from './notifications-list';
import { UserProfilePopper } from './user-info-popper';
import Image from 'next/image';
import zIndex from '@mui/material/styles/zIndex';

interface Props {
    lng: any
    window?: () => Window;
}



export function Header({ lng }: Props) {
    const { push } = useRouter()

    const { authenticatedStatus, notificationNumber, profileInfo, logUserOut } = useCoursesStore()
    let pathname = usePathname().split('/')[2] ?? ''
    pathname = '/' + pathname
    const isHome = pathname == '/'

    const tabArray =
        authenticatedStatus == USER_STATUS.LOGGED_IN ?
            [sitemap.home.url, sitemap.my_courses.url, sitemap.courses.index.url, sitemap.teachers.url, sitemap.partners.url, sitemap.about_us.url] :
            [sitemap.home.url, sitemap.courses.index.url, sitemap.teachers.url, sitemap.partners.url, sitemap.about_us.url]

    const { t } = useTranslation(lng, 'translation')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (
            event.type !== 'click' ||
            (event.type === 'click' &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                ))
        ) {
            push(tabArray[newValue])
        }
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const isMobile = (window.innerWidth <= 768)

    const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

    const pushAndClose = (url: string) => {
        push(url)
        setSideMenuOpen(false)
    }

    const siteIcon = require('/src/assets/logo.png');


    return (
        <>
            {isMobile ?
                <Box sx={{ display: 'fixed', justifyContent: 'space-around', flexDirection: 'row', paddingTop: 2, paddingX: 10, marginBottom: 10, backgroundColor: isHome ? 'transparent' : 'white', zIndex: 200 }}>

                    <IconButton sx={{ position: 'absolute', right: 10, color: 'white' }} onClick={() => setSideMenuOpen(true)}>
                        <Menu />
                    </IconButton>

                    <Drawer
                        anchor='right'
                        open={sideMenuOpen}
                        onClose={() => setSideMenuOpen(false)}

                    >

                        <Box
                            sx={{ width: 250, borderRadius: 0 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={t('pages.' + sitemap.home.title)} onClick={() => pushAndClose(sitemap.home.url)} sx={{ textAlign: 'center' }} />
                                    </ListItemButton>
                                </ListItem>

                                {authenticatedStatus == USER_STATUS.LOGGED_IN &&

                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={t('pages.' + sitemap.my_courses.title)} onClick={() => pushAndClose(sitemap.my_courses.url)} sx={{ textAlign: 'center' }} />
                                        </ListItemButton>
                                    </ListItem>

                                }

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={t('pages.' + sitemap.courses.index.title)} onClick={() => pushAndClose(sitemap.courses.index.url)} sx={{ textAlign: 'center' }} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={t('pages.' + sitemap.teachers.title)} onClick={() => pushAndClose(sitemap.teachers.url)} sx={{ textAlign: 'center' }} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={t('pages.' + sitemap.partners.title)} onClick={() => pushAndClose(sitemap.partners.url)} sx={{ textAlign: 'center' }} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={t('pages.' + sitemap.about_us.title)} onClick={() => pushAndClose(sitemap.about_us.url)} sx={{ textAlign: 'center' }} />
                                    </ListItemButton>
                                </ListItem>


                                {
                                    authenticatedStatus === USER_STATUS.NOT_LOGGEN_IN &&
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={t('buttons.register')} onClick={() => pushAndClose(sitemap.register.url)} sx={{ textAlign: 'center', color: "primary.main" }} />
                                        </ListItemButton>
                                    </ListItem>
                                }


                            </List>
                        </Box>
                    </Drawer>

                </Box>
                :
                <Box sx={{ width: '100%', display: 'fixed', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', paddingTop: 2, paddingX: 10, marginBottom: 0 }}>
                    <Box>
                        <Tabs value={tabArray.indexOf(pathname) ?? 0} onChange={handleChange} aria-label="nav tabs example" TabIndicatorProps={{ style: { width: '5%', marginRight: 40, marginLeft: 50, height: 4, borderRadius: 20, backgroundColor: isHome ? 'white' : '#57AFA8' } }} textColor='white'>
                            <LinkTab label={t('pages.' + sitemap.home.title)} href={sitemap.home.url} />
                            {authenticatedStatus == USER_STATUS.LOGGED_IN &&
                                <LinkTab label={t('pages.' + sitemap.my_courses.title)} href={sitemap.my_courses.url} />
                            }
                            <LinkTab label={t('pages.' + sitemap.courses.index.title)} href={sitemap.courses.index.url} />
                            <LinkTab label={t('pages.' + sitemap.teachers.title)} href={sitemap.teachers.url} />
                            <LinkTab label={t('pages.' + sitemap.partners.title)} href={sitemap.partners.url} />
                            <LinkTab label={t('pages.' + sitemap.about_us.title)} href={sitemap.about_us.url} />
                        </Tabs>
                    </Box>

                    <Box sx={{ display: 'fixed', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', marginBottom: 10 }} gap={4}>
                        <Box>
                            {authenticatedStatus === USER_STATUS.LOGGED_IN ? <Grid container alignItems={'center'} gap={2}>
                                <UserProfilePopper />

                                <IconButton size='large' onClick={handleClick}>
                                    <Badge badgeContent={notificationNumber} color="info">
                                        <Notifications sx={{ height: 30, width: 30 }} />
                                    </Badge>
                                </IconButton>

                                <Popper
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    style={{ zIndex: 2 }}
                                >
                                    <NotificationList open handleClick={handleClick} />
                                </Popper>
                            </Grid>
                                : authenticatedStatus === USER_STATUS.NOT_LOGGEN_IN ? <Button variant="outlined" style={{ color: "#329996", padding: 10, paddingRight: 40, paddingLeft: 40, fontSize: 24, marginTop: 0 }} onClick={() => push(sitemap.register.url)}>{t('buttons.register')}</Button>
                                    : <></>}

                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
}

