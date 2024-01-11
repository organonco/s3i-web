'use client';
import { useTranslation } from '@/app/i18n/client';
import { sitemap } from '@/site-map';
import { Button, Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';


interface Props {
    lng: any
    window?: () => Window;
}


function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            sx={{ fontSize: 21, textAlign: 'start', fontWeight: 500 }}
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                // Routing libraries handle this, you can remove the onClick handle when using them.
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            {...props}
        />
    );
}

export function Header({ lng }: Props) {
    const { push } = useRouter()
    let pathname = usePathname().slice(4) ?? '/'
    pathname = '/' + pathname
    const tabArray = ['/', '/courses', '/about-us']
    const { t } = useTranslation(lng, 'translation')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        // event.type can be equal to focus with selectionFollowsFocus.

        if (
            event.type !== 'click' ||
            (event.type === 'click' &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                ))
        ) {
            // console.log(tabArray[newValue])
            push(tabArray[newValue])
        }
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center' }}>
            <Box>
                <Tabs value={tabArray.indexOf(pathname)} onChange={handleChange} aria-label="nav tabs example" TabIndicatorProps={{ style: { width: '10%', marginLeft: 50 } }}>
                    <LinkTab label={t('pages.' + sitemap.home.title)} href={sitemap.home.url} />
                    <LinkTab label={t('pages.' + sitemap.courses.index.title)} href={sitemap.courses.url} />
                    <LinkTab label={t('pages.' + sitemap.teachers.title)} href={sitemap.teachers.url} />
                    <LinkTab label={t('pages.' + sitemap.partners.title)} href={sitemap.partners.url} />
                    <LinkTab label={t('pages.' + sitemap.about_us.title)} href={sitemap.about_us.url} />
                </Tabs>
            </Box>
            <Box>
                <Button variant='outlined' onClick={() => push(sitemap.login.url)}>{t('buttons.login')}</Button>
            </Box>
        </Box>
    );
}