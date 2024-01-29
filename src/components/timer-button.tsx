import { t } from "i18next";
import { FC } from "react";
import { StyledButton } from ".";

interface TimerButtonProps {
    title?: string
    handleClick: () => void
    time?: string
    date?: string
}
export const TimerButton: FC<TimerButtonProps> = ({ title, handleClick, time, date }) => {

    const meetingDateTime = new Date(`${date}T${time}`);
    const past = date && new Date() > meetingDateTime;

    const datetime = () => {
        if (date)
            return " - (" +
                meetingDateTime.getHours() +
                ":" +
                meetingDateTime.getMinutes() +
                " - " +
                meetingDateTime.getDay() +
                "/" +
                meetingDateTime.getMonth() +
                "/" +
                meetingDateTime.getFullYear() +
                ")"
        return ""
    };

    return (
        <StyledButton
            onClick={handleClick}
            title={t('buttons.open_meeting')}
            disabled={past || !date}
        />
    )
}