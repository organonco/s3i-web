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
            light: '#DAF4F4',
            dark: '#2D6276'
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
                hover: '#92D6D1',
            },
            paper: '#F9F9F9',
            // primary: '#57AFA8',
            shadow: '#F6F6F6',
            lightShadow: '#F9FFFF',
        },
        text: {
            primary: '#000000',
            secondary: '#57AFA8',
        },
        success: {
            main: '#49BF89'
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
                containedError: {
                    backgroundColor: '#E64646 !important',
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