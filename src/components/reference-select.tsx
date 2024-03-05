import { GeneralObject } from "@/logic/interfaces";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useField } from "formik";
import { t } from "i18next";
import { FC, useState } from "react";
import { StyledTextField } from ".";

const options = [
    { id: "صديق", name: "صديق" },
    { id: "رابط مباشر", name: "رابط مباشر" },
    { id: "دعوة", name: "دعوة" },
    { id: "مواقع التواصل الإجتماعي", name: "مواقع التواصل الإجتماعي" },
    { id: "غير ذلك", name: "غير ذلك" },
];

interface Props {
    translateKey: string
    name: string
}

export const ReferenceSelect: FC<Props> = (props) => {
    const [field, meta] = useField(props);
    const [isOther, setIsOther] = useState(false);

    const handleChange = (event) => {
        let otherValue = options[4].id;
        console.log(otherValue)
        console.log(event.target.value)
        field.onChange(event)
        console.log(event.target.value)
        console.log("------------")
        if(event.target.value == otherValue){
            setIsOther(true)
            field.value = ""
        }else{
            setIsOther(false)
            field.value = event.target.value;
        }
    }
    return (
        <Box sx={{ width: '100%' }}>
            <FormControl fullWidth>
                <Grid container direction={'column'} gap={2} lg={12} sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">{t('labels.' + props.translateKey)}</InputLabel>
                    {!isOther && 
                    <Select
                        dir="rtl"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={t('labels.' + props.translateKey)}
                        {...props}
                        {...field}
                        name={isOther ? "other" : props.name}
                        onChange={handleChange}
                    >
                        {options.map(option => <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>)}
                    </Select>
                    }
                    {isOther && <StyledTextField name="reference" translateKey="reference" required/>}
                </Grid>
            </FormControl>
        </Box>
    )
}