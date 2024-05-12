import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  name: string;
  imageUrl: any;
  education?: string;
  bio: string;
  height?: Number;
}

export const TeacherCard: FC<Props> = (props) => {
  const isMobile = window.innerWidth <= 768;
  const textThreashold = 50;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  const threasholdedBio = props.bio.slice(0, textThreashold);
  const isThreasholded = props.bio.length > threasholdedBio.length;

  const styles = {
    div: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
    image: {
      width: "100%",
      height: "auto",
      "object-fit": "fill",
    },
    main: {
      width: 300,
      padding: 2,
      borderRadius: 5,
      display: "flex",
      flexDirection: "column",
      "align-items": "center",
      "justify-content": "center",
      backgroundColor: "primary.main",
    },
    innerGrid: {
      display: "flex",
      flexDirection: "column",
      "align-items": "center",
      "justify-content": "center",
      marginTop: 3,
    },
    text: {
      color: "white",
      paddingTop: isMobile ? 1 : 2,
      textAlign: "center",
    },

    imageDiv: {
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },

    horizontalCard: {
      width: "100%",
      margin: "3%",
      marginY: "1%",
      padding: "3%",
      backgroundColor: "primary.main",
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      gap: 10,
    },

    verticalLine: {
      with: "1%",
      borderRight: "1px solid white",
    },

    education: {
      marginTop: "10%",
      paddingX: "8%",
      paddingY: "4%",
      border: "1px solid white",
      borderRadius: 3,
      color: "white",
    },
  };

  return isMobile ? (
    <Grid container sx={styles.main} onClick={toggleIsExpanded}>
      <div style={styles.div}>
        <Image
          src={props.imageUrl}
          alt={props.name}
          width={200}
          height={200}
          style={styles.image}
        ></Image>
      </div>
      <Grid item container sx={styles.innerGrid}>
        <Typography sx={styles.text} fontSize={30} fontWeight={"bold"}>
          {props.name}
        </Typography>
        <Typography sx={styles.text} fontSize={20} fontWeight={"regular"}>
          {props.education}
        </Typography>
        {isMobile && (
          <Typography sx={styles.text} fontSize={18} fontWeight={"regular"}>
            {isExpanded ? props.bio : threasholdedBio}
            <div style={{ fontWeight: "bolder", display: "inline" }}>
              {isThreasholded && !isExpanded && " ... عرض المزيد"}
            </div>
          </Typography>
        )}
        {!isMobile && (
          <Typography sx={styles.text} fontSize={18} fontWeight={"regular"}>
            {props.bio}
          </Typography>
        )}
      </Grid>
    </Grid>
  ) : (
    <Grid container sx={styles.horizontalCard}>
      <Grid sx={styles.innerGrid}>
        <div style={styles.imageDiv}>
          <Image
            src={props.imageUrl}
            alt={props.name}
            width={200}
            height={200}
            style={styles.image}
          ></Image>
        </div>
        <Typography sx={styles.text} fontSize={30} fontWeight={"bold"}>
          {props.name}
        </Typography>
        <Typography sx={styles.education} fontSize={20} fontWeight={"regular"}>
          {props.education}
        </Typography>
      </Grid>
      <Grid sx={styles.verticalLine}></Grid>
      <Grid sx={styles.innerGrid}>
        <Typography sx={styles.text} fontSize={18} fontWeight={"regular"}>
          {props.bio}
        </Typography>
      </Grid>
    </Grid>
  );
};
