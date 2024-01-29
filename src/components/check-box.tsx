import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useField } from "formik";
import { FC } from "react";

interface Props {
    translateKey: string
    options: { id: string, text: string; value: string, is_correct?: 1 | 0 }[]
    disabled?: boolean
    name: string
}

export const StyledCheckBox: FC<Props> = (props) => {
    const [field, meta] = useField(props);
    let currentValue = meta.value ?? []
    return (
        <Box sx={{ width: '100%' }}>
            <FormGroup>
                {/* <Field name={props.name}> */}
                {props.options.map(option => <FormControlLabel key={option.id} control={<Checkbox checked={currentValue.includes(option.id)} />} {...props} {...field} label={option.text} value={option.id} />)}
                {/* </Field> */}
            </FormGroup>
        </Box>
    )
}