import { sitemap } from "@/site-map";
import { Facebook, Instagram, LocationOn, Phone, WhatsApp } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { t } from "i18next";
import Link from "next/link";
import { FC, ReactNode } from "react";


interface Props {

}



const LinkText = (props: { title: string }) => <Typography variant="body1" color={'primary.light'}>{t(`pages.${props.title}`)}</Typography>
const IconWithText = ({ title, icon }: { title: string, icon: ReactNode }) => <Grid container gap={2}>
    {icon}
    <Typography color='secondary.main' variant="subtitle2">{title}</Typography>
</Grid>


export const Footer: FC<Props> = (props) => {
    return (
        <Box sx={{ backgroundColor: 'primary.dark', width: '100%', height: 130, alignSelf: 'end', padding: 3, paddingInline: 10 }}>
            <Grid container item lg={12} >
                <Grid item container md={4}>
                    <Grid item md={6}>
                        <Link href={sitemap.home.url}>   <LinkText title={sitemap.home.title} /></Link>
                        <Link href={sitemap.courses.index.url}>   <LinkText title={sitemap.courses.index.title} /></Link>
                        <Link href={sitemap.teachers.url}> <LinkText title={sitemap.teachers.title} /></Link>

                    </Grid>
                    <Grid item md={6}>
                        <Link href={sitemap.partners.url}>  <LinkText title={sitemap.partners.title} /></Link>
                        <Link href={sitemap.about_us.url}>   <LinkText title={sitemap.about_us.title} /></Link>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} md={4} gap={2}>
                    <IconWithText icon={<Phone color="secondary" sx={{ backgroundColor: 'primary.main', borderRadius: 6, padding: 0.3 }} />} title="+966666666660" />
                    <IconWithText icon={<LocationOn color="secondary" sx={{ backgroundColor: 'success.main', borderRadius: 6, padding: 0.3 }} />} title="دمشق , المزة" />
                </Grid>
                <Grid item container direction={'column'} md={4} gap={1} >
                    <IconWithText icon={<Facebook color="info" />} title="teachers_facebook" />
                    <IconWithText icon={<Instagram color="primary" />} title="teachers_ins" />
                    <IconWithText icon={<WhatsApp color="success" />} title="teachers_wts" />
                </Grid>
            </Grid>
        </Box >
    )
}