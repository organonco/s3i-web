// import Footer from './footer'
'use client';
import { Footer, Header } from '@/components';
import { AppProvider } from '@/containers';
import { Grid } from '@mui/material';

export default function Layout({
    params: { lng },
    children
}: {
    params: { lng: any }
    children: React.ReactNode
}) {
    return (
        <AppProvider>
            <Grid container sx={{ minHeight: '98vh' }} >
                <Grid item lg={12} sx={{ zIndex: 1 }}>
                    <Header lng={lng} />
                </Grid>
                <Grid item lg={12} style={{ paddingBottom: 200, width: "100%"}}>
                    <main>{children}</main>
                </Grid>
                <Footer />
            </Grid>
        </AppProvider>
    )
}