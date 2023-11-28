import React from "react";
import { Container, Typography } from "@mui/material";
const InspectBlog = () => {
  return (
    <div>
      <Container
        maxWidth="ld"
        style={{ alignItems: "center", marginTop: "30px" }}
      >
        <img
          src="https://d3mm2s9r15iqcv.cloudfront.net/en/wp-content/uploads/2023/09/the-SDLC-is-key-to-projects-flowing-successfully.jpeg"
          alt=""
          height="200px"
          width="200px"
        />
        <Typography
          style={{ fontWeight: "bold", marginBottom: "10px" }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Blog Title
        </Typography>
        <Typography
          className={""}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          faucibus tempus mi, id rhoncus nunc sodales ut. Quisque ullamcorper
          turpis eu velit accumsan, et malesuada urna consequat.
        </Typography>
      </Container>
    </div>
  );
};

export default InspectBlog;
