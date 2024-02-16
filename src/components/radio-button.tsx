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
    const getColor = (option) => option.is_correct == 1 ? "#49BF89" : option.is_correct == 0 ? "#E64646" : "#808080"

    return (
        <Box sx={{ width: '100%' }}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                {...props}
                {...field}
            >
                {props.options.map(option => <FormControlLabel color={currentValue === option.id ? "primary.main" : 'text.primary'} key={option.id} control={<Radio style={{color: getColor(option)}} checked={currentValue === option.id} />} {...props} {...field} label={option.text} value={option.id} />)}
            </RadioGroup>
        </Box>
    )
}