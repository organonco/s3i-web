import { ArrowBack, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Grid, Icon } from "@mui/material";
import { Roboto_Flex } from "next/font/google";
import { FC, ReactNode, useRef, useState } from "react";


interface Props {
    children: ReactNode
}

const isMobile = (window.innerWidth <= 768)
const scrollAmount = 200

const styles = {
    mainGrid: {
        display: 'grid',
        paddingX: isMobile ? 3 : 10,
        'grid-template-columns': isMobile ? "100%" : '10% 80% 10%'
    },
    innerGrid: {
        display: 'flex',
        gap: 1,
        flexWrap: 'nowrap',
        'overflow-x': 'scroll',
        'scroll-behavior': 'smooth',
        'scrollbar-width': 'none',
    },
    icon: {
    },
    iconGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}


export const ScrollableGrid: FC<Props> = (props) => {


    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollableRef = useRef(null);


    const handleScrollRight = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollLeft += scrollAmount;
            setScrollPosition(scrollableRef.current.scrollLeft);
        }
    }

    const handleScrollLeft = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollLeft -= scrollAmount;
            setScrollPosition(scrollableRef.current.scrollLeft);
        }
    }


    return (
        <Grid sx={styles.mainGrid}>
            {!isMobile && <Grid onClick={handleScrollRight} sx={styles.iconGrid}><ArrowForwardIos sx={styles.icon}></ArrowForwardIos></Grid>}
            <Grid ref={scrollableRef} sx={styles.innerGrid}>
                {props.children}
            </Grid>
            {!isMobile && <Grid onClick={handleScrollLeft} sx={styles.iconGrid}><ArrowBackIos sx={styles.icon}></ArrowBackIos></Grid>}
        </Grid>
    )
}