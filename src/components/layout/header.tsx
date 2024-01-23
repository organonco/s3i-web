'use client';
import { useTranslation } from '@/app/i18n/client';
import { USER_STATUS } from '@/logic/config';
import { usePopup } from '@/logic/hooks';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Logout, Notifications } from '@mui/icons-material';
import { Avatar, Badge, Button, ClickAwayListener, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Popper, Slide, Tabs, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { TransitionProps } from '@mui/material/transitions';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { LinkTab, samePageLinkNavigation } from '..';
import { NotificationList } from './notifications-list';


interface Props {
    lng: any
    window?: () => Window;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function Header({ lng }: Props) {
    const { push } = useRouter()
    const { authenticatedStatus, notificationNumber, profileInfo, logUserOut } = useCoursesStore()
    let pathname = usePathname().split('/')[2] ?? '/'
    pathname = '/' + pathname
    const tabArray = [sitemap.home.url, sitemap.courses.index.url, sitemap.teachers.url, sitemap.partners.url, sitemap.about_us.url]
    const { t } = useTranslation(lng, 'translation')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        // event.type can be equal to focus with selectionFollowsFocus.

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

    const [profileanchorEl, setprofileAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleToggleProfile = (event: React.MouseEvent<HTMLElement>) => {
        setprofileAnchorEl(profileanchorEl ? null : event.currentTarget);
    };

    const profileOpen = Boolean(profileanchorEl);
    const ProfilePopperId = profileOpen ? 'simple-popper' : undefined;
    const logoutPopup = usePopup()

    const handleLogOutClick = () => {
        handleToggleProfile()
        logoutPopup.handleOpen()
    }
    const handleLogoutAction = () => {
        logUserOut()
        logoutPopup.handleClose()
    }
    const router = useRouter()
    const redirectToProfile = () => {
        handleToggleProfile()
        router.push(sitemap.profile.url)
    }
    return (
        <Box sx={{ width: '100%', display: 'fixed', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', paddingTop: 2, height: 70, backgroundColor: 'success.light' }}>
            <Box>
                <Tabs value={tabArray.indexOf(pathname) ?? 0} onChange={handleChange} aria-label="nav tabs example" TabIndicatorProps={{ style: { width: '10%', marginLeft: 50 } }}>
                    <LinkTab label={t('pages.' + sitemap.home.title)} href={sitemap.home.url} />
                    <LinkTab label={t('pages.' + sitemap.courses.index.title)} href={sitemap.courses.index.url} />
                    <LinkTab label={t('pages.' + sitemap.teachers.title)} href={sitemap.teachers.url} />
                    <LinkTab label={t('pages.' + sitemap.partners.title)} href={sitemap.partners.url} />
                    <LinkTab label={t('pages.' + sitemap.about_us.title)} href={sitemap.about_us.url} />
                </Tabs>
            </Box>
            <Box>
                {authenticatedStatus === USER_STATUS.LOGGED_IN ? <Grid container alignItems={'center'} gap={2}>

                    <Avatar sx={{ bgcolor: 'primary.main', cursor: 'pointer' }} onClick={handleToggleProfile}>{profileInfo?.name_ar.charAt(0) ?? ''}</Avatar>
                    <Popper
                        id={ProfilePopperId}
                        open={profileOpen}
                        anchorEl={profileanchorEl}
                    >
                        <ClickAwayListener onClickAway={handleToggleProfile}>
                            <Box sx={{ p: 3, bgcolor: 'background.shadow', width: 350 }}>
                                <Grid container lg={12} gap={2}>
                                    <Grid container item direction='row' md={12} gap={3} onClick={redirectToProfile} sx={{ cursor: 'pointer' }}>
                                        <Avatar sx={{ bgcolor: 'primary.main' }} onClick={handleToggleProfile}>{profileInfo?.name_ar.charAt(0) ?? ''}</Avatar>
                                        <div>
                                            <Typography >{profileInfo?.name_ar ?? ''}</Typography>
                                            <Typography >{profileInfo?.phone ?? ''}</Typography>
                                        </div>
                                    </Grid>
                                    <Button color='error' sx={{ justifyContent: 'space-between' }} fullWidth endIcon={<Logout />} onClick={handleLogOutClick}>
                                        {t('buttons.logout')}
                                    </Button>
                                </Grid>
                            </Box>
                        </ClickAwayListener>
                    </Popper>
                    <Dialog
                        open={logoutPopup.isOpen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={logoutPopup.handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        fullWidth
                    >
                        <DialogTitle color={'error'} > {t('popup.title.logout')}</DialogTitle>
                        <DialogContent>
                            <DialogContentText color={'text.primary'} id="alert-dialog-slide-description">
                                {t('popup.subtitle.logout')}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ justifyContent: 'space-between' }}>
                            <Grid item lg={12} container justifyContent={'space-between'}>
                                <Grid item lg={5}><Button fullWidth variant='contained' color='error' onClick={handleLogoutAction}>{t('buttons.logout')}</Button></Grid>
                                <Grid item lg={5}><Button fullWidth variant='contained' onClick={logoutPopup.handleClose}>{t('buttons.ignore')}</Button></Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>

                    <IconButton size='large' onClick={handleClick}>
                        <Badge badgeContent={notificationNumber} color="info">
                            <Notifications sx={{ height: 30, width: 30 }} />
                        </Badge>
                    </IconButton>
                    <Popper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                    >
                        <NotificationList open handleClick={handleClick} />
                    </Popper>
                </Grid>
                    : authenticatedStatus === USER_STATUS.NOT_LOGGEN_IN ? <Button variant='outlined' onClick={() => push(sitemap.login.url)}>{t('buttons.login')}</Button>
                        : <></>}

            </Box>
        </Box>
    );
}

