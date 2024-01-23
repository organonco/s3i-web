import { useCoursesStore } from '@/logic/store';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import { t } from 'i18next';
import { FC } from 'react';



export const LogoutPopup: FC<{ closePopup: () => void }> = (props) => {
    const { logUserOut } = useCoursesStore()
    const handleLogoutAction = () => {
        logUserOut()
        props.closePopup()
    }
    return (
        <>
            <DialogTitle color={'error'} > {t('popup.title.logout')}</DialogTitle>
            <DialogContent>
                <DialogContentText color={'text.primary'} id="alert-dialog-slide-description">
                    {t('popup.subtitle.logout')}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'space-between' }}>
                <Grid item lg={12} container justifyContent={'space-between'}>
                    <Grid item lg={5}><Button fullWidth variant='contained' color='error' onClick={handleLogoutAction}>{t('buttons.logout')}</Button></Grid>
                    <Grid item lg={5}><Button fullWidth variant='contained' onClick={props.closePopup}>{t('buttons.ignore')}</Button></Grid>
                </Grid>
            </DialogActions>
        </>
    )
}