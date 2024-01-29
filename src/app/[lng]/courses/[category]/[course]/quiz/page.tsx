"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page({
    params: { lng }
}: {
    params: { lng: any }
}) {
    const { back } = useRouter()
    useEffect(() => {
        back()
    }, [])


    return (
        <  >
        </>
    )
}