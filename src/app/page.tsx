'use client';
import { useRouter } from 'next/navigation';

export default function Home() {


const { push } = useRouter()
if (typeof window !== 'undefined') {
  push('/home')
}



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  )
}
