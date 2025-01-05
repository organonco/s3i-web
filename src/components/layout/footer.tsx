import { sitemap } from "@/site-map";
import {
  BorderTop,
  Copyright,
  FacebookOutlined,
  Instagram,
  LinkSharp,
  PhoneOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { t } from "i18next";
import Link from "next/link";
import { FC, ReactNode } from "react";

const LinkText = (props: { title: string }) => (
  <Typography variant="body1" color={"primary.light"} textAlign={"center"}>
    {t(`pages.${props.title}`)}
  </Typography>
);

const IconLink = ({
  icon,
  href,
  text,
}: {
  icon: ReactNode;
  href: string;
  text: string;
}) => (
  <Link
    href={href}
    target="_blank"
    style={{
      color: "white",
      direction: "ltr",
      display: "flex",
      alignItems: "center",
      gap: 40,
      fontSize: "22px",
    }}
  >
    <p>{text}</p>
    <p>{icon}</p>
  </Link>
);

const isMobile = window.innerWidth <= 768;

const mailUrl = "mailto:support@s3i.training";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row-reverse",
    justifyContent: "space-around",
    gap: 10,
    padding: isMobile ? 5 : 5,
    alignItems: "center",
  },
  innerContainer: {
    width: isMobile ? "100%" : "50%",
  },
  title: {
    borderBottom: "1px solid white",
    width: isMobile ? "100%" : "50%",
    paddingY: 1,
  },
  linksContainer: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 2 : 14,
    paddingY: 5,
    paddingX: isMobile ? 0 : 2,
  },
  iconsContainer: {
    width: isMobile ? "100%" : "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 1,
    paddingY: 5,
  },
  innerLinksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  mainBox: {
    backgroundColor: "primary.dark",
    width: "100%",
  },
  bottomContainer: {
    borderTop: "1px solid white",
    display: "flex",
    justifyContent: "center",
    gap: 2,
    flexDirection: isMobile ? "column" : "row",
    paddingY: 5,
    alignItems: "center",
  },
  bottomInnerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
};
export const Footer: FC = () => {
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.mainContainer}>
        <Grid sx={styles.innerContainer}>
          <Typography
            variant="h5"
            color="white"
            fontWeight="bolder"
            style={{ marginBottom: 5, textAlign: "center", lineHeight: 2 }}
          >
            منصة سعي للتدريب والتأهيل
          </Typography>
          <Typography
            variant="h4"
            color="white"
            fontWeight="bolder"
            style={{ marginBottom: 5, textAlign: "center", lineHeight: 2 }}
          >
            study without ink
          </Typography>
        </Grid>

        <Grid sx={styles.innerContainer}>
          <Typography
            sx={styles.title}
            fontWeight={"bold"}
            color={"white"}
            variant="h6"
          >
            روابط سريعة
          </Typography>

          <Grid sx={styles.linksContainer}>
            <Grid sx={styles.innerLinksContainer}>
              <Link href={sitemap.home.url}>
                <LinkText title={sitemap.home.title} />
              </Link>
              <Link href={sitemap.courses.index.url}>
                <LinkText title={sitemap.courses.index.title} />
              </Link>
              <Link href={sitemap.teachers.url}>
                <LinkText title={sitemap.teachers.title} />
              </Link>
            </Grid>
            <Grid sx={styles.innerLinksContainer}>
              <Link href={sitemap.partners.url}>
                <LinkText title={sitemap.partners.title} />
              </Link>
              <Link href={sitemap.about_us.url}>
                <LinkText title={sitemap.about_us.title} />
              </Link>
              <Link href={mailUrl}>
                <LinkText title={"contact_us"} />
              </Link>
            </Grid>
          </Grid>

          <Typography
            sx={styles.title}
            fontWeight={"bold"}
            color={"white"}
            variant="h6"
          >
            تواصل معنا
          </Typography>

          <Grid sx={styles.iconsContainer}>
            <IconLink
              icon={
                <PhoneOutlined sx={{ color: "white", width: 40, height: 40 }} />
              }
              href="tel:963954141451"
            />

            <IconLink
              icon={
                <FacebookOutlined
                  sx={{ color: "white", width: 40, height: 40 }}
                />
              }
              href="https://www.facebook.com/s3i.training/"
            />

            <IconLink
              icon={
                <Instagram sx={{ color: "white", width: 40, height: 40 }} />
              }
              href="https://www.instagram.com/s3i.training/"
            />

            <IconLink
              icon={<WhatsApp sx={{ color: "white", width: 40, height: 40 }} />}
              href="https://api.whatsapp.com/send?phone=963954141451"
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.bottomContainer}>
        <Link href="https://www.s3i.training">
          <Grid sx={styles.bottomInnerContainer}>
            <Typography color={"white"} textAlign={"center"}>
              www.s3i.training
            </Typography>
            <LinkSharp sx={{ color: "white" }}></LinkSharp>
          </Grid>
        </Link>
        <Grid sx={styles.bottomInnerContainer}>
          <Typography color={"white"} textAlign={"center"}>
            Study without ink
          </Typography>
          <Copyright sx={{ color: "white" }}></Copyright>
        </Grid>
      </Box>
    </Box>
  );
};
