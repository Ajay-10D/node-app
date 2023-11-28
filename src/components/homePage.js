import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import BlogUi from "./blogUi";
const HomePage = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Grid container maxWidth="ld" spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography
              style={{ textAlign: "center", margin: "20px" }}
              variant="h4"
            >
              My Blog
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <BlogUi />
        </Grid>
        <Grid item xs={3}>
          <BlogUi />
        </Grid>
        <Grid item xs={3}>
          <BlogUi />
        </Grid>
        <Grid item xs={3}>
          <BlogUi />
        </Grid>
        <Grid item xs={3}>
          <BlogUi />
        </Grid>
      </Grid>
    </div>
  );
};
export default HomePage;
