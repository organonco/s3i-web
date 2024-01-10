import { GeneralObject } from "@/logic/interfaces";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { t } from "i18next";
import { FC } from "react";

interface Props {
    translateKey: string
    options: GeneralObject[]
    name: string
}

export const StyledSelect: FC<Props> = (props) => {
    return (
        <Box sx={{ width: '100%' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t('labels.' + props.translateKey)}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label={t('labels.' + props.translateKey)}
                    {...props}
                >
                    {props.options.map(option => <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    )
}