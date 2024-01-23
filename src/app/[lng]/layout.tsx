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
            <Grid container sx={{ marginTop: 3, minHeight: '94.9vh' }} >
                <Grid item lg={12} sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <Header lng={lng} />
                </Grid>
                <Grid item lg={12} style={{ marginTop: 70, marginBottom: 170 }}>
                    <main>{children}</main>
                </Grid>
                <Footer />
            </Grid>
        </AppProvider>
    )
}