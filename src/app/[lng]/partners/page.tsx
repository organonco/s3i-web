"use client";
import { PartnerCard } from '@/components';
import { Grid } from '@mui/material';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {

    return (
        <Grid container gap={2} justifyContent={'center'} flexDirection={'column'}>
            <PartnerCard name={"الهيئة الوطنية لخدمات تقانة المعلومات"} imageUrl={"https://admin.s3i.training/partners/1.png"} ></PartnerCard>
            <PartnerCard name={"وزارة التنمية الإدارية"} imageUrl={"https://admin.s3i.training/partners/2.png"}></PartnerCard>
            <PartnerCard name={"غرفة تجارة دمشق"} imageUrl={"https://admin.s3i.training/partners/3.jpg"}></PartnerCard>
        </Grid>
    )
}