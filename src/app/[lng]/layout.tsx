// import Footer from './footer'
'use client';
import { Footer, Header } from '@/components';
import { Grid } from '@mui/material';

export default function Layout({
    params: { lng },
    children
}: {
    params: { lng: any }
    children: React.ReactNode
}) {
    return (
        <Grid container sx={{ marginTop: 6, minHeight: '100vh' }} >
            <Grid item lg={12}>
                <Header lng={lng} />
            </Grid>
            <Grid item lg={12} style={{ marginTop: 100, marginBottom: 170 }}>
                <main>{children}</main>
            </Grid>
            <Footer />
        </Grid>
    )
}