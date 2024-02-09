import { CourseDetails, CourseItem } from "@/logic/interfaces";
import { useCoursesStore } from "@/logic/store";
import { sitemap } from "@/site-map";
import { AttachFile } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { StyledButton } from ".";

export const Homework: FC<{ courseDetails: CourseDetails, courseItem: CourseItem }> = ({ courseDetails, courseItem }) => {
    const hasFeedback = courseItem.object.submission?.has_feedback
    const { push } = useRouter()
    const [selectedFile, setSelectedFile] = useState(null);
    const { uploadFile } = useCoursesStore();
    const goToDetails = () => push(sitemap.courses.homework(courseDetails.category.id, courseDetails.id, courseItem.id).url)
    const handleCapture = ({ target }: any) => {
        setSelectedFile(target.files[0]);
        console.log(target.files[0].name)
    };

    const sendFile = () => uploadFile(courseItem.id, selectedFile ?? {})

    return (
        <Grid container mt={1}>
            {hasFeedback ?
                <StyledButton onClick={goToDetails} title={t('buttons.view_feedback')}
                />
                : <Grid container gap={2}>
                    {!selectedFile && <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        color='primary'
                        disabled={!selectedFile}
                    >
                        اختيار الملف
                        <input
                            onChange={handleCapture}
                            type="file"
                            hidden
                        />
                    </Button>}

                    {selectedFile && <Typography variant='caption' color='primary.main' ><AttachFile />{selectedFile.name}</Typography>}
                    {selectedFile &&
                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                            onClick={sendFile}
                            disabled={selectedFile === null}
                        >{t('buttons.upload')}</Button>
                    }
                </Grid>
            }
        </Grid>
    )
}