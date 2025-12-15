import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import cirrus from "../../assets/LoginLogo.png";
import device from "../../assets/Devices.png";
import calender from "../../assets/Calender.png";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { MuiTelInput } from "mui-tel-input";
import BasicDatePickerPicker from "../util/BasicDatePicker";

function AuthSigUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  const handleVisibilityOn = () => setPasswordVisibility(true);
  const handleVisibilityOff = () => setPasswordVisibility(false);
  const handleConfirmVisibilityOff = () => setConfirmPasswordVisibility(false);
  const handleConfirmVisibilityOn = () => setConfirmPasswordVisibility(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Force same height + full width for all fields
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      height: "50px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 14px",
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: 2,
      }}
    >
      <Paper
        elevation={20}
        sx={{
          width: "100%",
          maxWidth: 600,
          padding: 4,
          borderRadius: "15px",
        }}
      >
        <Stack spacing={3}>
          <Box textAlign="center" mb={2}>
            <img
              src={cirrus}
              alt="logo"
              style={{ maxWidth: "207px", height: "auto" }}
            />
          </Box>

          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                onChange={handleChange}
                sx={inputStyle}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={inputStyle}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Mobile Number */}
            <Grid item xs={12} sm={6}>
              <MuiTelInput
                value={formData.mobile}
                onChange={(value) =>
                  setFormData({ ...formData, mobile: value })
                }
                fullWidth
                defaultCountry="IN"
                preferredCountries={["IN", "US", "GB"]}
              />
            </Grid>

            {/* DOB */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="DOB"
                type="text"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                fullWidth
                sx={inputStyle}
                placeholder="20-12-1999"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={calender} alt="calender" style={{cursor:'pointer'}} onClick={(dob)=>setFormData({...formData,dob: <BasicDatePickerPicker/>})} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                onChange={handleChange}
                fullWidth
                sx={inputStyle}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                name="password"
                type={passwordVisibility ? "text" : "password"}
                onChange={handleChange}
                fullWidth
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={inputStyle}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                      {passwordVisibility ? (
                        <VisibilityIcon onClick={handleVisibilityOff} />
                      ) : (
                        <VisibilityOffIcon onClick={handleVisibilityOn} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Confirm Password */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Confirm Password"
                type={confirmPasswordVisibility ? "text" : "password"}
                onChange={handleChange}
                fullWidth
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={inputStyle}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                      {confirmPasswordVisibility ? (
                        <VisibilityIcon onClick={handleConfirmVisibilityOff} />
                      ) : (
                        <VisibilityOffIcon
                          onClick={handleConfirmVisibilityOn}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Button variant="contained" fullWidth sx={{ py: 1.5 }}>
            Sign Up
          </Button>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{
              color: "primary.main",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Already have an account?
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default AuthSigUp;
