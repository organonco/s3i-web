import { Button } from "@mui/material";
import { t } from "i18next";
import { FC } from "react";
import { StyledButton } from ".";

interface Props {
    url: string
    text?: boolean
}
export const FileDownloader: FC<Props> = (props) => {
    let accessTokenObj = localStorage.getItem('token') ?? ''
    const downloadFile = (fileUrl: string) => {
        var link = document.createElement("a");
        link.download = 'name';
        link.href = fileUrl;
        link.setAttribute("target", "_blank");
        link.click();
        link.remove();
    }
    return (
        <>
            {props.text ? <Button onClick={() => downloadFile(props.url)}>{t('buttons.download')} </Button>
                : <StyledButton onClick={() => downloadFile(props.url)} title={t('buttons.download')} />}
        </>
    )
}