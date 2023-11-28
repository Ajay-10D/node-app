import React from "react";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
const BlogUi = () => {
  return (
    <div>
      <Card style={{ maxWidth: "345px", margin: "20px" }}>
        <CardActionArea>
          <CardMedia
            style={{
              height: "100px",
              width: "100%",
              margin: "auto",
            }}
            image="https://d3mm2s9r15iqcv.cloudfront.net/en/wp-content/uploads/2023/09/the-SDLC-is-key-to-projects-flowing-successfully.jpeg"
            title="Blog Image"
          />
          <CardContent>
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
              faucibus tempus mi, id rhoncus nunc sodales ut. Quisque
              ullamcorper turpis eu velit accumsan, et malesuada urna consequat.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default BlogUi;
