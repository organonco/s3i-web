import { Tab } from '@mui/material';
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
}

export function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            sx={{ fontSize: 24, textAlign: 'start', fontWeight: 500, paddingX: 5 }}
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            {...props}
        />
    );
}
