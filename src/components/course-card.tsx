import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { StyledImage } from ".";
import { StyledBox } from "./box";

interface props {
  title: string;
  subTitle: string;
  imageURL: string;
  isSubscribed: boolean | null | undefined;
}

export const CourseCard: FC<props> = (props) => {
  return (
    <StyledBox backgroundColor={"primary.main"}>
      <div
        style={{
          width: "100%",
          position: "relative",
          objectFit: "cover",
          height: "100%",
        }}
      >
        <StyledImage imageURL={props.imageURL} />
      </div>
      <Box
        sx={{
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          paddingX: 2,
          paddingTop: 1,
          paddingBottom: 3,
        }}
      >
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography
            color="white"
            fontWeight={"bold"}
            fontSize={18}
            textAlign={"right"}
          >
            {props.title}
          </Typography>
          {!props.isSubscribed && (
            <Typography
              variant="caption"
              color="white"
              fontWeight={"bold"}
              sx={{
                backgroundColor: "white",
                borderRadius: 5,
                paddingY: 1,
                paddingX: 2,
                width: 120,
                height: 40,
                borderColor: "white",
                borderWidth: 1,
                color: "primary.main",
              }}
            >
              سجل الآن
            </Typography>
          )}
        </Box>
        <Typography
          color="white"
          fontWeight={"bold"}
          fontSize={12}
          textAlign={"right"}
          textOverflow={"ellipsis"}
          noWrap
        >
          {props.subTitle}
        </Typography>
      </Box>
    </StyledBox>
  );
};
