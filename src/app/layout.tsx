
import { theme } from '@/theme/index';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'S3i',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir='rtl'>
      <body>
        <div dir="rtl">
          <ToastContainer
            position={'top-left'}
            newestOnTop={false}
            theme='colored'
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={3}
            transition={Slide}
          />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}