import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useField } from "formik";
import { FC } from "react";

interface Props {
    translateKey: string
    options: { id: string, text: string; value: string, is_correct?: 0 | 1 }[]
    disabled?: boolean
    name: string
}

export const StyledRadioButton: FC<Props> = (props) => {
    const [field, meta] = useField(props);
    let currentValue = meta.value ?? []
    return (
        <Box sx={{ width: '100%' }}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                {...props}
                {...field}
            >
                {props.options.map(option => <FormControlLabel key={option.id} control={<Radio checked={currentValue === option.id} />} {...props} {...field} label={option.text} value={option.id} />)}
            </RadioGroup>
        </Box>
    )
}