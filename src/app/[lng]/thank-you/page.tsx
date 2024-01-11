"use client";
import { Category } from '@/logic/interfaces';
import { sitemap } from '@/site-map';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {
    const { push } = useRouter()

    const redirectToDetails = (category: Category) => push(sitemap.id(category.id).url)

    return (
        <Grid container gap={15} justifyContent={'center'}>

        </Grid>
    )
}