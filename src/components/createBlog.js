import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the submitted data (e.g., save to database)
    console.log("Submitted:", { title, content });
  };

  return (
    <div>
      <Grid
        alignItems="center"
        justifyContent="center"
        display="flex"
        style={{ minHeight: "100vh", margin: "" }}
      >
        <Grid item xs={12}>
          <container maxWidth="sd">
            <Typography
              style={{ textAlign: "center", margin: "20px" }}
              variant="h4"
            >
              Add Blog
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={4}
                fullWidth
                required
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ margin: "20px" }}
              >
                Submit
              </Button>
            </form>
          </container>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogPostForm;
