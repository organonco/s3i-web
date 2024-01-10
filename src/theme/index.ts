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
    direction: 'rtl',
    palette: {
        primary: {
            main: '#57AFA8',
            light: '#92D6D1',
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
            primary: {
                main: '#57AFA8',
                active: '#92D6D1',
                hover: '#92D6D1'
            },
            paper: '#F9F9F9',
            // primary: '#57AFA8',
            shadow: '#F6F6F6',
            lightShadow: '#F8F7F7'
        },
        text: {
            primary: '#000000',
            secondary: '#57AFA8',
        }
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: 20,
                    borderRadius: 16
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                inputProps: {
                    sx: {
                        height: 20
                    }
                }
            },
            styleOverrides: {
                root: {

                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontSize: 18,
                    borderRadius: 11
                },
                contained: {
                    color: 'white'
                },
                containedPrimary: {
                    backgroundColor: '#57AFA8 !important',
                },
                containedSecondary: {
                    backgroundColor: '#3D86AA !important',
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