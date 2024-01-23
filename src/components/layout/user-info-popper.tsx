
import { usePopup } from '@/logic/hooks';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Edit, LockReset, Logout } from '@mui/icons-material';
import { Avatar, Button, ClickAwayListener, Dialog, Divider, Grid, IconButton, Popper, Slide, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { TransitionProps } from '@mui/material/transitions';
import { t } from 'i18next';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { EditProfilePopup } from './edit-profile-popup';
import { LogoutPopup } from './logout-popup';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const UserProfilePopper: FC<{}> = (props) => {
    const logoutPopup = usePopup()
    const editProfilePopup = usePopup()
    const { push } = useRouter()
    const { profileInfo, logUserOut } = useCoursesStore()

    const [profileanchorEl, setprofileAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleToggleProfile = (event: React.MouseEvent<HTMLElement>) => {
        setprofileAnchorEl(profileanchorEl ? null : event.currentTarget);
    };
    const profileOpen = Boolean(profileanchorEl);
    const ProfilePopperId = profileOpen ? 'simple-popper' : undefined;

    const handleLogOutClick = () => {
        handleToggleProfile()
        logoutPopup.handleOpen()
    }
    const handleEditProfiledClick = () => {
        handleToggleProfile()
        // logUserOut()
        editProfilePopup.handleOpen()
    }
    const redirectToProfile = () => {
        handleToggleProfile()
        push(sitemap.profile.url)
    }
    return (
        <>
            <Avatar sx={{ bgcolor: 'primary.main', cursor: 'pointer' }} onClick={handleToggleProfile}>{profileInfo?.name_ar.charAt(0) ?? ''}</Avatar>
            <Popper
                id={ProfilePopperId}
                open={profileOpen}
                anchorEl={profileanchorEl}
            >
                <ClickAwayListener onClickAway={handleToggleProfile}>
                    <Box sx={{ p: 3, bgcolor: 'background.paper', width: 350, marginTop: 1 }}>
                        <Grid container lg={12} gap={2}>
                            <Grid container md={12}>
                                <Grid item container gap={3} direction='row' lg={9}>
                                    <Avatar sx={{ bgcolor: 'primary.main' }} onClick={handleToggleProfile}>{profileInfo?.name_ar.charAt(0) ?? ''}</Avatar>
                                    <div>
                                        <Typography >{profileInfo?.name_ar ?? ''}</Typography>
                                        <Typography >{profileInfo?.phone ?? ''}</Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={3} container justifyContent={'flex-end'}>
                                    <IconButton size='large' onClick={handleEditProfiledClick}>
                                        <Edit sx={{ height: 20, width: 20 }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid item lg={12}>
                                <Divider />
                            </Grid>
                            <Grid item lg={12}>
                                <Button color='info' sx={{ justifyContent: 'space-between' }} fullWidth endIcon={<LockReset />} onClick={handleEditProfiledClick}>
                                    {t('buttons.change_password')}
                                </Button>
                                <Button color='error' sx={{ justifyContent: 'space-between' }} fullWidth endIcon={<Logout />} onClick={handleLogOutClick}>
                                    {t('buttons.logout')}
                                </Button>
                            </Grid>
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
                <LogoutPopup closePopup={logoutPopup.handleClose} />
            </Dialog>
            <Dialog
                open={editProfilePopup.isOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={editProfilePopup.handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
            >
                {editProfilePopup.isOpen && <EditProfilePopup closePopup={editProfilePopup.handleClose} />}
            </Dialog>
        </>
    )
}