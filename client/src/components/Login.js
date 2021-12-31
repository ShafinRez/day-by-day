import React from "react";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  Box,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

// div 500 500 | card.x < div.x, card.y < div.y)

function Login() {
  return (
    <Box border={1} borderColor={"red"} sx={{maxWidth: "60%"}}>
      <Grid
        container
        display="flex"
        // justifyContent={"center"}
        direction={"column"}
        alignItems={"center"}
      >
        <Grid item>
          <img
            // src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102014/apple_30th_0.png?itok=_wdnU5Wk"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png"
            width={300}
            alt="Our logo"
          />
        </Grid>
        <Grid item collection display="flex" justifyContent={"center"} columnGap={1}>
          <TextField
            sx={{ backgroundColor: "white" }}
            variant="filled"
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
            sx={{ backgroundColor: "white" }}
            variant="filled"
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
        <Grid item container direction={"column"} rowGap={1}>
          <Button variant="contained">Log in</Button>
          <Button variant="contained">Interested in joining?</Button>
        </Grid>
      </Grid>
      
          
      
    </Box>
  );
}

export default Login;
