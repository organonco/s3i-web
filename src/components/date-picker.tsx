import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useField, useFormikContext } from 'formik';
import { FC } from "react";

interface Props {
    name: string
}
export const StyledDatePicker: FC<Props> = (props) => {
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();
    const handleChange = (date: Date | null) => {
        setFieldValue(field.name, date.toString())
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ width: '100%' }} {...props} {...field} onChange={handleChange} />
        </LocalizationProvider>
    )
}
