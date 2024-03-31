'use client';
import { useTranslation } from '@/app/i18n/client';
import { USER_STATUS } from '@/logic/config';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Inbox, InsertComment, Mail, Menu, Notifications, AccountCircle } from '@mui/icons-material';
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
    const mailUrl = 'mailto:support@s3i.training'
    const tabArray =
        authenticatedStatus == USER_STATUS.LOGGED_IN ?
            [sitemap.home.url, sitemap.my_courses.url, sitemap.courses.index.url, sitemap.teachers.url, sitemap.about_us.url, mailUrl] :
            [sitemap.home.url, sitemap.courses.index.url, sitemap.teachers.url, sitemap.about_us.url, mailUrl]

    const { t } = useTranslation(lng, 'translation')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {

        if (tabArray[newValue] == mailUrl)
            return;

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
                <>
                    <Box sx={{ padding: 2, marginBottom: 10, backgroundColor: isHome ? 'transparent' : 'primary.main', zIndex: 200 }}>
                        <Grid sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: "100%" }}>
                            <IconButton sx={{ color: 'white' }} onClick={() => setSideMenuOpen(true)}>
                                <Menu />
                            </IconButton>
                            {!isHome && <Image src={siteIcon} alt="logo" width={150} style={{ float: 'left', padding: 2 }} />}
                        </Grid>
                    </Box>
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
                                        <ListItemText primary={t('pages.' + sitemap.about_us.title)} onClick={() => pushAndClose(sitemap.about_us.url)} sx={{ textAlign: 'center' }} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={t('pages.contact_us')} onClick={() => pushAndClose(mailUrl)} sx={{ textAlign: 'center' }} />
                                    </ListItemButton>
                                </ListItem>


                                {
                                    authenticatedStatus === USER_STATUS.NOT_LOGGEN_IN &&
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={t('buttons.login')} onClick={() => pushAndClose(sitemap.login.url)} sx={{ textAlign: 'center', color: "primary.main" }} />
                                        </ListItemButton>
                                    </ListItem>
                                }

                            </List>
                        </Box>
                    </Drawer>
                </>
                :
                <Box sx={{ width: '100%', display: 'fixed', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', paddingTop: 2, paddingX: 10, marginBottom: 4, backgroundColor: isHome ? 'transparent' : 'primary.main' }}>
                    <Box>
                        <Tabs value={tabArray.indexOf(pathname) ?? 0} onChange={handleChange} aria-label="nav tabs example" TabIndicatorProps={{ style: { width: '5%', marginRight: 40, marginLeft: 50, height: 4, borderRadius: 20, backgroundColor: 'white' } }} textColor='white'>
                            <LinkTab label={t('pages.' + sitemap.home.title)} href={sitemap.home.url} />
                            {authenticatedStatus == USER_STATUS.LOGGED_IN &&
                                <LinkTab label={t('pages.' + sitemap.my_courses.title)} href={sitemap.my_courses.url} />
                            }
                            <LinkTab label={t('pages.' + sitemap.courses.index.title)} href={sitemap.courses.index.url} />
                            <LinkTab label={t('pages.' + sitemap.teachers.title)} href={sitemap.teachers.url} />
                            <LinkTab label={t('pages.' + sitemap.about_us.title)} href={sitemap.about_us.url} />
                            <LinkTab label={t('pages.contact_us')} href={mailUrl} newTab />
                        </Tabs>
                    </Box>

                    <Box sx={{ display: 'fixed', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', marginBottom: 2 }} gap={4}>
                        <Box>
                            {authenticatedStatus === USER_STATUS.LOGGED_IN ? <Grid container alignItems={'center'} gap={2}>
                                <UserProfilePopper />

                                <IconButton onClick={handleClick}>
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
                                : authenticatedStatus === USER_STATUS.NOT_LOGGEN_IN && isHome ?
                                    <IconButton style={{ color: "white", marginTop: 0 }} onClick={() => push(sitemap.login.url)}><AccountCircle sx={{ fontSize: 50 }}></AccountCircle></IconButton>
                                    : (!isHome ? <Image src={siteIcon} alt="logo" width={150} /> : <></>)
                            }

                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
}

