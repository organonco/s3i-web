import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, TextField, Typography } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { t } from "i18next";
import { FC, useState } from "react";

interface Props {
    name: string,
    translateKey: string,
    required?: boolean
    type?: string,
}
const textInputStyle = {
    color: '#000000',
    '& ::placeholder': {
        color: '#000000',
        fontWeight: '400',
    },
};

export const StyledTextField: FC<Props> = (props) => {
    const [field, meta] = useField(props);
    const { values, handleChange, errors, touched } = useFormikContext();

    function _renderHelperText() {
        if (meta.error && meta.touched) {
            return <Typography variant='subtitle2' >
                {t('error.' + props.translateKey + '.' + errors[props.name])}
            </Typography>
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <TextField
            id="outlined"
            label={t('labels.' + props.translateKey)}
            dir='rtl'
            {...field}
            InputLabelProps={{ dir: 'rtl' }}
            {...props}
            InputProps={{
                sx: textInputStyle,
                endAdornment: props.type == "password" ?
                    (<>
                        <InputAdornment position="end">
                            {
                                showPassword ?
                                    <Visibility sx={{ fontSize: '18px', color: 'warning.active', '&:hover': { cursor: 'pointer' } }} onClick={handleClickShowPassword} />
                                    : <VisibilityOff sx={{ fontSize: '18px', color: 'warning.active', '&:hover': { cursor: 'pointer' } }} onClick={handleClickShowPassword} />
                            }
                        </InputAdornment>
                    </>)
                    : null
            }}
            sx={{ width: '100%' }}
            error={meta.touched && meta.error && true}
            helperText={_renderHelperText()}
            type={props.type && !showPassword ? props.type : "text"}
        />
    )
}