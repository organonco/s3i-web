"use client";
import { TeacherCard } from '@/components/teacher-card';
import { Grid } from '@mui/material';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {

    return (
        <Grid container gap={15} justifyContent={'center'} >
            <TeacherCard name={"الهيئة الوطنية لخدمات تقانة المعلومات"} imageUrl={"https://admin.s3i.training/partners/1.png"} height={320} ></TeacherCard>
            <TeacherCard name={"وزارة التنمية الإدارية"} imageUrl={"https://admin.s3i.training/partners/2.png"} height={320}></TeacherCard>
            <TeacherCard name={"غرفة تجارة دمشق"} imageUrl={"https://admin.s3i.training/partners/3.jpg"} height={320}></TeacherCard>
        </Grid>
    )
}