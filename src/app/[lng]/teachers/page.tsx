"use client";
import { TeacherCard } from '@/components/teacher-card';
import { API_BASE_URL } from '@/logic/config';
import { useCoursesStore } from '@/logic/store';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {

    const fetchTeachersInfo = useCoursesStore(state => state.fetchTeachersInfo)
    const teachers = useCoursesStore(state => state.teachers)

    useEffect(() => {
        fetchTeachersInfo()
    }, [lng])

    return (
        <Grid container gap={15} justifyContent={'center'} >
            {teachers?.map(teacher => <TeacherCard bio={teacher.bio} education={teacher.education} name={teacher.name} key={teacher.name} imageUrl={teacher.image_url}/>)}
        </Grid>
    )
}