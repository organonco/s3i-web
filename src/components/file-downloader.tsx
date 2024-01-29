import { CourseItem } from "@/logic/interfaces";
import { t } from "i18next";
import { FC } from "react";
import { StyledButton } from ".";

interface Props {
    courseItem: CourseItem
}
export const FileDownloader: FC<Props> = (props) => {
    let accessTokenObj = localStorage.getItem('token') ?? ''
    const downloadFile = (fileUrl: string) => {
        // fetch(fileUrl, {
        //     mode: "no-cors",
        //     headers: new Headers({
        //         "Authorization": "Bearer " + accessTokenObj
        //     })
        // })
        //     // check to make sure you didn't have an unexpected failure (may need to check other things here depending on use case / backend)
        //     .then(res => res.blob())
        //     .then(blob => {
        //         var link=document.createElement('a');
        //         document.body.appendChild(link);
        //         link.href=url ;
        //         link.click();
        //     })
        //     .catch(() => alert('oh no!'));
        var link = document.createElement("a");
        link.download = 'name';
        link.href = fileUrl;
        link.setAttribute("target", "_blank");
        link.click();
        link.remove();
    }
    return (
        <StyledButton onClick={() => downloadFile(props.courseItem.object.file_url)} title={t('buttons.download')} />
    )
}