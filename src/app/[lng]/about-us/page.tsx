"use client";
import { Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";

export default function Page({ params: { lng } }) {
  const isMobile = window.innerWidth <= 768;

  const { t } = useTranslation(lng, "translation");

  const sections = [
    "intro",
    "who_are_we",
    "vision",
    "message",
    "values",
    "outro",
  ];

  const whoAreWe = require("/src/assets/who_are_we.jpg");

  const styles = {
    labels: {
      textAlign: "right",
      paddingTop: 4,
      marginBottom: 2,
      fontSize: 25,
      color: "#2D6276",
      textDecorationLine: "underline",
    },
    text: {
      textAlign: "right",
      paddingBottom: 4,
      color: "#666666",
    },
  };

  return (
    <Grid container width={"100%"}>
      <Image src={whoAreWe} alt="who_are_we" style={{ width: "100%" }} />
    </Grid>
  );
}
