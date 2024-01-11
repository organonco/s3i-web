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
    const handleChange = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setFieldValue(field.name, formattedDate)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ width: '100%' }} {...props} {...field} onChange={handleChange} />
        </LocalizationProvider>
    )
}
