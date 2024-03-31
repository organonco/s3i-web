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
    typography: {
        h2: {
            fontSize: 10,
        }
    },
    palette: {
        primary: {
            main: '#2D6176',
            light: '#F0F9FB',
            dark: '#1D3840'
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#F0F9FB',
            light: '#F0F9FB',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#47008F',
        },
        background: {
            primary: {
                main: '#2D6176',
                active: '#92D6D1',
                hover: '#92D6D1',
            },
            paper: '#F0F9FB',
            // primary: '#2D6176',
            shadow: '#F0F9FB',
            lightShadow: '#F0F9FB',
        },
        action: {
            disabledBackground: '#F0F9FB !important',
        },
        text: {
            primary: '#000000',
            secondary: '#808080',
        },
        success: {
            main: '#49BF89',
            light: '#F0F9FB'
        }
    },
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    "& .MuiSvgIcon-root": {
                        right: "unset",
                        left: "7px",
                    },
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    left: 'inherit',
                    right: '1.75rem',
                    transformOrigin: 'right',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    textAlign: 'right',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                inputProps: {
                    sx: {
                        height: 20,
                    }
                },
                InputLabelProps: {
                    sx: {
                        left: 'auto',
                        right: 'auto',
                        transformOrigin: 'top right',
                        textAlign: 'right'
                    }
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontSize: 18,
                    borderRadius: 11,
                },
                contained: {
                    color: 'white'
                },
                containedPrimary: {
                    backgroundColor: '#2D6176 !important',
                },
                containedSecondary: {
                    backgroundColor: '#3D86AA !important',
                },
                containedError: {
                    backgroundColor: '#E64646 !important',
                },
                outlined: {
                    backgroundColor: '#F0F9FB !important',
                    borderColor: 'inherit !important'
                }
            }
        }
    }
}

import { Cairo } from 'next/font/google';
const cairo = Cairo({ subsets: ['latin'] })


export const theme = createTheme({
    ...baseOptions,
    typography: {
        fontFamily: [
            cairo.style.fontFamily
        ]
    }
});