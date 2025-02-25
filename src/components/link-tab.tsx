import { Tab } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';


export function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 ||
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
    newTab?: boolean;

}


export function LinkTab(props: LinkTabProps) {

    let pathname = usePathname().split('/')[2] ?? ''
    pathname = '/' + pathname
    const isHome = pathname == '/'

    return (
        <Tab
            component="a"
            sx={{ fontSize: 24, textAlign: 'start', fontWeight: 500, paddingX: 5, color: 'white' }}
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                if (samePageLinkNavigation(event) && !props.newTab) {
                    event.preventDefault();
                }
            }}
            target={props.newTab ? '_blank' : '_self'}
            {...props}
        />
    );
}
