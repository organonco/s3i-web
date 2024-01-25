import { Button } from '@mui/material';
import React from 'react';

interface Props {
    onClick: () => void
    disabled?: boolean
    title?: string
    icon?: string
    loading?: boolean
}

export const StyledButton: React.FC<Props> = (props) => {
    return (
        <Button
            variant='contained'
            fullWidth
            sx={{ mt: 2 }}
            // contentStyle={props.icon ? { width: '100%', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' } : {}}
            {...props}
        >
            {props.title}
        </Button>
    );
};
