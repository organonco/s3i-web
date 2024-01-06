'use client';

import { ThemeOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
    interface TypeBackground {
        default: string;
        paper: string;
        shadow: string;
        lightShadow: string
        primary: {
            main: string;
            hover: string;
            active: string;
        };
        secondary: {
            main: string;
            hover: string;
            active: string;
        };
    }
}

const baseOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#57AFA8',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#E0C2FF',
            light: '#F5EBFF',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#47008F',
        },
        background: {
            shadow: '#F6F6F6',
            lightShadow: '#F8F7F7'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontSize: 18,
                    borderRadius: 11
                },
                outlined: {
                    backgroundColor: '#DAE9E8 !important',
                    borderColor: 'inherit !important'
                }
            }
        }
    }
}

export const theme = createTheme({
    ...baseOptions
});