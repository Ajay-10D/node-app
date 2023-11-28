import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";
// import { makeStyles } from "@mui/styled-engine/";
// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   form: {
//     width: "100%",
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      display="flex"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={6}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            marginTop: "50px",
            border: "0.5px solid black",
            borderRadius: "10px",
          }}
        >
          <Box component="div" m={2} p={2} bgcolor="white">
            <div className="">
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <form className="" onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  style={{ marginTop: "20px" }}
                  variant="contained"
                  color="primary"
                  className={""}
                >
                  Sign In
                </Button>
              </form>
            </div>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
