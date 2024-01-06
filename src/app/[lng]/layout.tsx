// import Footer from './footer'
import Header from '@/components/layout/index';
import { Grid } from '@mui/material';

export default function Layout({
    params: { lng },
    children
}: {
    params: { lng: any }
    children: React.ReactNode
}) {
    return (
        <Grid container sx={{ marginY: 6 }} >
            <Grid item lg={12}>
                <Header lng={lng} />
            </Grid>
            <Grid item lg={12} style={{ marginTop: 70 }}>
                <main>{children}</main>
            </Grid>
            {/* <Footer /> */}
        </Grid>
    )
}