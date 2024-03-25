import { sitemap } from "@/site-map";
import { Facebook, FacebookOutlined, Instagram, LocationOn, Phone, PhoneAndroid, PhoneCallback, PhoneOutlined, Support, SupportAgent, WhatsApp } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { t } from "i18next";
import Link from "next/link";
import { FC, ReactNode } from "react";


interface Props {

}



const LinkText = (props: { title: string }) => <Typography variant="body1" color={'primary.light'}>{t(`pages.${props.title}`)}</Typography>
const IconWithText = ({ title, icon, href }: { title: string, icon: ReactNode, href: string }) => <Grid container gap={2} sx={{ alignContent: 'center', justifyContent: 'center' }}>
    <Link href={href} target="_blank">{icon}<Typography color='white' variant="subtitle2" sx={{ direction: 'ltr' }}>{title}</Typography></Link>
</Grid>

const isMobile = (window.innerWidth <= 768)

const mailUrl = 'mailto:support@s3i.training'


export const Footer: FC<Props> = (props) => {
    return (
        <Box sx={{ backgroundColor: 'primary.dark', width: '100%', height: isMobile ? null : 140, alignSelf: 'end', padding: 3, paddingInline: 10 }}>
            <Grid container item style={{ display: 'flex', flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 200, justifyContent: 'center' }}>
                <Grid item style={{ display: 'flex', flexDirection: "column", gap: 10, textAlign: 'center' }}>
                    <Link href={sitemap.home.url}><LinkText title={sitemap.home.title} /></Link>
                    <Link href={sitemap.courses.index.url}><LinkText title={sitemap.courses.index.title} /></Link>
                </Grid>
                <Grid item style={{ display: 'flex', flexDirection: "column", gap: 10, textAlign: 'center' }}>
                    <Link href={sitemap.teachers.url}><LinkText title={sitemap.teachers.title} /></Link>
                    <Link href={sitemap.partners.url}><LinkText title={sitemap.partners.title} /></Link>
                </Grid>
                <Grid item style={{ display: 'flex', flexDirection: "column", gap: 10, textAlign: 'center' }}>
                    <Link href={sitemap.about_us.url}><LinkText title={sitemap.about_us.title} /></Link>
                    <Link href={mailUrl}><LinkText title={'contact_us'} /></Link>
                </Grid>

                <Grid item style={{ display: 'flex', flexDirection: "row", gap: 10 }}>
                    <IconWithText icon={
                        <Phone sx={{ color: 'white' }} />
                    } title="" href="tel:963954141451" />

                    <IconWithText icon={
                        <FacebookOutlined sx={{ color: 'white' }} />
                    } title="" href="https://www.facebook.com/s3i.training/" />
                    <IconWithText icon={
                        <Instagram sx={{ color: 'white' }} />
                    } title="" href="https://www.instagram.com/s3i.platform/" />

                    <IconWithText icon={
                        <WhatsApp sx={{ color: 'white' }} />
                    } title="" href="https://api.whatsapp.com/send?phone=963954141451" />
                </Grid>
            </Grid>
            <Grid container item style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', paddingTop: 20 }}>
                <Typography color='white' variant="subtitle2"> جميع الحقوق محفوظة ® </Typography>
            </Grid>
        </Box >

    )
}