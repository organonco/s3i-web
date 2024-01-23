"use client";
import { sitemap } from '@/site-map';
import { Grid, Typography } from '@mui/material';
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
        </Grid>
    )
}