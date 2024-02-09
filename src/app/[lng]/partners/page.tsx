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
        </Grid>
    )
}