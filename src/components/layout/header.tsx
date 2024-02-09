'use client';
import { useTranslation } from '@/app/i18n/client';
import { USER_STATUS } from '@/logic/config';
import { useCoursesStore } from '@/logic/store';
import { sitemap } from '@/site-map';
import { Notifications } from '@mui/icons-material';
import { Badge, Button, Grid, IconButton, Popper, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { LinkTab, samePageLinkNavigation } from '..';
import { NotificationList } from './notifications-list';
import { UserProfilePopper } from './user-info-popper';
import Image from 'next/image';

interface Props {
    lng: any
    window?: () => Window;
}



export function Header({ lng }: Props) {
    const { push } = useRouter()
    const { authenticatedStatus, notificationNumber, profileInfo, logUserOut } = useCoursesStore()
    let pathname = usePathname().split('/')[2] ?? '/'
    pathname = '/' + pathname
    const tabArray = [sitemap.home.url, sitemap.courses.index.url, sitemap.teachers.url, sitemap.partners.url, sitemap.about_us.url]
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
            push(tabArray[newValue])
        }
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const siteIcon = require('/src/assets/logo.png');

    return (
        <Box sx={{ width: '100%', display: 'fixed', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', paddingY: 2, backgroundColor: 'success.light' , paddingX: 20, marginBottom: 10}}>
            <Box>
                <Image alt="logo" src={siteIcon} height={50}/>
            </Box>
            <Box>
                <Tabs value={tabArray.indexOf(pathname) ?? 0} onChange={handleChange} aria-label="nav tabs example" TabIndicatorProps={{ style: { width: '10%', marginLeft: 50 } }}>
                    <LinkTab label={t('pages.' + sitemap.home.title)} href={sitemap.home.url} />
                    <LinkTab label={t('pages.' + sitemap.courses.index.title)} href={sitemap.courses.index.url} />
                    <LinkTab label={t('pages.' + sitemap.teachers.title)} href={sitemap.teachers.url} />
                    <LinkTab label={t('pages.' + sitemap.partners.title)} href={sitemap.partners.url} />
                    <LinkTab label={t('pages.' + sitemap.about_us.title)} href={sitemap.about_us.url} />
                </Tabs>
            </Box>
            <Box>
                {authenticatedStatus === USER_STATUS.LOGGED_IN ? <Grid container alignItems={'center'} gap={2}>
                    <UserProfilePopper />

                    <IconButton size='large' onClick={handleClick}>
                        <Badge badgeContent={notificationNumber} color="info">
                            <Notifications sx={{ height: 30, width: 30 }} />
                        </Badge>
                    </IconButton>

                    <Popper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                    >
                        <NotificationList open handleClick={handleClick} />
                    </Popper>
                </Grid>
                    : authenticatedStatus === USER_STATUS.NOT_LOGGEN_IN ? <Button variant='outlined' onClick={() => push(sitemap.login.url)}>{t('buttons.login')}</Button>
                        : <></>}

            </Box>
        </Box>
    );
}

