import React from "react";
import {
  Container,
  Grid,
  TextField,
  Box,
  Button,
  InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  return (
    // <Box
    //     display="flex"
    //     justifyContent={"center"}
    //     alignItems={"center"}
    //     minHeight={"100vh"}
    // >
    <Grid
      item
      container
      display="flex"
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      minHeight={"100vh"}
      spacing={1}
    >
      <Grid item>
        <img
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102014/apple_30th_0.png?itok=_wdnU5Wk"
          width={300}
          alt="Our logo"
        />
      </Grid>
      <Grid item>
        <TextField
          label="Email"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          margin="normal"
          type={"password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained">Log in</Button>
      </Grid>
      <Grid item>
        <Button variant="contained">Interested in joining?</Button>
      </Grid>
    </Grid>
  );
}

export default Login;
