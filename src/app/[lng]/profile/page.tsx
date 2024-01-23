"use client";
import { sitemap } from '@/site-map';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {
    const { push } = useRouter()

    const siteIcon = require('/src/assets/logo.png');
    const redirectToLogin = () => push(sitemap.login.url)
    const redirectToRegister = () => push(sitemap.register.url)

    return (
        <Grid container gap={15} justifyContent={'center'} >
            <Box sx={{ width: '100%', height: 300, position: 'relative', backgroundColor: 'background.primary.hover' }}>
                <Image
                    alt='ايقونة'
                    src={siteIcon}
                    layout='fill'
                    objectFit='contain'
                />
            </Box>
            <Grid item lg={12}>

            </Grid>
        </Grid>
    )
}