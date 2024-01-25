import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
    icon: ReactNode
    title: string
    children: ReactNode
}

export const StyledAccordion: FC<Props> = (props) => {


    return (
        <Accordion disableGutters={true}>
            <AccordionSummary
                expandIcon={<ExpandMore color='primary' />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Grid container gap={2} alignItems={'center'} sx={{ color: 'primary.main' }}>
                    {props.icon}
                    <Typography variant='h5' color={'primary'}> {props.title}</Typography>
                </Grid>

            </AccordionSummary>
            <AccordionDetails>
                {props.children}
            </AccordionDetails>
        </Accordion>
    )
}