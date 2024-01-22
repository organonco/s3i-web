"use client";
import { sitemap } from '@/site-map';
import { Button, Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/navigation';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {
    const { push } = useRouter()

    const redirectToLogin = () => push(sitemap.login.url)
    const redirectToRegister = () => push(sitemap.register.url)

    return (
        <Grid container gap={15} justifyContent={'center'} >
            <Typography variant='h2' color={'primary'}>{t('titles.thanks_for_registration')}</Typography>
            <Grid container md={7} direction={'row'} justifyContent={'space-between'} textAlign={'center'}>
                <Button variant='contained' color='secondary' onClick={redirectToLogin}>{t('buttons.continue_to_login')}</Button>
                <Typography variant='h4'>{t('texts.or')}</Typography>
                <Button variant='contained' color='secondary' onClick={redirectToRegister}>{t('buttons.back_to_register')}</Button>
            </Grid>
        </Grid>
    )
}