"use client";
import { Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";


export default function Page({ params: { lng } }) {

    const isMobile = (window.innerWidth <= 768)

    const { t } = useTranslation(lng, 'translation')

    const sections = ["intro", "who_are_we", "vision", "message", "values", "outro"]

    const styles =  {
        "labels": {
          "textAlign": "right",
          "paddingTop": 4,
          "marginBottom": 2,
          "fontSize": 25,
            "color": "#2D6276",
          "textDecorationLine": "underline"
        },
        "text": {
          "textAlign": "right",
          "paddingBottom": 4,
          "color": "#666666"
        }
    }

    return (
        <Grid container px={isMobile ? 4 : 20}>
            {
                sections.map((section) =>
                    <Grid item key={section}>
                        <Typography sx={styles.labels}>{t('who-are-we.' + section + ".label")}</Typography>
                        <Typography sx={styles.text}>{t('who-are-we.' + section + ".text")}</Typography>
                        <Divider></Divider>
                    </Grid>
                )
            }
        </Grid>
    )
}